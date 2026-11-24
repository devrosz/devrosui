"use client"

import React from "react"
import { JSX } from "react"
import { LoadingBar } from "@devrosui/react"

type LoadingBarWrapper = {
    color?: "primary" | "secondary"
    maxWidth?: string,
    thickness?: string
}

// Wrapper for the loading bar that increments the progress
// and resets after completion/
export default function LoadingBarWrapper({
    color="primary",
    maxWidth="200px",
    thickness="5px"
}: LoadingBarWrapper): JSX.Element {
    const [progress, setProgress] = React.useState<number>(0)

    React.useEffect(() => {
        setTimeout(() => {
            if (progress < 1) {
                setProgress(prev => prev + 0.25)
            } else {
                setProgress(0)
            }
        }, 1000)
    }, [progress])

    return (
        <LoadingBar
            progress={progress}
            maxWidth={maxWidth}
            thickness={thickness}
            color={color}
        />
    )
}