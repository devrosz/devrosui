"use client"

import { Switch } from "@devrosui/react"

export default function Label({isActive=false, disabled=false}) {
    return (
        <Switch isActive={isActive} disabled={disabled}>
            <Switch.Track>
                <Switch.Thumb />
            </Switch.Track>
            <Switch.Meta>
                <Switch.Label>
                    Notifications
                </Switch.Label>
                <Switch.Description>
                    Receive emails about the latest updates.
                </Switch.Description>
            </Switch.Meta>
        </Switch>
    )
}