"use client"

import "./navbar.css"

// Components
import React from "react"
import Link from "next/link"
import Logo from "../../interfaces/logo/Logo"
import Menu from "../../interfaces/menu/Menu"
import MobileNav from "./MobileNav"
import LinkButton from "../../interfaces/linkbutton/LinkButton"
import ThemeToggle from "../../interfaces/themetoggle/ThemeToggle"

// Icons
import { IoLogoGithub } from "react-icons/io"

// Utils
import { useTheme } from "@/lib/ThemeProvider"

export default function Navbar() {

    const [open, setOpen] = React.useState<boolean>(false)
    const themeContext = useTheme()

    // Toggles open state of mobile navigation.
    function handleToggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <header>
            <div className="nav-container">
                <div className="nav-inner">
                    <div className="nav-left">
                        <Logo />
                        <nav className="nav-menu">
                            <ul>
                                <Link className="navlink" href="/">Home</Link>
                                <Link className="navlink" href="/docs/components">Components</Link>
                                <Link className="navlink" href="/docs/getting-started/prerequisites">Documentation</Link>
                            </ul>
                        </nav>
                    </div>
                    <div className="nav-btns">
                        <LinkButton type="secondary" path="https://github.com/devrosz" target="_blank">
                            <IoLogoGithub style={{height: 25, width: 25}} />
                            Github
                        </LinkButton>
                        <div className="divider"></div>
                        <ThemeToggle toggleFunction={themeContext.toggleTheme} />
                    </div>
                    <div className="toggle-menu-btn" onClick={handleToggle}>
                        <Menu open={open} handleToggle={handleToggle} />
                    </div>
                </div>
               <MobileNav open={open} toggle={handleToggle} />
            </div>
        </header>
    )
}