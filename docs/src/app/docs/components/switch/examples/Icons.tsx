"use client"

import { useTheme } from "@/lib/ThemeProvider"
import { Switch } from "@devrosui/react"
import { LuSun, LuMoon } from "react-icons/lu"

// Showcase of Switch component that actually toggles the theme of the entire website.
export default function Icons() {

    const { theme, toggleTheme } = useTheme()

    return (
        <Switch onActive={toggleTheme} onDeactive={toggleTheme} isActive={theme === "dark"}>
            <Switch.Track>
                <Switch.Thumb>
                    {theme === "dark" ? <LuMoon /> : <LuSun />}
                </Switch.Thumb>
            </Switch.Track>
            <Switch.Meta>
                <Switch.Label>
                    Dark mode
                </Switch.Label>
            </Switch.Meta>
        </Switch>
    )
}