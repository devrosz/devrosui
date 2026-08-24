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

export const Chevron: Story = {
    args: {},
    render: () => {
        return (
            <Accordion width="35rem">
                <Accordion.Item itemId="1">
                    <Accordion.Header>Item 1</Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet. 
                        Eum necessitatibus modi ex culpa quis sit provident provident
                        non minima internos. Ut quia dolores eos numquam obcaecati aut
                        voluptatem voluptatibus qui vero corporis non autem impedit.
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item itemId="2">
                    <Accordion.Header>Item 1</Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet. 
                        Eum necessitatibus modi ex culpa quis sit provident provident
                        non minima internos. Ut quia dolores eos numquam obcaecati aut
                        voluptatem voluptatibus qui vero corporis non autem impedit.
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item itemId="3">
                    <Accordion.Header>Item 1</Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet. 
                        Eum necessitatibus modi ex culpa quis sit provident provident
                        non minima internos. Ut quia dolores eos numquam obcaecati aut
                        voluptatem voluptatibus qui vero corporis non autem impedit.
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        )
    }
}

export const ChevronEmpty: Story = {
    args: {},
    render: () => {
        return (
            <Accordion width="35rem" background="emtpy">
                <Accordion.Item itemId="1">
                    <Accordion.Header>Item 1</Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet. 
                        Eum necessitatibus modi ex culpa quis sit provident provident
                        non minima internos. Ut quia dolores eos numquam obcaecati aut
                        voluptatem voluptatibus qui vero corporis non autem impedit.
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item itemId="2">
                    <Accordion.Header>Item 1</Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet. 
                        Eum necessitatibus modi ex culpa quis sit provident provident
                        non minima internos. Ut quia dolores eos numquam obcaecati aut
                        voluptatem voluptatibus qui vero corporis non autem impedit.
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item itemId="3">
                    <Accordion.Header>Item 1</Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet. 
                        Eum necessitatibus modi ex culpa quis sit provident provident
                        non minima internos. Ut quia dolores eos numquam obcaecati aut
                        voluptatem voluptatibus qui vero corporis non autem impedit.
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        )
    }
}

export const Plus: Story = {
    args: {},
    render: () => {
        return (
            <Accordion width="35rem" toggleIcon="plus">
                <Accordion.Item itemId="1">
                    <Accordion.Header>Item 1</Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet. 
                        Eum necessitatibus modi ex culpa quis sit provident provident
                        non minima internos. Ut quia dolores eos numquam obcaecati aut
                        voluptatem voluptatibus qui vero corporis non autem impedit.
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item itemId="2">
                    <Accordion.Header>Item 1</Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet. 
                        Eum necessitatibus modi ex culpa quis sit provident provident
                        non minima internos. Ut quia dolores eos numquam obcaecati aut
                        voluptatem voluptatibus qui vero corporis non autem impedit.
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item itemId="3">
                    <Accordion.Header>Item 1</Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet. 
                        Eum necessitatibus modi ex culpa quis sit provident provident
                        non minima internos. Ut quia dolores eos numquam obcaecati aut
                        voluptatem voluptatibus qui vero corporis non autem impedit.
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        )
    }
}

export const PlusEmpty: Story = {
    args: {},
    render: () => {
        return (
            <Accordion width="35rem" toggleIcon="plus" background="empty">
                <Accordion.Item itemId="1">
                    <Accordion.Header>Item 1</Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet. 
                        Eum necessitatibus modi ex culpa quis sit provident provident
                        non minima internos. Ut quia dolores eos numquam obcaecati aut
                        voluptatem voluptatibus qui vero corporis non autem impedit.
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item itemId="2">
                    <Accordion.Header>Item 1</Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet. 
                        Eum necessitatibus modi ex culpa quis sit provident provident
                        non minima internos. Ut quia dolores eos numquam obcaecati aut
                        voluptatem voluptatibus qui vero corporis non autem impedit.
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item itemId="3">
                    <Accordion.Header>Item 1</Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet. 
                        Eum necessitatibus modi ex culpa quis sit provident provident
                        non minima internos. Ut quia dolores eos numquam obcaecati aut
                        voluptatem voluptatibus qui vero corporis non autem impedit.
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        )
    }
}
