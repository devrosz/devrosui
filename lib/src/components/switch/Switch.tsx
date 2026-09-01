"use client"

import React from "react"
import { createContext, useContext, JSX } from "react"
import "./switch.css"

// isActive: initial state of the switch.
// onActive: callback function when switch is on.
// onDeactive: callback function when switch is off.
// disabled: prevents user from toggling switch.
// children: expects Switch.Track and Switch.Meta if applicable.
type SwitchProps = {
    isActive?: boolean,
    onActive?: () => Promise<void> | void,
    onDeactive?: () => Promise<void> | void,
    disabled?: boolean
    children: JSX.Element | JSX.Element[]
}

// active: holds the state of the toggle.
// handleClick: callback when switch is toggled.
// disabled: disabled state of switch.
type SwitchContextObj = {
    active: boolean,
    handleClick: () => void,
    disabled: boolean
}

const SwitchContext = createContext<SwitchContextObj | null>(null)

// Wrapper for switch component that takes in all props and passes it down to
// the subcomponents.
function Switch({isActive=false, onActive, onDeactive, disabled=false, children}: SwitchProps) {
    const [active, setActive] = React.useState<boolean>(isActive)

    // Toggles active state and calls activation functions.
    function handleClick() {
        const newState: boolean = !active
        setActive(newState)

        // A separate variable is used to hold the new value so that
        // the activation functions can be fired immediately and not 1 render too late.
        if (onActive && newState) {onActive()}
        if (onDeactive && !newState) {onDeactive()}
    }

    return (
        <SwitchContext.Provider value={{active, handleClick, disabled}}>
            <div className="switch-container">
               {children}
            </div>
        </SwitchContext.Provider>
    )
}

// Slidable track of the switch thumb.
function Track({children}: {children: JSX.Element}) {
    const context = useContext(SwitchContext)

    if (!context) {
        console.error("Switch.Track: context is undefined.")
        return
    }

    const { active, handleClick, disabled } = context

    return (
         <button
            disabled={disabled}
            className={"switch-track " + (active ? "active" : "")}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

// Circle that moves through the track given the active state.
function Thumb({children}: {children?: JSX.Element}) {
    const context = useContext(SwitchContext)

    if (!context) {
        console.error("Switch.Track: context is undefined.")
        return
    }

    const { active } = context

    return (
        <div
            className="switch-thumb"
            style={{transform: `translateX(${active ? "26px" : 0})`}}
        >
            {children && children}
        </div>
    )
}

// Wrapper container for meta-information about the switch e.g. label or description.
function Meta({children}: {children: JSX.Element | JSX.Element[]}) {
    return <div className="switch-meta">{children}</div>
}

// Title of the switch input.
function Label({children}: {children: string}) {
    return <h5 className="switch-label">{children}</h5>
}

// Short paragraph containing extra information about the switch input.
function Description({children}: {children: string}) {
    return <p className="switch-description">{children}</p>
}

// Defining subcomponents.
Switch.Track = Track
Switch.Thumb = Thumb
Switch.Meta = Meta
Switch.Label = Label
Switch.Description = Description

export default Switch