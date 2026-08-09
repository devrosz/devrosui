"use client"

import React from "react"
import { Popup, Button } from "@devrosui/react"
import "./example.css"

export default function ChildExample() {
    const [open, setOpen] = React.useState<boolean>(false)

    function toggle() {
        setOpen(prev => !prev)
    }

    return (
        <div className="popup-example">
            <Button variant="danger" onClick={toggle}>Delete account</Button>
            <Popup open={open}>
                <div className="popup-example-content">
                    <h5>Are you sure you want to delete your account?</h5>
                    <p>This action can not be undone</p>
                    <div className="popup-example-buttons">
                        <Button onClick={toggle} variant="tertiary">Cancel</Button>
                        <Button onClick={toggle} variant="danger">Delete account</Button>
                    </div>
                </div>
            </Popup>
        </div>
    )
}