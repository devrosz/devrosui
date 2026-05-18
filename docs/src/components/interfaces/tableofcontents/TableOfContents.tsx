"use client"

import Link from "next/link"
import useHeaderObserver from "@/lib/useHeaderObserver"
import "./tableofcontents.css"

type TableOfContentsItem = {
    id: string,
    title: string,
    level: number
}

// Returns a table of contents which highlights the current section in view.
// Supports nested headers.
// headers: the headers that are present on a page.
export default function TableOfContents({headers}: TableOfContentsItem[]) {
    const activeId = useHeaderObserver(
        headers.map((header: TableOfContentsItem) => header.id)
    )
    return (
        <nav className="toc-docspage">
            <div className="toc-docspage-content">
                <h5>On this page</h5>
                <ul>
                    {headers.map(header => {
                        const { id, title, level } = header
                        return (
                            <li
                                key={id}
                                className={activeId === id ? "toc-active-link" : "toc-link"}
                                style={{paddingLeft: `${level}rem`}}
                            >
                                <Link href={"#" + id}>{title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}