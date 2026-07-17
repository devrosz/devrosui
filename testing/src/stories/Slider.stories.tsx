import type { Meta, StoryObj } from "@storybook/react-vite"
import { useArgs } from "storybook/internal/preview-api"
import { Slider } from "@devrosui/react"

const meta = {
    title: "Slider",
    component: Slider,
    parameters: {
        layout: "centered"
    },
    tags: ['autodocs']
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderDev: Story = {
    args: {
        id:"slider",
        name: "slider",
        label: "Range",
        min: "0",
        max: "100",
        value: "0",
        setValue: () => {}
    },
    render: () => {
        const [{id, name, label, min, max, value, setValue}, updateArgs] = useArgs()

        function handleSlide(newValue: string): void {
            updateArgs({value: newValue})
        }

        return (
            <Slider
                id={id}
                name={name}
                label={label}
                min={min}
                max={max}
                value={value}
                setValue={handleSlide}
            />
        )
    }
}

export const Description: Story = {
    args: {
        id:"slider",
        name: "slider",
        label: "Range",
        min: "0",
        max: "100",
        value: "0",
        setValue: () => {},
        description: "Choose an applicable value."
    },
    render: () => {
        const [{id, name, label, min, max, value, setValue, description}, updateArgs] = useArgs()

        function handleSlide(newValue: string): void {
            updateArgs({value: newValue})
        }

        return (
            <Slider
                id={id}
                name={name}
                label={label}
                min={min}
                max={max}
                value={value}
                setValue={handleSlide}
                description={description}
            />
        )
    }
}

export const Price: Story = {
    args: {
        id:"price",
        name: "price",
        label: "Price",
        min: "0",
        max: "100",
        step: "0.01",
        value: "0",
        setValue: () => {},
        unit: "EUR",

    },
    render: () => {
        const [{id, name, label, min, max, value, setValue, step, unit}, updateArgs] = useArgs()

        function handleSlide(newValue: string): void {
            updateArgs({value: newValue})
        }

        return (
            <Slider
                id={id}
                name={name}
                label={label}
                min={min}
                max={max}
                value={value}
                setValue={handleSlide}
                step={step}
                unit={unit}
            />
        )
    }
}

export const NoValue: Story = {
    args: {
        id:"slider",
        name: "slider",
        label: "Range",
        min: "0",
        max: "100",
        value: "0",
        setValue: () => {},
        showValue: false
    },
    render: () => {
        const [{id, name, label, min, max, value, setValue, showValue}, updateArgs] = useArgs()

        function handleSlide(newValue: string): void {
            updateArgs({value: newValue})
        }

        return (
            <Slider
                id={id}
                name={name}
                label={label}
                min={min}
                max={max}
                value={value}
                setValue={handleSlide}
                showValue={showValue}
            />
        )
    }
}

export const Disabled: Story = {
    args: {
        id:"slider",
        name: "slider",
        label: "Range",
        min: "0",
        max: "100",
        value: "0",
        setValue: () => {},
        disabled: true
    },
    render: () => {
        const [{id, name, label, min, max, value, setValue, disabled}, updateArgs] = useArgs()

        function handleSlide(newValue: string): void {
            updateArgs({value: newValue})
        }

        return (
            <Slider
                id={id}
                name={name}
                label={label}
                min={min}
                max={max}
                value={value}
                setValue={handleSlide}
                disabled={disabled}
            />
        )
    }
}