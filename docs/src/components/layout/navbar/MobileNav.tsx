"use client"

import React from "react"
import { motion } from "motion/react"
import { docsPages, pages } from "@/lib/pages"
import { useTheme } from "@/lib/ThemeProvider"
import { usePathname } from "next/navigation"
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


// Represents the collabsable mobile navigation.
// Imports the component names from the documentation page layout.
export default function MobileNav({open, toggle}: MobileNavProps) {

    const currentPath = usePathname()
    const { toggleTheme } = useTheme()

    // Checks if a given path is active.
    function checkIsActive(path: string): boolean {
        const pathParsed = path.trim().toLowerCase()
        return currentPath === pathParsed
    }

    // Represents a link component which closes the mobile navigation
    // when a link has been pressed for better UX.
    // path: path to the page
    // toggleMenu: toggle function to close mobile navigation.
    // children: inner text of link component.
    function ToggleLink({path, toggleMenu, children}: ToggleLinkProps) {
        return (
            <li 
                onClick={() => toggleMenu()}
                key={path}
                className={checkIsActive(path) ? "active" : ""}
            >
                <Link href={path}>
                    {children}
                </Link>
            </li>
        )
    }

    return (
        <motion.ul
            className="toggle-menu"
            initial={{height: "0"}}
            animate={{height: open ? "100vh" : "0"}}
            transition={{duration: 0.5, ease: "easeInOut"}}
            style={{overflowX: "hidden", overflowY: "scroll"}}
        >
            {/* User actions */}
            <li key="user-actions">
                <h6>User actions</h6>
                <div className="user-actions-container">
                    <ThemeToggle toggleFunction={toggleTheme} />
                    <Link href="https://github.com/devrosz/devrosui" className="github-link-btn">
                        <IoLogoGithub style={{height: 25, width: 25}} />
                    </Link>
                </div>
            </li>


            {/* Site pages */}
            <li key="mobile-nav-pages">
                <h6>Pages</h6>
            </li>
            {pages.map(page => {
                const { title, path } = page
                return <ToggleLink path={path} toggleMenu={toggle}>{title}</ToggleLink>
            })}
            
            {/* Documentation pages */}
            {Object.entries(docsPages).map(([section, pages]) => (
                <React.Fragment key={section}>
                    <li key={section}>
                        <h6>{section}</h6>
                    </li>
                        {pages.map((page) => {
                            const { title, path } = page
                           return <ToggleLink path={path} toggleMenu={toggle}>{title}</ToggleLink>
                        })}
                </React.Fragment>
            ))}
        </motion.ul>
    )
}