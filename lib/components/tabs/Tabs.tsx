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

// id: identifies the tab in order to render the correct component.
// children: expecting the JSX to be rendered.
type TabRenderProps = { 
    id: string,
    children: ReactNode
}

// Data-object that is passed from <Tabs> to all the subcomponents.
// activeTab: tab that is currently active. Holds the id of this tab.
// setActiveTab: callback function to update the id of the active tab.
// layoutId: id for the layout used to make the moving pill animation work.
type TabsContext = {
    activeTab: string,
    setActiveTab: (arg0: string) => void,
    layoutId: string
}

const TabsContext = createContext<null | TabsContext>(null)

// Parent component which sets the user-given props and passes it to the other Tabs subcomponents.
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

// Wrapper for the tabslist.
export function TabsList({children}: {children: ReactNode}) {
    return (
        <div className="tabs-header">
            {children}
        </div>
    )
}

// Individual tab inside the TabsList. Can update the activeTab.
export function Tab({id, disabled=false, children}: TabProps) {
    const tabsContext = useContext(TabsContext)

    if (!tabsContext) {
        return null
    }

    const { activeTab, setActiveTab, layoutId } = tabsContext
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

// Component which renders the JSX of the respective tab if this tab is active.
export function TabRender({id, children}: TabRenderProps) {
    const tabsContext = useContext(TabsContext)

    if (!tabsContext) {
        return null
    }

    const { activeTab } = tabsContext
    return activeTab === id ? children : null
}