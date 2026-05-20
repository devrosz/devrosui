"use client"

import React from "react"

// Hook to observe headers on a page.
// ids: array of header-ids that are present on a page.
// returns: the header-id of the header that is currently in view.
export default function useHeaderObserver(ids: string[]) {
    const [activeId, setActiveId] = React.useState<string>("")

    React.useEffect(() => {
        const observers: IntersectionObserver[] = []
        ids.forEach(id => {
            const element = document.getElementById(id)

            if (!element) {
                return
            }

            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setActiveId(id)
                }
            })

            observer.observe(element)
            observers.push(observer)
        })

        return () => {
            observers.forEach(observer => observer.disconnect())
        }
    }, [ids])

    return activeId
}