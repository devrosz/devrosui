import type { Meta, StoryObj } from "@storybook/react-vite"

import { LoadingBar } from "@devrosui/react"
import "@devrosui/react/style.css"

const meta = {
    title: "LoadingBar",
    component: LoadingBar,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof LoadingBar>

export default meta
type Story = StoryObj<typeof meta>

export const LoadingBarDev: Story = {
    args: {progress: 0.25}
}

export const LoadingBarSecondary: Story = {
    args: {progress: 0.25, color: "secondary"}
}

export const LoadingBarThickness: Story = {
    args: {progress: 0.25, thickness: "10px"}
}

export const LoadingBarWidth: Story = {
    args: {progress: 0.25, maxWidth: "500px"}
}