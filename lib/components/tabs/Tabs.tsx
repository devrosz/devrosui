"use client"

import React from "react"
import { useId, createContext, useContext } from "react"
import { motion } from "motion/react"
import "./tabs.css"

type TabsProps = {
    type: "local" | "router"
    styling?: "primary" | "secondary" | "tertiary"
}

const TabsContext = createContext(null)

export function Tabs({type, styling="primary", children}: TabsProps) {
    const [activeTab, setActiveTab] = React.useState<string>("")
    const layoutId = useId()

    return (
        <TabsContext.Provider value={{activeTab, setActiveTab, layoutId}}>
            <div className={"tabs-container " + (styling ?? "")}>
                {children}
            </div>
        </TabsContext.Provider>
    )
}

export function TabsList({children}) {
    return (
        <div className="tabs-header">
            {children}
        </div>
    )
}

export function Tab({id, disabled=false, children}) {
    const { activeTab, setActiveTab, layoutId, type } = useContext(TabsContext)
    const isActive = id === activeTab

    return (
        <div
            className={"tab " + (isActive ? "active" : "") + (disabled ? "disabled" : "")}
            onClick={() => {
                if (!disabled) {
                    setActiveTab(id)
                }
            }}
            key={id}
        >
            {isActive && (
                    <motion.div 
                        layoutId={layoutId}
                        className="active-pill"
                        transition={{
                            type: "spring",
                            stiffness: 450,
                            damping: 35
                        }}  
                    />
                )
            }
            <span className="tab-text">
                {children}
            </span>
        </div>
    )
}

export function TabRender({id, children}) {
    const { activeTab } = useContext(TabsContext)
    return activeTab === id ? children : null
}