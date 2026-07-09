"use client"

import React from "react"
import { BiChevronDown } from "react-icons/bi"
import { motion, AnimatePresence } from "motion/react"
import "./select.css"

type SelectProps = {
    name: string,
    id: string,
    options: (string | number)[],
    label?: string,
    required?: boolean,
    placeholder?: string | number,
}

export default function Select({
    name="select",
    id="select",
    options=[],
    placeholder= options[0] ?? "Select an option",
    label,
    required=true
}: SelectProps) {
    const [open, setOpen] = React.useState<boolean>(false)
    const [option, setOption] = React.useState<string | number>(placeholder)

    function toggleOptions(): void {
        setOpen(prev => !prev)
    }

    function handleSelect(value: string | number): void {
        setOption(value)
        toggleOptions()
    }

    return (
        <div className="select-container">
            {label && <h5>{label}</h5>}
            <button
                name={name}
                id={id}
                onClick={toggleOptions}
                className="select-button"
            >
                {typeof option === "string" && option.length > 20 ? option.slice(0, 20) + "..." : option}
                <BiChevronDown 
                    className="open-options-icon" 
                    style={{transform: `rotate(${open ? 180 : 0}deg)`, transition: "0.25s"}}
                />
            </button>
            <AnimatePresence>
                {open && options && options.length > 0 ? (
                    <motion.ul 
                        className="option-list"
                        style={{top: label ? "60px" : "30px"}}
                        initial={{scale: 0.95, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.95, opacity: 0}}
                        transition={{duration: 0.1}}
                    >
                        {options.map((option, i) => {
                            return (
                                <li key={"option-" + i}>
                                    <button onClick={() => handleSelect(option)}>
                                        {option}
                                    </button>
                                </li>
                            )
                        })}
                    </motion.ul>
                ): null}
            </AnimatePresence>
        </div>
    )
}