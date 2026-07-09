import type { Meta, StoryObj } from "@storybook/react-vite"

import { Select } from "@devrosui/react"

const meta = {
    title: "Select",
    component: Select,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const SelectDev: Story = {
    args: {
        name: "select",
        id: "select",
        options: [
            "BMW",
            "Audi",
            "Mercedes",
            "Volkswagen"
        ],
        label: "select",
        placeholder: "Favorite car"
    }
}

export const noLabel: Story = {
    args: {
        name: "select",
        id: "select",
        options: [
            "BMW",
            "Audi",
            "Mercedes",
            "Volkswagen"
        ],
        placeholder: "Favorite car"
    }
}

export const longPlaceholder: Story = {
    args: {
        name: "select",
        id: "select",
        options: [
            "BMW",
            "Audi",
            "Mercedes",
            "Volkswagen"
        ],
        label: "select",
        placeholder: "Choose your favorite car brand"
    }
}

export const longList: Story = {
    args: {
        name: "select",
        id: "select",
        options: [
            "BMW",
            "Audi",
            "Mercedes",
            "Volkswagen",
            "Citroën",
            "Opel",
            "Ford",
            "Toyota",
            "Nissan",
            "Pagani",
            "Koeningsegg",
            "Ferrari",
            "Lamborghini",
            "Bugatti"
        ],
        placeholder: "Favorite car"
    }
}

