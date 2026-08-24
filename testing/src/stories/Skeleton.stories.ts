import type { Meta, StoryObj } from "@storybook/react-vite"

import { Skeleton } from "@devrosui/react"

const meta = {
    title: "Skeleton",
    component: Skeleton,
    parameters: {
        layout: "centered"
    },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const SkeletonDev: Story = {
    args: {}
}