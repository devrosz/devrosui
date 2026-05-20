import { motion } from "motion/react"
import { componentPages } from "@/app/docs/layout"
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

    return (
         <motion.ul
            className="toggle-menu"
            initial={{height: "0"}}
            animate={{height: open ? "100vh" : "0"}}
            transition={{duration: 0.5, ease: "easeInOut"}}
            style={{overflowX: "hidden", overflowY: "scroll"}}
        >
            <li key="mobile-nav-pages">
                <h6>Pages</h6>
            </li>
            <ToggleLink path="/" toggleMenu={toggle}>
                Home
            </ToggleLink>
            <ToggleLink path="/docs/components" toggleMenu={toggle}>
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