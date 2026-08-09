import type { Meta, StoryObj } from "@storybook/react-vite"
import { Dropdown } from "@devrosui/react"

const meta = {
    title: "Dropdown",
    component: Dropdown,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const DropdownDev: Story = {
    args: {},
    render: () => {
        return (
        <Dropdown>
            <Dropdown.Header>
                Actions
            </Dropdown.Header>
            <Dropdown.List>
                <Dropdown.Option onClick={() => console.log('edit')}>
                    Edit file
                </Dropdown.Option>
                <Dropdown.Option onClick={() => console.log('rename')}>
                    Rename file
                </Dropdown.Option>
                <Dropdown.Option onClick={() => console.log('copy')}>
                    Copy file
                </Dropdown.Option>
                <Dropdown.Option onClick={() => console.log('delete')}>
                    Delete file
                </Dropdown.Option>
            </Dropdown.List>
        </Dropdown>
        )
    }
}