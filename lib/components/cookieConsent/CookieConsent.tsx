"use client"

import React from "react"
import { MdOutlineCookie } from "react-icons/md"
import { AnimatePresence, motion } from "motion/react"
import { Button } from "@devrosui/react"
import "./cookieconsent.css"

// onNecessary: callback function for necessary cookies only.
// onAcceptAll: callback function for all cookies.
// allowChoice: true if analytical cookies are present. False if only necessary cookies are used
// so the user can only accept those.
// position: choose whether the popup must be inline or fixed on the bottom-right corner of the screen.
// children: paragraph text inside the cookie popup.
type CookieConsentProps = {
    onNecessary?: () => Promise<void> | void,
    onAcceptAll?: () => Promise<void> | void,
    allowChoice?: boolean,
    position?: "fixed" | "relative",
    children: React.ReactNode
}

// Component that renders a disclaimer of cookies that are being used on a website.
// The user can select to choose which cookies should be active.
export default function CookieConsent({
    onNecessary,
    onAcceptAll,
    allowChoice=true,
    position="fixed",
    children
}: CookieConsentProps) {
    const [open, setOpen] = React.useState(false)

    // Render cookie disclaimer after two seconds.
    function handleRenderDelay() {
        setTimeout(() => {
            setOpen(prev => !prev)
        }, 2000)
    }

    React.useEffect(() => {
        handleRenderDelay()
        // Prevent that popup is in closed-state after visiting another page
        // because the default state is closed.
        return () => setOpen(prev => !prev)
    }, [])

    return (
        <div className="cookie-consent-container" style={{"position": position}}>
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
                                <Button 
                                    variant="secondary"
                                    style={{margin: "0.5rem 0"}}
                                    onClick={() => {
                                        setOpen(prev => !prev)
                                        if (onNecessary) {
                                            onNecessary()
                                        }
                                    }}
                                >
                                    Necessary only
                                </Button>
                                <Button variant="primary" onClick={() => {
                                    setOpen(prev => !prev)
                                    if (onAcceptAll) {
                                        onAcceptAll()
                                    }
                                }}>
                                    Accept all
                                </Button>
                            </div>
                        ) : (
                            <Button 
                                variant="primary"
                                style={{marginTop: "0.5rem"}}
                                onClick={() => {
                                    setOpen(prev => !prev)
                                    if (onNecessary) {
                                        onNecessary()
                                    }
                                }}
                            >
                                Understood
                            </Button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}