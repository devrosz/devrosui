"use client"

import React from "react"
import Link from "next/link"
import { JSX } from "react"
import { usePathname } from "next/navigation"
import { docsPages } from "@/lib/pages"
import Tag from "@/components/interfaces/tags/Tags"
import "./layout.css"

// Returns the JSX element of a documentation page link.
function DocsNavBtns({title, path}: {title: string, path: string}): JSX.Element {
    return (
        <Link href={path} className="docs-nav-button" key={title}>
            {title}
        </Link>
    )
}

export default function DocsLayout({children}: {children: React.ReactNode}) {

    const currentPath = usePathname()

    return (
        <section className="docs-layout">
            <div className="docs-nav-container">
                <nav className="docs-nav">
                    {Object.entries(docsPages).map(([section, pages]) => (
                        <React.Fragment key={section}>
                            <h6>{section}</h6>
                            <ul>
                                {pages.map((page) => {
                                    const { title, path } = page
                                    const isActive = currentPath === path
                                    const isNew = Object.keys(page).includes("isNew") && page.isNew
                                    const isUpdated = Object.keys(page).includes("isUpdated") && page.isUpdated

                                    return (
                                        <li
                                            className={
                                                isActive
                                                    ? "active-docs-link"
                                                    : "docs-link-item"
                                            }
                                            key={path}
                                        >
                                            <DocsNavBtns
                                                title={title}
                                                path={path}
                                            />
                                            {/* Additional tags providing status-updates about the component */}
                                            {isNew && <Tag type="new">New</Tag>}
                                            {isUpdated && <Tag type="updated">Updated</Tag>}
                                        </li>
                                    )
                                })}
                            </ul>
                        </React.Fragment>
                    ))}
                </nav>
            </div>
            <div className="docs-page">
                {children}
            </div>
        </section>
    )

}