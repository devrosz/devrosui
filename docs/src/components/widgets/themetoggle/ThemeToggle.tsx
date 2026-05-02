"use client"

import { CgDarkMode } from "react-icons/cg"
import Tooltip from "../tooltip/Tooltip"
import "./themetoggle.css"

// Button that toggles the theme of the app.
export default function ThemeToggle() {

    // Toggles the app theme.
    // Default: dark, toggled: light
    function toggleTheme(): void {
        document.documentElement.classList.toggle("light")
    }

    return (
        <Tooltip tip="Theme" position="bottom">
            <button className="themetoggle-button" onClick={toggleTheme}>
                <CgDarkMode className="themetoggle-icon" />
            </button>
        </Tooltip>
    )
}