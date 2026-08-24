"use client"

import React from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextType | null>(null)

// Provides the current theme within this app.
export function ThemeProvider({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = React.useState<Theme>("dark")

    function toggleTheme(): void {
        const html = document.documentElement
        html.classList.toggle("light")
        const isLight: boolean = html.classList.contains("light")
        setTheme(isLight ? "light" : "dark")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// Returns the theme context containing the current theme
// and toggle function.
export function useTheme() {
    const context = React.useContext(ThemeContext)
    if (!context) {
        throw new Error("Failed to get context")
    }
    return context
}