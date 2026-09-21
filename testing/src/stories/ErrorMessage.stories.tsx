import type { Meta, StoryObj } from "@storybook/react-vite"

import { ErrorMessage } from "@devrosui/react"
import "@devrosui/react/style.css"

const meta = {
    title: "Error",
    component: ErrorMessage,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof ErrorMessage>

export default meta
type Story = StoryObj<typeof meta>

export const ErrorWarning: Story = {
    args: {
        children: "This is an error message."
    }
}

export const ErrorDanger: Story = {
    args: {
        children: "This is an error message",
        type: "danger"
    }
}

