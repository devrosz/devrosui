"use client"

import { motion } from "motion/react"
import { componentPages } from "@/app/docs/layout"
import { useTheme } from "@/lib/ThemeProvider"
import { IoLogoGithub } from "react-icons/io"
import ThemeToggle from "@/components/interfaces/themetoggle/ThemeToggle"
import Link from "next/link"
import "./navbar.css"

type ToggleLinkProps = {
    path: string,
    toggleMenu: () => void,
    children: React.ReactNode
}

type MobileNavProps = {
    open: boolean,
    toggle: () => void
}

// Represents a link component which closes the mobile navigation
// when a link has been pressed for better UX.
// path: path to the page
// toggleMenu: toggle function to close mobile navigation.
// children: inner text of link component.
function ToggleLink({path, toggleMenu, children}: ToggleLinkProps) {
    return (
        <li onClick={() => toggleMenu()}>
            <Link href={path}>
                {children}
            </Link>
        </li>
    )
}

// Represents the collabsable mobile navigation.
// Imports the component names from the documentation page layout.
export default function MobileNav({open, toggle}: MobileNavProps) {

    const { toggleTheme } = useTheme()

    return (
         <motion.ul
            className="toggle-menu"
            initial={{height: "0"}}
            animate={{height: open ? "100vh" : "0"}}
            transition={{duration: 0.5, ease: "easeInOut"}}
            style={{overflowX: "hidden", overflowY: "scroll"}}
        >
            <li key="mobile-actions">
                <h6>User actions</h6>
                <div className="mobile-actions-container">
                    <ThemeToggle toggleFunction={toggleTheme} />
                    <Link href="https://github.com/devrosz/devrosui" className="github-link-btn">
                        <IoLogoGithub style={{height: 25, width: 25}} />
                    </Link>
                </div>
            </li>
            <li key="mobile-nav-pages">
                <h6>Pages</h6>
            </li>
            <ToggleLink path="/" toggleMenu={toggle}>
                Home
            </ToggleLink>
            <ToggleLink path="/docs/components/accordion" toggleMenu={toggle}>
                Components
            </ToggleLink>
            <ToggleLink path="/docs" toggleMenu={toggle}>
                Documentation
            </ToggleLink>
            <li key="mobile-nav-gettingStarted">
                <h6>Getting started</h6>
            </li>
            <ToggleLink 
                path="/docs/getting-started/prerequisites" toggleMenu={toggle}>
                Prerequisites
            </ToggleLink>
            <ToggleLink 
                path="/docs/getting-started/installation" toggleMenu={toggle}>
                Installation
            </ToggleLink>
            <li key="mobile-nav-components">
                <h6>Components</h6>
            </li>
            {componentPages.map((page, i) =>(
                <ToggleLink 
                    path={"/docs/components/" + page} 
                    toggleMenu={toggle} key={`component-${i}-mobilenav`}
                >
                    {page}
                </ToggleLink>
            ))}
        </motion.ul>
    )
}