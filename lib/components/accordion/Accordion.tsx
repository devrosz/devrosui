"use client"

import React from "react"
import { JSX } from "react"
import { motion } from "motion/react"
import ToggleButton from "./ToggleButton"
import "./accordion.css"

export type AccordionProps = {
    items: AccordionItem[],
    border?: boolean,
    toggleIcon?: "plus" | "chevron"
}

type AccordionItem = {
    header: string,
    text: string
}

// Component that renders an accordion.
export default function Accordion({
    items,
    border=false,
    toggleIcon="chevron"
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
        <ul className="accordion">
            {items.map((item, i) => {
                const { header, text } = item
                const itemKey = "item-" + i
                const className = "accordion-item-container" + (border ? " outlined" : "")

                return (
                    <li 
                        className={className}
                        key={itemKey}
                    >
                        <div className="accordion-header-container">
                            <h4>{header}</h4>
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