"use client"

import { usePathname } from "next/navigation"

export default function BreadCrumbs() {
    const path = usePathname()
    const pathParsed = path.split("/").splice(1)
    
    return (
        <div className="breadcrumbs">
            {pathParsed.map((dir, i) => (
                    <div className="crumb">
                        <h6>{dir}</h6>
                    </div>
                ))
            }
        </div>
    )
}