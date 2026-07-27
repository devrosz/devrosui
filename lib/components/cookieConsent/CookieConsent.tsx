"use client"

import React from "react"
import { MdOutlineCookie } from "react-icons/md"
import { AnimatePresence, motion } from "motion/react"
import "./cookieconsent.css"

// onNecessary: callback function for necessary cookies only.
// onAcceptAll: callback function for all cookies.
// allowChoice: true if analytical cookies are present. False if only necessary cookies are used
// so the user can only accept those.
// children: paragraph text inside the cookie popup.
type CookieConsentProps = {
    onNecessary: () => Promise<void> | void,
    onAcceptAll: () => Promise<void> | void,
    allowChoice?: boolean,
    children: React.ReactNode
}

// Component that renders a disclaimer of cookies that are being used on a website.
// The user can select to choose which cookies should be active.
export default function CookieConsent({onNecessary, onAcceptAll, allowChoice=true, children}: CookieConsentProps) {
    const [open, setOpen] = React.useState(false)

    // Render cookie disclaimer after two seconds.
    function handleRenderDelay() {
        setTimeout(() => {
            setOpen(prev => !prev)
        }, 2000)
    }

    React.useEffect(() => {
        handleRenderDelay()
    }, [])

    return (
        <div className="cookie-consent-container">
            <AnimatePresence>
                {open && (
                    <motion.div 
                        className="cookie-consent-content"
                        initial={{scale: 0.8, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.8, opacity: 0}}
                        transition={{duration: 0.1}}
                    >
                        <MdOutlineCookie className="cookie-consent-icon" />
                        <h5>Cookie consent</h5>
                        <p>{children}</p>
                        { allowChoice ? (
                            <div>
                                <button 
                                    className="secondary-button"
                                    style={{marginBottom: "0.5rem"}}
                                    onClick={() => {
                                        setOpen(prev => !prev)
                                        onNecessary()
                                    }}
                                >
                                    Necessary only
                                </button>
                                <button className="primary-button" onClick={() => {
                                    setOpen(prev => !prev)
                                    onAcceptAll()
                                }}>
                                    Accept all
                                </button>
                            </div>
                        ) : (
                            <button className="primary-button">
                                Understood
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}