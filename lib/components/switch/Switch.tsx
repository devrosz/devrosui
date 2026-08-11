"use client"

import React from "react"
import { createContext, useContext, JSX } from "react"
import "./switch.css"

type SwitchProps = {
    isActive?: boolean,
    onActive?: () => Promise<void> | void,
    onDeactive?: () => Promise<void> | void,
    disabled: boolean
    children: React.ReactNode
}

type SwitchContextObj = {
    active: boolean,
    handleClick: () => void,
    disabled: boolean
}

type TrackProps = {
    children: Thumb
}

type ThumbProps = {
    children?: JSX.Element
}

const SwitchContext = createContext<SwitchContextObj | null>(null)

function Switch({isActive=false, onActive, onDeactive, disabled=false, children}: SwitchProps) {
    const [active, setActive] = React.useState<boolean>(isActive)

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

function Track({children}: TrackProps) {
    const context = useContext(SwitchContext)

    if (!context) {
        console.error("Switch.Track: context is undefined.")
        return
    }

    const { active, handleClick } = context

    return (
         <button 
            className={"switch-track " + (active ? "active" : "")}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

function Thumb({children}: ThumbProps) {
    const context = useContext(SwitchContext)

    if (!context) {
        console.error("Switch.Track: context is undefined.")
        return
    }

    const { active, handleClick } = context

    return (
        <div
            className="switch-thumb"
            style={{transform: `translateX(${active ? "26px" : 0})`}}
        >
            {children && children}
        </div>
    )
}

function Meta({children}: {children: JSX.Element | JSX.Element[]}) {
    return <div className="switch-meta">{children}</div>
}

function Label({children}: {children: string}) {
    return <h5 className="switch-label">{children}</h5>
}

function Description({children}: {children: string}) {
    return <p className="switch-description">{children}</p>
}

Switch.Track = Track
Switch.Thumb = Thumb
Switch.Meta = Meta
Switch.Label = Label
Switch.Description = Description

export default Switch