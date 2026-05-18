"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { JSX } from "react"
import "./layout.css"

// Export to Navbar component so the mobile navigation includes the component
// pages using single source of truth.
export const componentPages: string[] = [
    "accordion",
    "breadcrumbs",
    "button",
    "calendar",
    "closeButton",
    "cookieConsent",
    "drawer",
    "dropdown",
    "error",
    "inputOTP",
    "outlink",
    "popup",
    "progressBar",
    "select",
    "skeleton",
    "slider",
    "spinner",
    "switch",
    "tabs",
    "toast",
    "toolbar"
]

// Returns the JSX element of a documentation page link.
function DocsNavBtns({title, path}: {title: string, path: string}): JSX.Element {
    return (
        <Link href={path} className="docs-nav-button">
            {title}
        </Link>
    )
}

export default function DocsLayout({children}: {children: React.ReactNode}) {

    const currentPath = usePathname()
    const gettingStartedPages: string[] = ["prerequisites", "installation"]


    return (
        <section className="docs-layout">
            <nav className="docs-nav">
                <h6>Getting started</h6>
                <ul>
                    {gettingStartedPages.map(page => {
                        const path = "/docs/getting-started/" + page
                        const isActive = currentPath === `/docs/${page}` 
                            || (page === "prerequisites" && currentPath === "/docs")
                        
                        return (
                            <li 
                                className={isActive ? "active-docs-link" : "docs-link-item"}
                                key={page + "-nav-button"}
                            >
                                <DocsNavBtns title={page} path={path} />
                            </li>
                        )
                    })}
                </ul>
                <h6>Components</h6>
                <ul>
                    {componentPages.map(page => {
                        const path = "/docs/components/" + page
                        const isActive = currentPath === `/docs/components/${page}`
                        return (
                            <li 
                                className={isActive ? "active-docs-link" : "docs-link-item"}
                                key={page + "-nav-button"}
                            >
                                <DocsNavBtns title={page} path={path} />
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className="docs-page">
                {children}
            </div>
        </section>
    )
}