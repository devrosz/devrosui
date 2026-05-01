"use client"

import React from "react"
import { JSX } from "react"
import "./tooltip.css"

type TooltipProps = {
    tip: string,
    position?: "top" | "right" | "bottom" | "left",
    children: JSX.Element
}

// Renders a tooltip over the children.
// tip: content of the tooltip.
// position: position of the tooltip in contrast to its children.
// children: the element that the tooltip belongs to.
export default function Tooltip({tip, position="top", children}: TooltipProps) {

    const [showTip, setShowTip] = React.useState<boolean>(false)

    return (
        <div 
            className="tooltip-container"
            onMouseEnter={() => setShowTip(true)}
            onMouseLeave={() => setShowTip(false)}
        >
            {showTip && tip !== "" ? (
                    <div className={"tooltip-content " + position}>
                        <h6>{tip}</h6>
                    </div>
                ) : null
            }
            {children}
        </div>
    )
}