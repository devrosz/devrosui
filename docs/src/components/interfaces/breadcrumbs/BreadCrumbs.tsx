"use client"

import { usePathname } from "next/navigation"
import "./breadcrumbs.css"

// Shows the current path where each directory is seperated
// with the symbol '>' and where the current directory is highlighted.
export default function BreadCrumbs() {
    const path = usePathname()
    const pathParsed = path.split("/").splice(1)
    
    return (
        <div className="breadcrumbs">
            {pathParsed.map((dir, i) => {
                const isLast = i === pathParsed.length - 1
                return (
                    <div className={isLast ? "crumb-active" : "crumb"} key={dir}>
                        <h6>{dir}</h6>
                        {!isLast ? <h6>{'>'}</h6> : null}
                    </div>
                )
            })
            }
        </div>
    )
}