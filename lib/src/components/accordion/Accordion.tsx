"use client"

import React from "react"
import { ReactNode } from "react"
import { motion } from "motion/react"
import { createContext, useContext, useId } from "react"
import ToggleButton from "./ToggleButton"
import "./accordion.css"

// background: whether the background of an item should be filled or empty.
// toggleIcon: icon to be displayed as toggle button.
// width: width of accordion section.
// children: expecting one or more <Accordion.Item> components.
type AccordionProps = {
    background?: "filled" | "empty",
    toggleIcon?: "plus" | "chevron",
    width?: string,
    children: ReactNode
}

// open: open state of a specific item.
// toggle: toggles open state of a given item identified by its key.
// getToggleStatus: returns the open state of an item.
// background: background filling of items.
// toggleIcon: icon inside toggle button.
type AccordionContextType = {
    open: Record<string, boolean>,
    toggle: (key: string) => void,
    getToggleStatus: (key: string) => boolean,
    background: "empty" | "filled"
    toggleIcon: "chevron" | "plus"
}

// itemKey: unique identifier for an item.
type ItemContextType = {
    itemKey: string
}

// Contains meta-data of the whole Accordion component.
const AccordionContext = createContext<null | AccordionContextType>(null)

// Contains the meta-data about an Accordion.Item.
const AccordionItemContext = createContext<null | ItemContextType>(null)

// Wrapper for the Accordion component.
// Contains the main logic of callback functions.
export function Accordion({
    background="filled",
    toggleIcon="chevron",
    width="100%",
    children
}: AccordionProps) {

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

    const contextValue: AccordionContextType = {
        open,
        toggle,
        getToggleStatus,
        background,
        toggleIcon
    }

    return (
        <AccordionContext.Provider value={contextValue}>
            <ul className="accordion" style={{width: width}}>
                {children}
            </ul>
        </AccordionContext.Provider>
    )
}

// Single collapsable accordion item that displays the header and collapses the content
// on click.
export function Item({children}: {children: ReactNode}) {
    const context = useContext(AccordionContext)

    if (!context) {
        console.error("Accordion: context is undefined")
        return
    }

    const { toggle, background } = context
    const itemKey = useId()

    return (
        <AccordionItemContext.Provider value={{itemKey}}>
            <li 
                className={"accordion-item-container " + background}
                key={itemKey}
                onClick={(e) => toggle(itemKey)}
            >
                {children}
            </li>
        </AccordionItemContext.Provider>
    )
}

// Header of an accordion item.
export function Header({children}: {children: string}) {

    const accordionContext = useContext(AccordionContext)
    const itemContext = useContext(AccordionItemContext)

    if (!accordionContext || !itemContext) {
        console.error("AccordionHeader: context is undefined")
        return
    }

    const { toggle, getToggleStatus, toggleIcon } = accordionContext
    const { itemKey } = itemContext

    return (
        <div className="accordion-header-container">
            <h5>{children}</h5>
            <ToggleButton 
                entry={itemKey}
                getStatus={getToggleStatus}
                toggleStatus={toggle}
                icon={toggleIcon}
            />
        </div>
    )
}

// Collapsable content of an item.
export function Content({children}: {children: string}) {
    const accordionContext = useContext(AccordionContext)
    const itemContext = useContext(AccordionItemContext)

    if (!accordionContext || !itemContext) {
        console.error("AccordionContent: context is undefined")
        return
    }

    const { getToggleStatus } = accordionContext
    const { itemKey } = itemContext

    return (
        <motion.div
            className="accordion-item-content"
            initial={false}
            animate={{height: getToggleStatus(itemKey) ? "auto" : 0}}
            transition={{duration: 0.25, ease: "easeInOut"}}
            style={{overflow: "hidden"}}
        >
            <p>{children}</p>
        </motion.div>
    )
}

// Define subcomponents.
Accordion.Item = Item
Accordion.Header = Header
Accordion.Content = Content

export default Accordion