"use client"

import "./navbar.css"

// Hooks
import { usePathname } from "next/navigation"
import { useTheme } from "@/lib/ThemeProvider"

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
import { pages } from "@/lib/pages"

export default function Navbar() {
    
    const currentPath = usePathname()
    const [open, setOpen] = React.useState<boolean>(false)
    const themeContext = useTheme()

    // Toggles open state of mobile navigation.
    function handleToggle() {
        setOpen(prevOpen => !prevOpen)
    }

    // Checks if a given path is active.
    function checkIsActive(path: string): boolean {
        const pathParsed = path.trim().toLowerCase()
        return currentPath === pathParsed
    }

    return (
        <header>
            <div className="nav-container">
                <div className="nav-inner">
                    <div className="nav-left">
                        <Logo />
                        <nav className="nav-menu">
                            <ul>
                                {pages.map(page => {
                                    const { path, title } = page
                                    const className = "navlink " + (checkIsActive(path) ? "active" : "")
                                    return (
                                        <li>
                                            <Link className={className} href={path} key={title}>{title}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                    <div className="nav-btns">
                        <LinkButton type="secondary" path="https://github.com/devrosz/devrosui" target="_blank">
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