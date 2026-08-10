"use client"

import React, { JSX } from "react"
import { createContext, useContext } from "react"
import { AnimatePresence, motion } from "motion/react"
import "./dropdown.css"

// onClick: callback function that gets invoked when the option is clicked.
// isDangerous: hints that this option is dangerous.
// children: can be either a string or a custom component.
type OptionProps = {
    onClick?: () => void,
    isDangerous?: boolean,
    children: string | JSX.Element
}

// open: openstate of the option list.
// toggle: callback function to toggle the open state.
type DropdownContextType = {
    open: boolean,
    toggle: () => void
}

const DropdownContext = createContext<DropdownContextType | null>(null)

// Wrapper container of the dropdown.
// Passes the DropdownContext to the children.
export function Dropdown({children}: {children: React.ReactNode}) {
    const [open, setOpen] = React.useState<boolean>(false)

    function toggle() {
        setOpen(prev => !prev)
    }

    return (
        <DropdownContext.Provider value={{open, toggle}}>
            <div className="dropdown-container">
                {children}
            </div>
        </DropdownContext.Provider>
    )
}

// Clickable button that allows the option list to popup.
export function Header({children}: {children: string | JSX.Element}) {

    const dropDownContext = useContext(DropdownContext)

    if (!dropDownContext) {
        console.error("InputOTP.Header: context is undefined")
        return
    }

    const { open, toggle } = dropDownContext

    return (
        <button
            className="dropdown-header"
            onClick={toggle}
        >{children}
        </button>
    )
}

// Option list that renders when the open state is set to 'true'.
// Contains
export function List({children}: {children: React.ReactNode}) {
    const dropDownContext = useContext(DropdownContext)

    if (!dropDownContext) {
        console.error("InputOTP.Header: context is undefined")
        return
    }

    const { open, toggle } = dropDownContext

    return (
        <AnimatePresence>
            {open ? (
                <motion.ul 
                    className="dropdown-list"
                    initial={{scale: 0.9, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0.9, opacity: 0}}
                    transition={{duration: 0.1}}
                >
                    {children}
                </motion.ul>

            ): null}
        </AnimatePresence>
    )
}

// Option that fires the onClick callback if applicable and closes the list popup.
export function Option({onClick, isDangerous=false, children}: OptionProps) {
    const dropDownContext = useContext(DropdownContext)

    if (!dropDownContext) {
        console.error("InputOTP.Header: context is undefined")
        return
    }

    const { open, toggle } = dropDownContext


    function handleClick() {
        toggle()
        if (onClick) {onClick()}
    }

    return (
        <li className={"dropdown-option " + (isDangerous ? "danger" : "")}>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}

// Define subcomponents.
Dropdown.Header = Header
Dropdown.List = List
Dropdown.Option = Option

export default Dropdown

