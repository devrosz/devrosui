"use client"

import React, { ReactNode } from "react"
import { useContext, createContext, useRef } from "react"
import "./otp.css"

type InputOTPProps = {
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

    const inputLength: number = children && children instanceof Array
        ? children.filter(child => child.type.name === "Slot").length
        : 0

    const [value, setValue] = React.useState<string>("")

    React.useEffect(() => {
        if (value.length === inputLength && onSubmit && autoSubmit) {
            onSubmit(value)
        }
    }, [value, inputLength])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target
        setValue(prev => prev + value)
    }

    function handleKeyDown(e) {
        if (e.key.toLowerCase() === "backspace") {
            setValue(prev => prev.slice(0, prev.length - 1))
        }
    }

    return (
        <InputOTPContext.Provider value={{value, handleChange, handleKeyDown, inputLength, disabled}}>
            <div className="input-otp-container">
                {label && <label>{label}</label>}
                {description && <p>{description}</p>}
                <form onSubmit={onSubmit} className="input-otp-form">
                    {children}
                </form>
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
                className="input-otp-slot"
                aria-label={`slot ${index} of the input otp`}
                disabled={value.length !== index && index !== inputLength - 1}
                value={value.length >= index ? value[index] : ""}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                maxLength={1} 
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