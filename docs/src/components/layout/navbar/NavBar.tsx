"use client"

import React from "react"
import { motion } from "motion/react"
import Link from "next/link"
import ToggleLink from "./ToggleLink"
import Logo from "../../interfaces/logo/Logo"
import Menu from "../../interfaces/menu/Menu"
import LinkButton from "../../interfaces/linkbutton/LinkButton"
import ThemeToggle from "../../interfaces/themetoggle/ThemeToggle"
import { IoLogoGithub } from "react-icons/io"; 
import { useTheme } from "@/lib/ThemeProvider"
import "./navbar.css"

export default function Navbar() {

    const [open, setOpen] = React.useState<boolean>(false)
    const themeContext = useTheme()

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
                                <Link className="navlink" href="/docs">Documentation</Link>
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
                <motion.ul
                    className="toggle-menu"
                    initial={{height: "0"}}
                    animate={{height: open ? "100vh" : "0"}}
                    transition={{duration: 0.5, ease: "easeInOut"}}
                    style={{overflow: "hidden"}}
                >
                    <ToggleLink path="/" toggleMenu={handleToggle}>Home</ToggleLink>
                    <ToggleLink path="/docs/components" toggleMenu={handleToggle}>Components</ToggleLink>
                    <ToggleLink path="/docs/installation" toggleMenu={handleToggle}>Installation</ToggleLink>
                </motion.ul>
            </div>
        </header>
    )
}