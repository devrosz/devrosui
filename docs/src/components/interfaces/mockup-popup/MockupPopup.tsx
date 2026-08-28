"use client"

import React from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@devrosui/react"
import "./mockup-popup.css"

// Popup component that is rendered relatively for demo purpose only inside the hero
// section.
export default function MockupPopup({width="100%"}) {
     const [open, setOpen] = React.useState<boolean>(true)
    
    function toggle() {
        setOpen(prev => !prev)
    }

    return (
        <AnimatePresence>
            {open ?
                    <motion.div 
                        className="popup-container"
                        initial={{opacity: 0, y: 25}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 25}}
                        style={{width: width}}

                    >
                        <div className="popup-example-content">
                            <h5>Are you sure you want to delete your account?</h5>
                            <p>This action can not be undone</p>
                            <div className="popup-example-buttons">
                                <Button onClick={toggle} variant="tertiary">Cancel</Button>
                                <Button onClick={toggle} variant="danger">Delete account</Button>
                            </div>
                        </div>
                    </motion.div>
                : null
            }
        </AnimatePresence>
    )
}