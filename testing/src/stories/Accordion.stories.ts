import type { Meta, StoryObj } from "@storybook/react-vite"

import { Accordion } from "@devrosui/react"

const meta = {
    title: "Accordion",
    component: Accordion,
    parameters: {
        layout: "centered"
    },
    tags: ['autodocs']
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

const accordionItems = [
    {
        header: "Item 1",
        text:
        `
            Lorem ipsum dolor sit amet. 
            Eum necessitatibus modi ex culpa quis sit provident provident
            non minima internos. Ut quia dolores eos numquam obcaecati aut
            voluptatem voluptatibus qui vero corporis non autem impedit.
        `
    },
     {
        header: "Item 2",
        text:
        `
            Lorem ipsum dolor sit amet. 
            Eum necessitatibus modi ex culpa quis sit provident provident
            non minima internos. Ut quia dolores eos numquam obcaecati aut
            voluptatem voluptatibus qui vero corporis non autem impedit.
        `
    },
     {
        header: "Item 3",
        text:
        `
            Lorem ipsum dolor sit amet. 
            Eum necessitatibus modi ex culpa quis sit provident provident
            non minima internos. Ut quia dolores eos numquam obcaecati aut
            voluptatem voluptatibus qui vero corporis non autem impedit.
        `
    }
]

export const Chevron: Story = {
    args: {
        items: accordionItems,
        width: "35rem"
    }
}

export const ChevronEmpty: Story = {
    args: {
        items: accordionItems,
        background: "empty",
        width: "35rem"
    }
}

export const Plus: Story = {
    args: {
        items: accordionItems,
        toggleIcon: "plus",
        width: "35rem"
    }
}

export const PlusEmpty: Story = {
    args: {
        items: accordionItems,
        toggleIcon: "plus",
        background: "empty",
        width: "35rem"
    }
}
