"use client"

import React from "react"
import { ReactNode, useContext, createContext, useRef, JSX } from "react"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { motion } from "motion/react"
import "./otp.css"

type InputOTPProps = {
    children: ReactNode
}

// errorMessage: error message that originates from the parent-component and
// is supossed to display errors related to network, API-calls etc.
// onSubmit: callback function that gets called when the input can be submitted.
// autoSubmit: if true, onSubmit will be called when every slot has been filled in.
// disabled: if true, prevents the user from filling in the OTP input.
// allowNumbers: if true, allow numbers to be typed in.
// allowLetters: if true, allow letters to be typed in.
// children: InputOTP.Slot components and if applicable, InputOTP.Separator.
type InputOTPPFormrops = {
    errorMessage?: string
    onSubmit?: (arg0: string) => Promise<void> | void,
    autoSubmit?: boolean,
    disabled?: boolean,
    allowNumbers?: boolean,
    allowLetters?: boolean,
    children: ReactNode
}

type InputOTPComponent = React.FC<InputOTPProps> & {
    Form: React.FC<InputOTPPFormrops>
    Slot: React.FC<SlotProps>,
    Label: React.FC<LabelProps>,
    Description: React.FC<DescriptionProps>,
    Separator: React.FC
}

type InputOTPContextType = {
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleKeyDown: (e: React.KeyboardEvent) => void,
    inputLength: number,
    disabled?: boolean
}

type LabelProps = {
    children: string
}

type DescriptionProps = {
    children: string
}

type SlotProps = {
    index: number
}

// Wrapper for the Form element.
function InputOTP({children}: InputOTPProps) {
    return (
        <div className="input-otp-container">
            {children}
        </div>
    )
}

// Provides the necessary configuration settings to sub-components like InputOTP.Slot.
const InputOTPContext = createContext<null | InputOTPContextType>(null)

// Input component used for authentication or verification.
// It consists of multiple slots where each slot takes in exactly 1 symbol.
// Only the current slot can be filled in, i.e. if a user types in a symbol
// in a slot, the focus automatically moves to the next slot and disables
// the previous slot as well as the next slots.
function Form({
    errorMessage="",
    onSubmit,
    autoSubmit=true,
    disabled=false,
    allowLetters=true,
    allowNumbers=true,
    children
}: InputOTPPFormrops) {

    // Check if either numbers or letters or both are allowed.
    if (!allowNumbers && !allowLetters) {
        throw new Error("InputOTP: you must either allow numbers or letters or both.")
    }

    // Count the amount of children (which are supposed to be InputOTP.Slot components)
    // to get the length of the input required.
    const inputLength: number = React.Children.toArray(children).filter(child => {
        return React.isValidElement(child) && child.type === Slot
    }).length

    const [value, setValue] = React.useState<string>("")
    const [error, setError] = React.useState<string>("")

    // Autosubmit if all slots have been filled in and if autosubmit is enabled.
    React.useEffect(() => {
        if (value.length === inputLength && onSubmit && autoSubmit) {
            handleSubmit(value)
        }
    }, [value, inputLength])

    // Listen to error messages that have been passed to this component.
    // These are supposed to be error messages coming from the parent component
    // such as API-errors, network-errors or other validation errors etc.
    React.useEffect(() => {
        setValue("")
        setError(errorMessage)
    }, [errorMessage])

    // Validate input to enforce only numbers and/or letters and no other symbols.
    function verify(input: string): boolean | Error {
        // Allow numbers only.
        if (allowNumbers && !allowLetters) {
            const numbersRegex = /^[0-9]+$/
            if (!numbersRegex.test(input)) {
                throw new Error("Input can only contain numbers")
            }
        // Allow letters only.
        } else if (!allowNumbers && allowLetters) {
            const lettersRegex = /^[a-zA-Z]+$/
            if (!lettersRegex.test(input)) {
                throw new Error("Input can only contain letters")
            }
        // Allow numbers and letters.
        } else if (allowNumbers && allowLetters) {
            const numbersAndLettersRegex = /^[0-9a-zA-Z]+$/
            if (!numbersAndLettersRegex.test(input)) {
                throw new Error("Input can only contain numbers and letters")
            }
        // Fallback error
        } else {
            throw new Error("An unexpected error occured")
        }

        return true
    }

    // Resets the error and loops over the input to paste each character
    // of the input into one slot at time.
    // The input can either be a single symbol or a string of multiple symbols
    // (due to autofill or copy paste).
    // Each symbol undergoes a validation before it has been propagated.
    // If validation fails, an error will be created and the symbol gets omitted.
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setError("")

        // Safeguard to prevent that focus moves pass the maximum length.
        if (value.length === inputLength) {
            return
        }

        const newInput: string = e.target.value
        newInput.split("").forEach(symbol => {
            try {
                if (value.length > 0) {
                    verify(value + symbol)
                }
                setValue(prev => prev + symbol)
            } catch(e) {
                if (e instanceof Error) {
                    console.error(`InputOTP: ${e.message}`)
                    setError(e.message)
                }
                return
            }
        })
    }

    // Listen for backspace key presses to pop the last symbol
    // of the value string and move the focus to the previous slot.
    // Listen for Enter key presses to manually submit.
    function handleKeyDown(e: React.KeyboardEvent) {
        const key = e.key.toLowerCase()
        if (key === "backspace") {
            setError("")
            setValue(prev => prev.slice(0, prev.length - 1))
            // Manual submit with 'Enter' key if all slots have been filled in.
        } else if (key === "enter" && value.length === inputLength) {
            handleSubmit(value)
        } else {
            return
        }
    }

    // Wrapper function for the onSubmit callback function.
    // This wrapper first resets the current valuestring and error
    // before calling the onSubmit callback.
    function handleSubmit(input: string): void {
        if (value.length !== inputLength) {
            setError("Please fill in every slot")
            return
        }
        setValue("")
        if (onSubmit) {
            onSubmit(input)
        }
    }

    return (
        <InputOTPContext.Provider value={{value, handleChange, handleKeyDown, inputLength, disabled}}>
            <motion.form
                animate={error ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                transition={error ? { duration: 0.4, repeat: 0 } : {}}
                className={"input-otp-form " + (error ? "error" : "")}
            >
                {children}
            </motion.form>
            {error && (
                <div className="otp-error-container">
                    <AiOutlineExclamationCircle />
                    <p>{error}</p>
                </div>
            )}
        </InputOTPContext.Provider>
    )
}


// Single slot in the input OTP.
// Listens for input changes and calls the handleChange function.
// Listens for key presses and calls the handleKeyDown function.
// Moves the focus to this slot if the previous slot has been filled in.
function Slot({index}: SlotProps) {
    const inputRef = useRef(null)
    const context = useContext(InputOTPContext)
    
    if (!context) {
        return null
    }
    
    const { value, handleChange, handleKeyDown, inputLength, disabled } = context
    const enabledIndex = value.length === inputLength ? inputLength - 1 : value.length

    const InputJSX = (
            <input
                ref={inputRef}
                type="string"
                id={`slot-${index}`}
                key={`slot-${index}`}
                className={"input-otp-slot " + (disabled ? "disabled" : "")}
                aria-label={`slot ${index} of the input otp`}
                disabled={disabled || index !== enabledIndex}
                value={value[index] ?? ""}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        )

        // Move focus to this slot.
        React.useEffect(() => {
            if (enabledIndex === index && inputRef && inputRef.current) {
                inputRef.current.focus()
            }
        }, [value, enabledIndex])

        return InputJSX
}

// Additional short paragraph to describe what is expected from the user.
function Description({children}: DescriptionProps) {
    return (
        <p className="input-otp-description">{children}</p>
    )
}

// Label for the OTP input.
function Label({children}: LabelProps) {
    return (
        <h5 className="input-otp-label">{children}</h5>
    )
}

// Separator for codes that include a '-'.
function Separator() {
    return (
        <span className="input-otp-separator">-</span>
    )
}

// Create sub-components.
InputOTP.Form = Form
InputOTP.Slot = Slot
InputOTP.Label = Label
InputOTP.Description = Description
InputOTP.Separator = Separator

export default InputOTP