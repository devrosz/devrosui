"use client"

import { Dropdown } from "@devrosui/react"
import { BsHighlights } from "react-icons/bs"
import { IoText } from "react-icons/io5"
import { FaGlasses } from "react-icons/fa"
import { IoAccessibility } from "react-icons/io5"
import { useTheme } from "@/lib/ThemeProvider"

type PositionProps = {
    orientation: "top" | "bottom",
    alignment: "left" | "right"
}

export default function Position({orientation="bottom", alignment="left"}: PositionProps) {
    
    const { toggleTheme } = useTheme()
    return (
         <Dropdown orientation={orientation} alignment={alignment}>
            <Dropdown.Header>
                <IoAccessibility />
            </Dropdown.Header>
            <Dropdown.List>
                <Dropdown.Item>
                    <IoText />
                    Letter size
                </Dropdown.Item>
                <Dropdown.Item>
                    <FaGlasses />
                   Anti-dyslectic
                </Dropdown.Item>
                <Dropdown.Item onClick={toggleTheme}>
                    <BsHighlights />
                    Toggle theme
                </Dropdown.Item>
            </Dropdown.List>
        </Dropdown>
    )
}