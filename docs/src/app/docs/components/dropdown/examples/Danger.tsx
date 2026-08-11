"use client"

import { Dropdown } from "@devrosui/react"

export default function Danger() {
    return (
        <Dropdown>
            <Dropdown.Header>
                Actions
            </Dropdown.Header>
            <Dropdown.List>
                <Dropdown.Item>
                    Edit file
                </Dropdown.Item>
                <Dropdown.Item>
                   Save file
                </Dropdown.Item>
                <Dropdown.Item>
                    Copy file
                </Dropdown.Item>
                <Dropdown.Item isDangerous={true}>
                    Delete file
                </Dropdown.Item>
            </Dropdown.List>
        </Dropdown>
    )
}