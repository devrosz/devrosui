import { JSX } from "react"
import { motion, AnimatePresence } from "motion/react"
import "./popup.css"

// open: state of the popup.
// children: component to appear.
type PopupProps = {
    open: boolean
    children: JSX.Element,
}

// Wrapper component that displays its children in a popup-style while
// darkening the background.
export default function Popup({open, children}: PopupProps) {
    return (
        <AnimatePresence>
            {open ?
                <section className="popup-overlay">
                    <motion.div 
                        className="popup-container"
                        initial={{opacity: 0, y: 25}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 25}}

                    >
                        {children}
                    </motion.div>
                </section> : null
            }
        </AnimatePresence>
    )
}