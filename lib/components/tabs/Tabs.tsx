"use client"

import React from "react"
import { useId, createContext, useContext } from "react"
import { JSX, ReactNode } from "react"
import { motion } from "motion/react"
import "./tabs.css"

// type: type of tab (either local tabs or router tabs)
// - local tabs:
//      - These are tabs that conditionally render small JSX elements.
//      - E.g. toggle between montly or yearly plans to render the respective pricing cards.
// - router tabs:
//      - These are tabs used in layouts where the user can switch between different pages.
//      - E.g. on a dashboard page, switch between analytics, settings, overview etc.
// initialTab: holds the key of the tab that must be rendered first.
// styling: styling variant of the tabs.
// children: expecting TabsList and in case of local tabs some TabRender.
type TabsProps = {
    type: "local" | "router",
    initialTabId: string,
    styling?: "primary" | "secondary" | "tertiary"
    children: ReactNode
}

// id: identifies the tab to make the detection of active tabs possible and to change it.
// disabled: boolean that activates/deactivates the respective tab.
// children: expects a link component or a button.
type TabProps = {
    id: string,
    disabled?: boolean,
    children: ReactNode
}

type TabRenderProps = { 
    id: string,
    children: ReactNode
}

type TabsContext = {
    activeTab: string,
    setActiveTab: (arg0: string) => void,
    layoutId: string
}

const TabsContext = createContext<null | TabsContext>(null)

export function Tabs({type="local", initialTabId, styling="primary", children}: TabsProps) {
    const [activeTab, setActiveTab] = React.useState<string>(initialTabId)
    const layoutId = useId()

    return (
        <TabsContext.Provider value={{activeTab, setActiveTab, layoutId}}>
            <div className={"tabs-container " + (styling ?? "")}>
                {children}
            </div>
        </TabsContext.Provider>
    )
}

export function TabsList({children}: {children: ReactNode}) {
    return (
        <div className="tabs-header">
            {children}
        </div>
    )
}

export function Tab({id, disabled=false, children}: TabProps) {
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

export function TabRender({id, children}: TabRenderProps) {
    const { activeTab } = useContext(TabsContext)
    return activeTab === id ? children : null
}