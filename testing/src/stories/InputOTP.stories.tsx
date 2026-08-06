import type { Meta, StoryObj } from "@storybook/react-vite"
import { InputOTP } from "@devrosui/react"
import { useArgs } from "storybook/internal/preview-api"
import { useId } from "react"

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
    // Placeholder for <InputOTP> children to satisfy typing.
    args: {children: ""},
    render: () => {
        return (
            <InputOTP>
                <InputOTP.Form
                    inputLength={6}
                    onSubmit={() => console.log("submitted")}
                >
                    <InputOTP.Slot index={0} />
                    <InputOTP.Slot index={1} />
                    <InputOTP.Slot index={2} />
                    <InputOTP.Separator />
                    <InputOTP.Slot index={3} />
                    <InputOTP.Slot index={4} />
                    <InputOTP.Slot index={5} />
                </InputOTP.Form>
            </InputOTP>
        )
    }
}

export const InputOTPLabel: Story = {
    // Placeholder for <InputOTP> children to satisfy typing.
    args: {children: ""},
    render: () => {
        return (
            <InputOTP>
                <InputOTP.Form
                    inputLength={6}
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
                </InputOTP.Form>
            </InputOTP>
        )
    }
}

export const NoAutoSubmit: Story = {
    // Placeholder for <InputOTP> children to satisfy typing.
    args: {children: ""},
    render: () => {
        return (
            <InputOTP>
                <InputOTP.Form
                    inputLength={6}
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
                </InputOTP.Form>
            </InputOTP>
        )
    }
}

export const Disabled: Story = {
    // Placeholder for <InputOTP> children to satisfy typing.
    args: {children: ""},
    render: () => {
        return (
            <InputOTP>
                <InputOTP.Form
                    inputLength={6}
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
                </InputOTP.Form>
            </InputOTP>
        )
    }
}

export const LettersOnly: Story = {
    // Placeholder for <InputOTP> children to satisfy typing.
    args: {children: ""},
    render: () => {
        return (
            <InputOTP>
                <InputOTP.Form
                    inputLength={6}
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
                </InputOTP.Form>
            </InputOTP>
        )
    }
}

export const Combination: Story = {
    // Placeholder for <InputOTP> children to satisfy typing.
    args: {children: ""},
    render: () => {
        return (
            <InputOTP>
                <InputOTP.Form
                    inputLength={6}
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
                </InputOTP.Form>
            </InputOTP>
        )
    }
}

export const onError: Story = {
    // Placeholder for <InputOTP> children to satisfy typing.
    args: {children: ""},
    render: () => {

        const [{ errorMessage }, updateArgs] = useArgs()
        const errorKey = useId()

        return (
            <InputOTP>
                <InputOTP.Form
                    inputLength={6}
                    onSubmit={() => updateArgs(
                        {errorMessage: {message: "Incorrect code", key: errorKey}}
                    )}
                    errorMessage={errorMessage}
                >
                    <InputOTP.Slot index={0} />
                    <InputOTP.Slot index={1} />
                    <InputOTP.Slot index={2} />
                    <InputOTP.Separator />
                    <InputOTP.Slot index={3} />
                    <InputOTP.Slot index={4} />
                    <InputOTP.Slot index={5} />
                </InputOTP.Form>
            </InputOTP>
        )
    }
}