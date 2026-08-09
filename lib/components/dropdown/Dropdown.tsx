"use client"

import React from "react"
import { createContext, useContext } from "react"
import "./dropdown.css"

type DropdownContextType = {
    open: boolean,
    toggle: () => void
}

const DropdownContext = createContext<DropdownContextType | null>(null)

export function Dropdown({children}) {
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

export function Header({children}) {

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

export function List({children}) {
    const dropDownContext = useContext(DropdownContext)

    if (!dropDownContext) {
        console.error("InputOTP.Header: context is undefined")
        return
    }

    const { open, toggle } = dropDownContext

    return open ? (
        <ul className="dropdown-list">
            {children}
        </ul>
    ) : null
}

export function Option({onClick, children}) {
    return (
        <li className="dropdown-option">
            <button onClick={onClick}>{children}</button>
        </li>
    )
}

Dropdown.Header = Header
Dropdown.List = List
Dropdown.Option = Option

export default Dropdown

