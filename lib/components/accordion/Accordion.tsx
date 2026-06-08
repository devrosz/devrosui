"use client"

import React from "react"
import { JSX } from "react"
import { motion } from "motion/react"
import ToggleButton from "./ToggleButton"
import "./accordion.css"

export type AccordionProps = {
    items: AccordionItem[],
    background?: "filled" | "empty",
    toggleIcon?: "plus" | "chevron",
    width?: string
}

type AccordionItem = {
    header: string,
    text: string
}

// Placeholder if no items were specified.
// This still means that items is a mandatory prop, but
// defaultItem just servers as a error fallback.
const defaultItem = [{
    header: "Add items",
    text: "Add an item by passing the prop 'items' in the form: [{header, text}]."
}]

// Component that renders an accordion.
// items: header + text to fill items in accordion.
// background: whether the background of an item should be filled or empty.
// toggleIcon: icon to be displayed as toggle button.
// width: width of accordion section.
export default function Accordion({
    items=defaultItem,
    background="filled",
    toggleIcon="chevron",
    width="100%"
}: AccordionProps): JSX.Element {
    
    const [open, setOpen] = React.useState<Record<string, boolean>>({})

    // Toggles the open state of a given item
    // key: identifier to point which specific item in the accordion
    // needs to be toggled.
    function toggle(key: string): void {
        setOpen(prev => (
            {
                ...prev,
                [key]: !prev[key]
            }
        ))
    }

    // Returns whether an item identified by the given key
    // is open or not.
    function getToggleStatus(key: string): boolean {
        return open[key]
    }

    return (
        <ul className="accordion" style={{width: width}}>
            {items.map((item, i) => {
                const { header, text } = item
                const itemKey = "item-" + i
                const className = 
                    "accordion-item-container " + background
                return (
                    <li 
                        className={className}
                        key={itemKey}
                        onClick={(e) => toggle(itemKey)}
                    >
                        <div className="accordion-header-container">
                            <h5>{header}</h5>
                            <ToggleButton 
                                entry={itemKey}
                                getStatus={getToggleStatus}
                                toggleStatus={toggle}
                                icon={toggleIcon}
                            />
                        </div>
                        <motion.div
                            className="accordion-item-content"
                            initial={false}
                            animate={{height: getToggleStatus(itemKey) ? "auto" : 0}}
                            transition={{duration: 0.25, ease: "easeInOut"}}
                            style={{overflow: "hidden"}}
                        >
                            <p>{text}</p>
                        </motion.div>
                    </li>
                )
            })}
        </ul>
    )
}