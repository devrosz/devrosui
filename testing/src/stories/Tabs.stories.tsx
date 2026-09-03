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
    render: () => {
        return (
            <Tabs type="local" initialTabId="tab-1">
                <Tabs.TabsList>
                    <Tabs.Tab id="tab-1">
                        <button>Overview</button>
                    </Tabs.Tab>
                    <Tabs.Tab id="tab-2">
                        <button>Analytics</button>
                    </Tabs.Tab>
                    <Tabs.Tab id="tab-3">
                        <button>Settings</button>
                    </Tabs.Tab>
                </Tabs.TabsList>

                <Tabs.TabRender id="tab-1">
                    <h5>Overview content</h5>
                </Tabs.TabRender>
                 <Tabs.TabRender id="tab-2">
                    <h5>Analytics content</h5>
                </Tabs.TabRender>
                 <Tabs.TabRender id="tab-3">
                    <h5>Settings content</h5>
                </Tabs.TabRender>
            </Tabs>
        )
    }
}

export const LocalTabsSecondary: Story = {
    render: () => {
        return (
            <Tabs type="local" styling="secondary" initialTabId="tab-1">
                <Tabs.TabsList>
                    <Tabs.Tab id="tab-1">
                        <button>Overview</button>
                    </Tabs.Tab>
                    <Tabs.Tab id="tab-2">
                        <button>Analytics</button>
                    </Tabs.Tab>
                    <Tabs.Tab id="tab-3">
                        <button>Settings</button>
                    </Tabs.Tab>
                </Tabs.TabsList>

                <Tabs.TabRender id="tab-1">
                    <h5>Overview content</h5>
                </Tabs.TabRender>
                 <Tabs.TabRender id="tab-2">
                    <h5>Analytics content</h5>
                </Tabs.TabRender>
                 <Tabs.TabRender id="tab-3">
                    <h5>Settings content</h5>
                </Tabs.TabRender>
            </Tabs>
        )
    }
}

export const LocalTabsTertiary: Story = {
    render: () => {
        return (
            <Tabs type="local" styling="tertiary" initialTabId="tab-1">
                <Tabs.TabsList>
                    <Tabs.Tab id="tab-1">
                        <button>Overview</button>
                    </Tabs.Tab>
                    <Tabs.Tab id="tab-2">
                        <button>Analytics</button>
                    </Tabs.Tab>
                    <Tabs.Tab id="tab-3">
                        <button>Settings</button>
                    </Tabs.Tab>
                </Tabs.TabsList>

                <Tabs.TabRender id="tab-1">
                    <h5>Overview content</h5>
                </Tabs.TabRender>
                 <Tabs.TabRender id="tab-2">
                    <h5>Analytics content</h5>
                </Tabs.TabRender>
                 <Tabs.TabRender id="tab-3">
                    <h5>Settings content</h5>
                </Tabs.TabRender>
            </Tabs>
        )
    }
}

export const LocalTabsDisabled: Story = {
    render: () => {
        return (
            <Tabs type="local" initialTabId="tab-1">
                <Tabs.TabsList>
                    <Tabs.Tab id="tab-1">
                        <button>Overview</button>
                    </Tabs.Tab>
                    <Tabs.Tab id="tab-2" disabled={true}>
                        <button>Analytics</button>
                    </Tabs.Tab>
                    <Tabs.Tab id="tab-3">
                        <button>Settings</button>
                    </Tabs.Tab>
                </Tabs.TabsList>

                <Tabs.TabRender id="tab-1">
                    <h5>Overview content</h5>
                </Tabs.TabRender>
                 <Tabs.TabRender id="tab-2">
                    <h5>Analytics content</h5>
                </Tabs.TabRender>
                 <Tabs.TabRender id="tab-3">
                    <h5>Settings content</h5>
                </Tabs.TabRender>
            </Tabs>
        )
    }
}

