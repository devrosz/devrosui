"use client"

import { Switch } from "@devrosui/react"

export default function Basic() {
    return (
       <Switch>
            <Switch.Track>
                <Switch.Thumb />
            </Switch.Track>
       </Switch>
    )
}