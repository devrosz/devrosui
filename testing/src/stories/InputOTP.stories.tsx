import type { Meta, StoryObj } from "@storybook/react-vite"
import { InputOTP } from "@devrosui/react"
import { useArgs } from "storybook/internal/preview-api"

const meta = {
    title: "InputOTP",
    component: InputOTP,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof InputOTP>

export default meta
type Story = StoryObj<typeof meta>

export const InputOTPDev: Story = {
    render: () => {
        return (
            <InputOTP
                onSubmit={() => console.log("submitted")}
            >
                <InputOTP.Slot index={0} />
                <InputOTP.Slot index={1} />
                <InputOTP.Slot index={2} />
                <InputOTP.Separator />
                <InputOTP.Slot index={3} />
                <InputOTP.Slot index={4} />
                <InputOTP.Slot index={5} />
            </InputOTP>
        )
    }
}

export const InputOTPLabel: Story = {
    render: () => {
        return (
            <InputOTP
                onSubmit={() => console.log("submitted")}
            >
                <InputOTP.Label>Verification</InputOTP.Label>
                <InputOTP.Description>
                    We have sent a code to j***@mail.com. Enter the code below.
                </InputOTP.Description>
                <InputOTP.Slot index={0} />
                <InputOTP.Slot index={1} />
                <InputOTP.Slot index={2} />
                <InputOTP.Separator />
                <InputOTP.Slot index={3} />
                <InputOTP.Slot index={4} />
                <InputOTP.Slot index={5} />
            </InputOTP>
        )
    }
}

export const NoAutoSubmit: Story = {
    render: () => {
        return (
            <InputOTP
                onSubmit={() => console.log("submitted")}
                autoSubmit={false}
            >
                <InputOTP.Slot index={0} />
                <InputOTP.Slot index={1} />
                <InputOTP.Slot index={2} />
                <InputOTP.Separator />
                <InputOTP.Slot index={3} />
                <InputOTP.Slot index={4} />
                <InputOTP.Slot index={5} />
            </InputOTP>
        )
    }
}

export const Disabled: Story = {
    render: () => {
        return (
            <InputOTP
                onSubmit={() => console.log("submitted")}
                autoSubmit={false}
                disabled={true}
            >
                <InputOTP.Slot index={0} />
                <InputOTP.Slot index={1} />
                <InputOTP.Slot index={2} />
                <InputOTP.Separator />
                <InputOTP.Slot index={3} />
                <InputOTP.Slot index={4} />
                <InputOTP.Slot index={5} />
            </InputOTP>
        )
    }
}

export const LettersOnly: Story = {
    render: () => {
        return (
            <InputOTP
                onSubmit={() => console.log("submitted")}
                autoSubmit={false}
                allowNumbers={false}
            >
                <InputOTP.Slot index={0} />
                <InputOTP.Slot index={1} />
                <InputOTP.Slot index={2} />
                <InputOTP.Separator />
                <InputOTP.Slot index={3} />
                <InputOTP.Slot index={4} />
                <InputOTP.Slot index={5} />
            </InputOTP>
        )
    }
}

export const Combination: Story = {
    render: () => {
        return (
            <InputOTP
                onSubmit={() => console.log("submitted")}
                autoSubmit={false}
            >
                <InputOTP.Slot index={0} />
                <InputOTP.Slot index={1} />
                <InputOTP.Slot index={2} />
                <InputOTP.Separator />
                <InputOTP.Slot index={3} />
                <InputOTP.Slot index={4} />
                <InputOTP.Slot index={5} />
            </InputOTP>
        )
    }
}

export const onError: Story = {
    args: {errorMessage: ""},
    render: () => {

        const [{ errorMessage }, updateArgs] = useArgs()
        return (
            <InputOTP
                onSubmit={() => updateArgs({errorMessage: "Incorrect code"})}
                errorMessage={errorMessage}
            >
                <InputOTP.Slot index={0} />
                <InputOTP.Slot index={1} />
                <InputOTP.Slot index={2} />
                <InputOTP.Separator />
                <InputOTP.Slot index={3} />
                <InputOTP.Slot index={4} />
                <InputOTP.Slot index={5} />
            </InputOTP>
        )
    }
}