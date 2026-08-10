"use client"

import React from "react"
import { JSX, useId } from "react"
import { createContext, useContext } from "react"
import { AnimatePresence, motion } from "motion/react"
import "./dropdown.css"

// onClick: callback function that gets invoked when the option is clicked.
// isDangerous: hints that this option is dangerous.
// children: can be either a string or a custom component.
type ItemProps = {
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
        console.error("Dropdown.Header: context is undefined")
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

// Item list that renders when the open state is set to 'true'.
export function List({children}: {children: React.ReactNode}) {
    const dropDownContext = useContext(DropdownContext)

    if (!dropDownContext) {
        console.error("Dropdown.List: context is undefined")
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

// Item that fires the onClick callback if applicable and closes the list popup.
export function Item({onClick, isDangerous=false, children}: ItemProps) {
    const dropDownContext = useContext(DropdownContext)

    if (!dropDownContext) {
        console.error("Dropdown.Item: context is undefined")
        return
    }

    const { open, toggle } = dropDownContext
    const key = useId()
    console.log(key)

    function handleClick() {
        toggle()
        if (onClick) {onClick()}
    }

    return (
        <li 
            className={"dropdown-item " + (isDangerous ? "danger" : "")}
            key={key}
        >
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}

// Define subcomponents.
Dropdown.Header = Header
Dropdown.List = List
Dropdown.Item = Item

export default Dropdown

