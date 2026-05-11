import Link from "next/link"
import React from "react"
import { JSX } from "react"
import "./layout.css"

export default function DocsLayout({children}: {children: React.ReactNode}) {

    const gettingStartedPages: string[] = ["prerequisites", "installation"]
    const componentPages: string[] = [
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

    function DocsNavBtns(title: string): JSX.Element {
        const path = "/" + title
        return (
            <Link 
                href={path}
                className="docs-nav-button"
                key={title + "nav-button"}
            >
                {title}
            </Link>
        )
    }

    return (
        <section className="docs-layout">
            <nav className="docs-nav">
                <h5>Getting started</h5>
                <ul>
                    {gettingStartedPages.map(page => (
                        <li>
                            {DocsNavBtns(page)}
                        </li>
                    ))}
                </ul>
                <h5>Components</h5>
                <ul>
                    {componentPages.map(page => (
                        <li>
                            {DocsNavBtns(page)}
                        </li>
                    ))}
                </ul>
            </nav>
            {children}
        </section>
    )
}