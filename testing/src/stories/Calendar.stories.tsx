import type { Meta, StoryObj } from "@storybook/react-vite"
import { Calendar } from "@devrosui/react"
import { useArgs } from "storybook/internal/preview-api"

const meta = {
    title: "Calendar",
    component: Calendar,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>


// In the following stories, a dummy onChange will be passed in args
// to satisfy the typechecking, but it will be overwritten by the function
// defined in render.
export const CalendarDev: Story = {
    args: {},
    render: () => {
        return <Calendar />
    },
}

export const DatepickerYearLimits: Story = {
    args: {
        minYear: 2025,
        maxYear: 2027
    },
    render: () => {
        const [{minYear, maxYear}] = useArgs()

        return (
            <Calendar
                minYear={minYear}
                maxYear={maxYear}
            />
        )
    },
}

export const DatepickerDisabledDays: Story = {
    args: {
        disabledDays: [
            new Date("2026-07-03"),
            new Date("2026-07-06"),
            new Date("2026-07-15"),
            new Date("2026-07-06")
        ]
    },
    render: () => {
        const [{disabledDays}] = useArgs()

        return (
            <Calendar disabledDays={disabledDays} />
        )
    },
}

