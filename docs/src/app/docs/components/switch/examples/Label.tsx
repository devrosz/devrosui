"use client"

import { Switch } from "@devrosui/react"

export default function Label() {
    return (
        <Switch>
            <Switch.Track>
                <Switch.Thumb />
            </Switch.Track>
            <Switch.Meta>
                <Switch.Label>
                    Notifications
                </Switch.Label>
            </Switch.Meta>
        </Switch>
    )
}