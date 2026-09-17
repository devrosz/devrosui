import type { Meta, StoryObj } from "@storybook/react-vite"
import { Panel } from "@devrosui/react"
import "@devrosui/react/style.css"

const meta = {
    title: "Panel",
    component: Panel,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

export const PanelDev: Story = {
    args: {
        initialMode: "mode-1",
        children: ""
    },
    render: () => {
        return (
            <Panel initialMode="mode-1">
                <Panel.Mode handleClick={() => console.log("function 1")} id="mode-1">
                    Dark mode
                </Panel.Mode>
                <Panel.Mode handleClick={() => console.log("function 2")} id="mode-2">
                    Light mode
                </Panel.Mode>
            </Panel>
        )
    }
}

export const PanelSecondary: Story = {
    args: {
        initialMode: "mode-1",
        children: ""
    },
    render: () => {
        return (
            <Panel styling="secondary" initialMode="mode-1">
                <Panel.Mode handleClick={() => console.log("function 1")} id="mode-1">
                    Dark mode
                </Panel.Mode>
                <Panel.Mode handleClick={() => console.log("function 2")} id="mode-2">
                    Light mode
                </Panel.Mode>
            </Panel>
        )
    }
}

export const PanelDisabled: Story = {
    args: {
        initialMode: "mode-1",
        children: ""
    },
    render: () => {
        return (
            <Panel styling="secondary" initialMode="mode-1">
                <Panel.Mode handleClick={() => console.log("function 1")} id="mode-1">
                    Dark mode
                </Panel.Mode>
                <Panel.Mode handleClick={() => console.log("function 2")} id="mode-2" disabled={true}>
                    Light mode
                </Panel.Mode>
            </Panel>
        )
    }
}


