import type { Meta, StoryObj } from "@storybook/react-vite"
import React from "react"

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
    render: (args) => {
        const [formData, setFormData] = React.useState<{
            date: string | null;
        }>({
            date: null,
        });

        function handleChange(name: string, value: string) {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }

        return (
            <DatePicker
                {...args}
                value={formData.date}
                onChange={handleChange}
            />
        )
    },
    args: {
        id: "datepicker",
        name: "date",
    }
}

