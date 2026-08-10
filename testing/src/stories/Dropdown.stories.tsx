import type { Meta, StoryObj } from "@storybook/react-vite"
import { Dropdown } from "@devrosui/react"
import { AiOutlineEdit } from "react-icons/ai"
import { FiSave } from "react-icons/fi";
import { IoCopyOutline } from "react-icons/io5"
import { RiDeleteBinLine } from "react-icons/ri"

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
                   Save file
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

export const DropdownDanger: Story = {
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
                   Save file
                </Dropdown.Option>
                <Dropdown.Option onClick={() => console.log('copy')}>
                    Copy file
                </Dropdown.Option>
                <Dropdown.Option onClick={() => console.log('delete')} isDangerous={true}>
                    Delete file
                </Dropdown.Option>
            </Dropdown.List>
        </Dropdown>
        )
    }
}

export const DropdownIcons: Story = {
    args: {},
    render: () => {
        return (
        <Dropdown>
            <Dropdown.Header>
                Actions
            </Dropdown.Header>
            <Dropdown.List>
                <Dropdown.Option onClick={() => console.log('edit')}>
                    <AiOutlineEdit />
                    Edit file
                </Dropdown.Option>
                <Dropdown.Option onClick={() => console.log('rename')}>
                    <FiSave />
                   Save file
                </Dropdown.Option>
                <Dropdown.Option onClick={() => console.log('copy')}>
                    <IoCopyOutline />
                    Copy file
                </Dropdown.Option>
                <Dropdown.Option onClick={() => console.log('delete')} isDangerous={true}>
                    <RiDeleteBinLine />
                    Delete file
                </Dropdown.Option>
            </Dropdown.List>
        </Dropdown>
        )
    }
}