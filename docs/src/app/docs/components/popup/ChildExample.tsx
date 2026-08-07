"use client"

import React from "react"
import { Popup } from "@devrosui/react"
import "./example.css"

export default function ChildExample() {
    const [open, setOpen] = React.useState<boolean>(false)

    function toggle() {
        setOpen(prev => !prev)
    }

    return (
        <div className="popup-example">
            <button className="danger-button" onClick={toggle}>Delete account</button>
            <Popup open={open}>
                <div className="popup-example-content">
                    <h5>Are you sure you want to delete your account?</h5>
                    <p>This action can not be undone</p>
                    <div className="popup-example-buttons">
                        <button onClick={toggle} className="tertiary-button">Cancel</button>
                        <button onClick={toggle} className="danger-button">Delete account</button>
                    </div>
                </div>
            </Popup>
        </div>
    )
}