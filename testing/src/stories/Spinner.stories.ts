import type { Meta, StoryObj } from "@storybook/react-vite"

import { Spinner } from "@devrosui/react"
import "@devrosui/react/style.css"

const meta = {
    title: "Spinner",
    component: Spinner,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const SpinnerDev: Story = {
    args: {}
}

export const SpinnerSecondary: Story = {
    args: {color: "secondary"}
}

export const SpinnerTertiary: Story = {
    args: {color: "tertiary"}
}

export const SpinnerLarge: Story = {
    args: {size: "3rem"}
}