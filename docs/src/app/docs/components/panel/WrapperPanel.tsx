"use client"

import { Panel } from "@devrosui/react"
import { LuSun, LuMoon } from "react-icons/lu"
import { useTheme } from "@/lib/ThemeProvider"

export default function WrapperPanel({
    style="primary",
    disabled=false
}: {
    style:"primary" | "secondary"
    disabled: boolean
}) {
    
    return (
            <Panel styling={style} initialMode="mode-1">
                <Panel.Mode id="mode-1">
                    <LuMoon style={{fontSize: "1.5rem"}} />
                </Panel.Mode>
                <Panel.Mode disabled={disabled} id="mode-2">
                    <LuSun style={{fontSize: "1.5rem"}} />
                </Panel.Mode>
            </Panel>
        )
}