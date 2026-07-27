"use client"

import { CookieConsent } from "@devrosui/react"

export default function CookieConsentMockup({allowChoice=true}) {

    return (
        <CookieConsent 
            onNecessary={() => {}}
            onAcceptAll={() => {}}
            allowChoice={allowChoice}
            position="relative"
        >
            This website uses cookies for certain functionalities.
            For more details about which functionalities and what data is collected,
            please refer to our cookie policy.
        </CookieConsent>
    )
}