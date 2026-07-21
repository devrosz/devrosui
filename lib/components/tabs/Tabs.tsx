"use client"

import React from "react"
import { useId } from "react"
import { JSX } from "react"
import { motion } from "motion/react"
import "./tabs.css"

// Each tab in the tabs array must follow the following type:
// routerTabs:
// - text: inner text of the tab button.
// - path: route to the tab page content.
// - renderLink: function that returns a Link component from the framework
//  the user is using. 
//      - This must be user-provided because each JS framework has its own
//      Link component for inner-app-routing.
//      - The function takes a path parameter containing the route and children
//      which is given by this component as the inner text.
// - disabled: boolean that activates/deactivates the respective tab.
// localTabs:
// - text: inner text of the tab button.
// - component: JSX to be rendered when the respective tab is active.
// - disabled: boolean that activates/deactivates the respective tab.
// childClassName: className for the component to be rendered when using localTabs
// to provide freedom to style the rendered component.

type LocalTab = {
    text: string,
    disabled?: boolean
    component: JSX.Element,
    childClassName?: string
}

type RouterTab = {
    text: string,
    disabled?: boolean,
    path: string,
    renderLink: (path: string, children: JSX.Element) => JSX.Element
}

// tabs: array of tabs to be rendered containing meta-information about each tab.
type TabsProps = {
    tabs: LocalTab[] | RouterTab[],
    type?: "primary" | "secondary" | "tertiary"
}

// Component that lets the user conditionally render pages or JSX based on which
// tab is active.
// This components handles localTabs and routerTabs.
// localTabs:
// - These are tabs that conditionally render small JSX elements.
// - E.g. toggle between montly or yearly plans to render the respective pricing cards.
// routerTabs:
// - These are tabs used in layouts where the user can switch between different pages.
// - E.g. on a dashboard page, switch between analytics, settings, overview etc.
export default function({tabs, type="primary"}: TabsProps) {
    const id = useId()
    const [activeTab, setActiveTab] = React.useState<number>(0)

    // Saves tab index that is currently active and if localTabs are used,
    // also save the JSX to be 
    function activateTab(index: number, component=null): void {
        setActiveTab(index)
    }

    // Returns the JSX for the moving highlighter animation.
    function getAnimatedTabContent(): JSX.Element {
        return (
            <motion.div
                layoutId={id}
                className="active-pill"
                transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                }}
            />
        )
    }

    // Returns the JSX of a single tab.
    function getTabJSX(tab: LocalTab | RouterTab, key: number): JSX.Element | null {
        const text = tab.text
        const isActive = key === activeTab

        // LocalTabs
        if ("component" in tab && !("path" in tab)) {
            return (
                <button 
                    className={"tab " + (isActive ? "active" : "")}
                    onClick={() => activateTab(key)}
                    disabled={tab.disabled}
                >
                    {isActive ? getAnimatedTabContent() : null}
                    <span className="tab-text">{text}</span>
                </button>
            )
        // RouterTabs
        } else if (!("component" in tab) && "path" in tab) {
            return tab.disabled ? (
                // If a tab is disabled, use plain text instead of a link component.
                <h6 className="tab inactive">
                    {isActive ? getAnimatedTabContent() : null}
                    <span className="tab-text">{text}</span>
                </h6>
            ) : (
                // Wrapper button to apply the activateTab function and className to.
                // In this way, the implementation details stays within this component
                // and doesn't have to be shared with the user-given renderLink.
                <button
                    className={"tab " + (isActive ? "active" : "")}
                    onClick={() => activateTab(key)}
                >
                    {tab.renderLink(tab.path, 
                        <div>
                            {isActive ? getAnimatedTabContent() : null}
                            <span className="tab-text">{text}</span>
                        </div>
                    )}
                </button>
            )
        } else {
            return null
        }
    }

    return (
        <div className="tabs-container">
            <div className={"tabs-header " + (type ?? "")}>
                {tabs.map((tab: LocalTab | RouterTab, index: number) => {
                    return getTabJSX(tab, index)
                })}
            </div>
            {"component" in tabs[activeTab] && 
                <div className={tabs[activeTab].childClassName ?? ""}>
                    {tabs[activeTab].component}
                </div>
            }
        </div>
    )
}
