import type { Meta, StoryObj } from "@storybook/react-vite"
import { CookieConsent } from "@devrosui/react"
import { useArgs } from "storybook/internal/preview-api"

const meta = {
    title: "CookieConsent",
    component: CookieConsent,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof CookieConsent>

export default meta
type Story = StoryObj<typeof meta>

export const CookieConsentDev: Story = {
    args: {
        onNecessary: () => console.log("accept necessary only"),
        onAcceptAll: () => console.log("acceptall "),
        children: ""
    },
    render: () => {
        const [{onNeseccary, onAcceptAll}] = useArgs()

        return (
            <CookieConsent onNecessary={onNeseccary} onAcceptAll={onAcceptAll}>
                This website uses cookies for certain functionalities.
                For more details about which functionalities and what data is collected,
                please refer to our cookie policy.
            </CookieConsent>
        )
    }
}

export const CookieConsentNoChoice: Story = {
    args: {
        onNecessary: () => console.log("accept necessary only"),
        onAcceptAll: () => console.log("acceptall "),
        allowChoice: false,
        children: ""
    },
    render: () => {
        const [{onNeseccary, onAcceptAll, allowChoice}] = useArgs()

        return (
            <CookieConsent onNecessary={onNeseccary} onAcceptAll={onAcceptAll} allowChoice={allowChoice}>
                This website uses cookies for certain functionalities.
                For more details about which functionalities and what data is collected,
                please refer to our cookie policy.
            </CookieConsent>
        )
    }
}
