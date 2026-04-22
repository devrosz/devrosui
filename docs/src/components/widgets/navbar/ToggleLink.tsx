import { motion } from "motion/react"
import Link from "next/link"
import type { NavLinkProps } from "@/app/types"

export default function ToggleLink({path, toggleMenu, children}: NavLinkProps) {
    return (
        <motion.li
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            onClick={() => toggleMenu()}
        >
        <Link href={path}>{children}</Link>
        </motion.li>
    )
}