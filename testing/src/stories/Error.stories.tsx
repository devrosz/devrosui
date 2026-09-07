import type { Meta, StoryObj } from "@storybook/react-vite"

import { Error } from "@devrosui/react"
import "@devrosui/react/style.css"

const meta = {
    title: "Error",
    component: Error,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Error>

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

