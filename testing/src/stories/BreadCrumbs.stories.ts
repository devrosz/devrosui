import type { Meta, StoryObj } from "@storybook/react-vite"

import { Breadcrumbs } from "@devrosui/react"

const meta = {
    title: "BreadCrumbs",
    component: Breadcrumbs,
    parameters: {
        layout: "centered"
    },
    tags: ['autodocs']
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const DelimiterChevron: Story = {
    args: {
        path: "documents/components/breadcrumbs"
    }
}

export const DelimiterSlash: Story = {
    args: {
        path: "documents/components/breadcrumbs",
        delimiter: "/"
    }
}

export const DelimiterEmpty: Story = {
    args: {
        path: "documents/components/breadcrumbs",
        delimiter: " "
    }
}

export const PathEmpty: Story = {
    args: {
        path: ""
    }
}
