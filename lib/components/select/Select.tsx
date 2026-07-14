"use client"

import React from "react"
import { BiChevronDown } from "react-icons/bi"
import { FaCheck } from "react-icons/fa6"
import { motion, AnimatePresence } from "motion/react"
import "./select.css"

// name: name of the select input which should be used to index the formData in
// a formData change handler.
// id: id of the select input.
// values: array of selected option(s)
// onSelect: callback function to pass selection to parent component.
// options: array of options to choose from.
// label: label above the select input.
// multiple: allow multiple selections.
// placeholder: placeholder for the select input.
// disabled: disable input.
type SelectProps = {
    name: string,
    id: string,
    values: (string | number)[],
    onSelect: (name: string, value: string | (string | number)[]) => void,
    options: (string | number)[],
    label?: string,
    multiple?: boolean,
    placeholder?: string | number,
    disabled?: boolean
}

// Component that lets the user select an option out of a list of options.
export default function Select({
    name="select",
    id="select",
    values=[],
    onSelect,
    options=[],
    placeholder=options[0] ?? "Select an option",
    label,
    multiple=false,
    disabled=false
}: SelectProps) {
    const [open, setOpen] = React.useState<boolean>(false)

    // Toggles the options list.
    function toggleOptions(): void {
        setOpen(prev => !prev)
    }

    // Saves the currently selected option(s) and uses the callback function to pass
    // it to the parent component.
    function handleSelect(selection: string | number): void {
        // Concat option to selected options list if not present yet,
        // otherwise remove it.
        if (multiple) {
            const newValue =
                    values.includes(selection) ? values.filter(prevOption => prevOption != selection)
                    : values.concat([selection])
            onSelect(name, newValue)
        } else {
            // Select option or remove it if already present.
            const newValue = values[0] === selection ? [] : [selection]
            onSelect(name, newValue)
            toggleOptions()
        }
    }

    // Clip too long text.
    function formatText(text: string) : string {
        return text.length > 20 ? text.slice(0, 20) + "..." : text
    }

    return (
        <div className="select-container">
            {label && <h5>{label}</h5>}
            <button
                name={name}
                id={id}
                onClick={toggleOptions}
                className="select-button"
                disabled={disabled}
            >
                {values.length > 0 ? values.map((option, i) => {
                    const isLast = i === values.length - 1
                    const optionDisplay = !multiple || isLast ? option : option + ", "
                    return (
                        optionDisplay
                    )
                    }) 
                    : typeof placeholder === "string" ? formatText(placeholder) : placeholder
                }
                <BiChevronDown 
                    className="open-options-icon" 
                    style={{transform: `rotate(${open ? 180 : 0}deg)`, transition: "0.25s"}}
                />
            </button>
            <AnimatePresence>
                {open && options && options.length > 0 ? (
                    <motion.ul 
                        className="option-list"
                        style={{top: label ? "80px" : "50px"}}
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
                                        {values.includes(option) && <FaCheck />}
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