"use client"

import React from "react"
import { ReactNode, useContext, createContext, useRef } from "react"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import "./otp.css"

type InputOTPProps = {
    correctInput: string,
    label?: string,
    description?: string,
    onSubmit?: (arg0: string) => Promise<void> | void,
    autoSubmit?: boolean,
    disabled?: boolean,
    allowNumbers?: boolean,
    allowLetters?: boolean,
    children: ReactNode
}

type InputOTPContextType = {
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleKeyDown: (e: React.KeyboardEvent) => void,
    inputLength: number,
    disabled?: boolean
}

const InputOTPContext = createContext<null | InputOTPContextType>(null)

function InputOTP({
    label,
    description,
    onSubmit,
    autoSubmit=true,
    disabled=false,
    allowLetters=false,
    allowNumbers=true,
    children
}: InputOTPProps) {

    if (!allowNumbers && !allowLetters) {
        throw new Error("InputOTP: you must either allow numbers or letters or both.")
    }

    const inputLength: number = children && children instanceof Array
        ? children.filter(child => child.type.name === "Slot").length
        : 0

    const [value, setValue] = React.useState<string>("")
    const [error, setError] = React.useState<string>("")

    React.useEffect(() => {
        if (value.length === inputLength && onSubmit && autoSubmit) {
            onSubmit(value)
        }
    }, [value, inputLength])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setError("")
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

    function handleKeyDown(e) {
        if (e.key.toLowerCase() === "backspace") {
            setError("")
            setValue(prev => prev.slice(0, prev.length - 1))
        }
    }

    return (
        <InputOTPContext.Provider value={{value, handleChange, handleKeyDown, inputLength, disabled}}>
            <div className="input-otp-container">
                {label && <label>{label}</label>}
                {description && <p>{description}</p>}
                <form onSubmit={onSubmit} className={"input-otp-form " + (error ? "error" : "")}>
                    {children}
                </form>
                {error && (
                    <div className="otp-error-container">
                        <AiOutlineExclamationCircle />
                        <p>{error}</p>
                    </div>
                )}
            </div>
        </InputOTPContext.Provider>
    )
}

function Slot({index}) {
    const inputRef = useRef(null)
    const context = useContext(InputOTPContext)

    if (!context) {
        return null
    }

    const { value, handleChange, handleKeyDown, inputLength, disabled } = context
    const InputJSX = (
            <input
                ref={inputRef}
                type="string"
                id={`slot-${index}`}
                key={`slot-${index}`}
                className={"input-otp-slot " + (disabled ? "disabled" : "")}
                aria-label={`slot ${index} of the input otp`}
                disabled={disabled || (value.length !== index && index !== inputLength - 1)}
                value={value[index] ?? ""}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        )

        React.useEffect(() => {
            if (value.length === index && inputRef && inputRef.current) {
                inputRef.current.focus()
            }
        }, [value])

        return InputJSX
}

function Separator() {
    return (
        <span className="input-otp-separator">-</span>
    )
}

InputOTP.Slot = Slot
InputOTP.Separator = Separator
export default InputOTP