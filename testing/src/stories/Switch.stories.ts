import type { Meta, StoryObj } from "@storybook/react-vite"
import { Switch } from "@devrosui/react"

const meta = {
    title: "Switch",
    component: Switch,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const SwitchDev: Story = {
    args: {}
}