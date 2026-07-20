import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tabs } from "@devrosui/react"

const meta = {
    title: "Tabs",
    component: Tabs,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const LocalTabsDev: Story = {
    args: {
        tabs: [
            {text: "Dashboard", component: <h3>Dashboard content</h3>},
            {text: "Analytics", component: <h3>Analytics content</h3>},
            {text: "Setttings", component: <h3>Settings content</h3>},
        ]
    }
}

export const LocalTabsDisabled: Story = {
    args: {
        tabs: [
            {text: "Dashboard", component: <h3>Dashboard content</h3>},
            {text: "Analytics", component: <h3>Analytics content</h3>, disabled: true},
            {text: "Setttings", component: <h3>Settings content</h3>},
        ]
    }
}

export const LocalTabsSecondary: Story = {
    args: {
        tabs: [
            {text: "Dashboard", component: <h3>Dashboard content</h3>},
            {text: "Analytics", component: <h3>Analytics content</h3>},
            {text: "Setttings", component: <h3>Settings content</h3>},
        ],
        type: "secondary"
    }
}

export const LocalTabsTertiary: Story = {
    args: {
        tabs: [
            {text: "Dashboard", component: <h3>Dashboard content</h3>},
            {text: "Analytics", component: <h3>Analytics content</h3>},
            {text: "Setttings", component: <h3>Settings content</h3>},
        ],
        type: "tertiary"
    }
}

