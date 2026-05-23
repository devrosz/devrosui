"use client"

import React from "react"
import { JSX } from "react"
import { motion, AnimatePresence } from "motion/react"
import { FaChevronDown } from "react-icons/fa6"
import "./accordion.css"

export type AccordionProps = {
    items: AccordionItem[]
}

type AccordionItem = {
    header: string,
    text: string
}

type openDict = {
    ["key"]: boolean
}

export default function Accordion({items}: AccordionProps) {
    const [open, setOpen] = React.useState<openDict | {}>({})

    function toggle(key: string): void {
        setOpen(prev => (
            {
                ...prev,
                [key]: !prev[key]
            }
        ))
    }

    function getToggleStatus(key: string): boolean {
        return open[key]
    }

    function ToggleButton({entry}: {entry: string}): JSX.Element {
        return (
            <motion.button
                animate={{rotate: getToggleStatus(entry) ? 180 : 0}}
                transition={{duration: 0.25, ease: "easeInOut"}}
                onClick={() => toggle(entry)}
            >
                <FaChevronDown className="accordion-toggle-icon" />
            </motion.button>
        )
    }

    return (
        <ul className="accordion">
            {items.map((item, i) => {
                const { header, text } = item
                const itemKey = "item-" + i

                return (
                    <li className="accordion-item-container" key={itemKey}>
                        <div className="accordion-header-container">
                            <h4>{header}</h4>
                            <ToggleButton entry={itemKey} />
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