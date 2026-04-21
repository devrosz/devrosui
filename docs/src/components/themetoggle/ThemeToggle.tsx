"use client"

import { CgDarkMode } from "react-icons/cg"

// Button that toggles the theme of the app.
export default function ThemeToggle() {

    // Toggles the app theme.
    // Default: dark, toggled: light
    function toggleTheme(): void {
        document.documentElement.classList.toggle("light")
    }

    return (
        <CgDarkMode 
            onClick={toggleTheme}
            style={{height: 30, width: 30}}
        />
    )
}