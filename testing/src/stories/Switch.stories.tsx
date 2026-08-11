import type { Meta, StoryObj } from "@storybook/react-vite"
import { Switch } from "@devrosui/react"
import { useArgs } from "storybook/internal/preview-api"

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
    args: {
        onActive: () => console.log("active"),
        onDeactive: () => console.log("deactive"),
        disabled: false,
        children: ""
    },
    render: () => {
        const [{onActive, onDeactive, disabled}] = useArgs()

        return (
            <Switch onActive={onActive} onDeactive={onDeactive} disabled={disabled}>
                <Switch.Track>
                    <Switch.Thumb />
                </Switch.Track>
            </Switch>
        )
    }
}

export const SwitchLabel: Story = {
    args: {disabled: false, children: ""},
    render: () => {
        const [{disabled}] = useArgs()

        return (
            <Switch disabled={disabled}>
                <Switch.Track>
                    <Switch.Thumb />
                </Switch.Track>
                <Switch.Meta>
                    <Switch.Label>
                        Enable notifications
                    </Switch.Label>
                </Switch.Meta>
            </Switch>
        )
    }
}

export const SwitchDescription: Story = {
    args: {disabled: false, children: ""},
    render: () => {
        const [{disabled}] = useArgs()

        return (
            <Switch disabled={disabled}>
                <Switch.Track>
                    <Switch.Thumb />
                </Switch.Track>
                <Switch.Meta>
                    <Switch.Label>
                        Enable notifications
                    </Switch.Label>
                    <Switch.Description>
                        Activate push notifications to stay up-to-date with the latest news.
                    </Switch.Description>
                </Switch.Meta>
            </Switch>
        )
    }
}

export const SwitchInitial: Story = {
    args: {
        onActive: () => console.log("active"),
        onDeactive: () => console.log("deactive"),
        disabled: false,
        isActive: true,
        children: ""
    },
    render: () => {
        const [{isActive, onActive, onDeactive, disabled}] = useArgs()

        return (
            <Switch
                isActive={isActive}
                onActive={onActive} 
                onDeactive={onDeactive}
                disabled={disabled}
            >
                <Switch.Track>
                    <Switch.Thumb />
                </Switch.Track>
            </Switch>
        )
    }
}