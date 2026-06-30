import type { Meta, StoryObj } from "@storybook/react-vite"

import { DatePicker } from "@devrosui/react"

const meta = {
    title: "Datepicker",
    component: DatePicker,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const DatePickerDev: Story = {
    args: {}
}

