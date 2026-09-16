"use client"

import React from "react"
import { useId, createContext, useContext } from "react"
import { ReactNode } from "react"
import { motion } from "motion/react"
import "./panel.css"

// styling: styling variant of the panel.
// children: expecting a list of Modes
type PanelProps = {
    initialMode: string,
    styling?: "primary" | "secondary"
    children: ReactNode
}

// id: identifies the mode to make the detection of active mode possible and to change it.
// disabled: boolean that activates/deactivates the respective mode.
// children: expects a button or string.
type ModeProps = {
    id: string,
    disabled?: boolean,
    handleClick?: any,
    children: ReactNode
}

// Data-object that is passed from <Panel> to each <Mode>.
// activeMode: mode that is currently active. Holds the id of this mode.
// setActiveMode: callback function to update the id of the active mode.
// layoutId: id for the layout used to make the moving pill animation work.
type PanelContext = {
    activeMode: string,
    setActiveMode: (arg0: string) => void,
    layoutId: string
}

const PanelContext = createContext<null | PanelContext>(null)

// Parent component which sets the user-given props and passes it to <Mode>.
function Panel({initialMode, styling="primary", children}: PanelProps) {

    const [activeMode, setActiveMode] = React.useState<string>(initialMode)
    const layoutId = useId()

    return (
        <PanelContext.Provider value={{activeMode, setActiveMode, layoutId}}>
            <div className={"panel-container " + (styling ?? "")}>
                {children}
            </div>
        </PanelContext.Provider>
    )
}

// Individual mode inside the Panel. Can update the activeMode.
function Mode({id, disabled=false, handleClick, children}: ModeProps) {
    const panelContext = useContext(PanelContext)

    if (!panelContext) {
        return null
    }

    const { activeMode, setActiveMode, layoutId } = panelContext
    const isActive = id === activeMode

    return (
        <div
            className={"mode " + (isActive ? "active" : "") + (disabled ? "disabled" : "")}
            onClick={() => {
                if (!disabled) {
                    setActiveMode(id)
                }
                if (handleClick) {
                    handleClick()
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
            <span className="mode-text">
                {children}
            </span>
        </div>
    )
}

// Define subcomponents
Panel.Mode = Mode

export default Panel