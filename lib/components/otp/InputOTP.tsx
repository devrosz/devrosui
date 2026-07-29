"use client"

import React, { ReactNode } from "react"
import { useContext, createContext, useRef } from "react"
import "./otp.css"

type InputOTPProps = {
    label?: string,
    description?: string,
    onSubmit?: (arg0: string) => Promise<void> | void
    children: ReactNode
}

type InputOTPContextType = {
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleKeyDown: (e: React.KeyboardEvent) => void,
    maxLength: number
}

const InputOTPContext = createContext<null | InputOTPContextType>(null)

function InputOTP({label, description, onSubmit, children}: InputOTPProps) {
    const maxLength: number = 6
    const [value, setValue] = React.useState<string>("")

    React.useEffect(() => {
        if (value.length === maxLength && onSubmit) {
            onSubmit(value)
        }
    }, [value, maxLength])

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
        <InputOTPContext.Provider value={{value, handleChange, handleKeyDown, maxLength}}>
            <form onSubmit={onSubmit} className="input-otp-container">
                {label && <label>{label}</label>}
                {description && <p>{description}</p>}
                {children}
            </form>
        </InputOTPContext.Provider>
    )
}

function Slot({index}) {
    const inputRef = useRef(null)
    const context = useContext(InputOTPContext)

    if (!context) {
        return null
    }

    const { value, handleChange, handleKeyDown, maxLength } = context
    const InputJSX = (
            <input
                ref={inputRef}
                type="string"
                id={`slot-${index}`}
                key={`slot-${index}`}
                className={"input-otp-slot " + (value.length === index ? "focused" : "")}
                aria-label={`slot ${index} of the input otp`}
                disabled={value.length !== maxLength && value.length !== index}
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