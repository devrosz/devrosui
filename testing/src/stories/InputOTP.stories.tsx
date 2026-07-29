import type { Meta, StoryObj } from "@storybook/react-vite"
import { InputOTP } from "@devrosui/react"

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
            <InputOTP onSubmit={() => console.log("submitted")}>
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