import type { Meta, StoryObj } from "@storybook/react-vite"
import { DatePicker } from "@devrosui/react"
import { useArgs } from "storybook/internal/preview-api"

const meta = {
    title: "Datepicker",
    component: DatePicker,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>


// In the following stories, a dummy onChange will be passed in args
// to satisfy the typechecking, but it will be overwritten by the function
// defined in render.
export const DatePickerDev: Story = {
    args: {
        id: "datepicker",
        name: "date",
        date: "",
        onChange: () => {},
    },
    render: () => {
        const [{id, name, date}, updateArgs] = useArgs()
        
        function handleChange(name: string, value: string) {
            updateArgs({[name]: value})
        }
        
        return (
            <DatePicker
                id={id}
                name={name}
                date={date}
                onChange={handleChange}
            />
        )
    },
}

export const DatepickerYearLimits: Story = {
    args: {
        id: "datepicker",
        name: "date",
        date: "",
        onChange: () => {},
        minYear: 2025,
        maxYear: 2027
    },
    render: () => {
        const [{id, name, date, minYear, maxYear}, updateArgs] = useArgs()

        function handleChange(name: string, value: string) {
           updateArgs({[name]: value})
        }

        return (
            <DatePicker
                id={id}
                name={name}
                date={date}
                onChange={handleChange}
                minYear={minYear}
                maxYear={maxYear}
            />
        )
    },
}

export const DatepickerDisabled: Story = {
    args: {
        id: "datepicker",
        name: "date",
        date: "",
        onChange: () => {},
        disabled: [
            new Date("2026-07-03"),
            new Date("2026-07-06"),
            new Date("2026-07-15"),
            new Date("2026-07-06")
        ]
    },
    render: () => {
        const [{id, name, date, disabled}, updateArgs] = useArgs()

        function handleChange(name: string, value: string) {
           updateArgs({[name]: value})
        }

        return (
            <DatePicker
                id={id}
                name={name}
                date={date}
                onChange={handleChange}
                disabled={disabled}
            />
        )
    },
}

