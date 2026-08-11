"use client"

import React from "react"
import "./switch.css"

export default function Switch() {
    const [active, setActive] = React.useState<boolean>(false)

    function handleClick() {
        setActive(prev => !prev)
    }

    return (
        <div className="switch-container">
            <button 
                className={"switch-track " + (active ? "active" : "")}
                onClick={handleClick}
            >
                <div
                    className="switch-thumb"
                    style={{transform: `translateX(${active ? "34px" : 0})`}}
                >
                </div>
            </button>
        </div>
    )
}