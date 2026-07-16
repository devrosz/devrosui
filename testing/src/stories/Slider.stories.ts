import type { Meta, StoryObj } from "@storybook/react-vite"

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
        max: "100"
    }
}