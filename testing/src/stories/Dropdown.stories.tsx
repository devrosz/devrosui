import type { Meta, StoryObj } from "@storybook/react-vite"
import { Dropdown } from "@devrosui/react"
import { AiOutlineEdit } from "react-icons/ai"
import { FiSave } from "react-icons/fi"
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
    args: {children: ""},
    render: () => {
        return (
        <Dropdown>
            <Dropdown.Header>
                Actions
            </Dropdown.Header>
            <Dropdown.List>
                <Dropdown.Item>
                    Edit file
                </Dropdown.Item>
                <Dropdown.Item>
                   Save file
                </Dropdown.Item>
                <Dropdown.Item>
                    Copy file
                </Dropdown.Item>
                <Dropdown.Item>
                    Delete file
                </Dropdown.Item>
            </Dropdown.List>
        </Dropdown>
        )
    }
}

export const DropdownDanger: Story = {
    args: {children: ""},
    render: () => {
        return (
        <Dropdown>
            <Dropdown.Header>
                Actions
            </Dropdown.Header>
            <Dropdown.List>
                <Dropdown.Item>
                    Edit file
                </Dropdown.Item>
                <Dropdown.Item>
                   Save file
                </Dropdown.Item>
                <Dropdown.Item>
                    Copy file
                </Dropdown.Item>
                <Dropdown.Item isDangerous={true}>
                    Delete file
                </Dropdown.Item>
            </Dropdown.List>
        </Dropdown>
        )
    }
}

export const DropdownIcons: Story = {
    args: {children: ""},
    render: () => {
        return (
        <Dropdown>
            <Dropdown.Header>
                Actions
            </Dropdown.Header>
            <Dropdown.List>
                <Dropdown.Item>
                    <AiOutlineEdit />
                    Edit file
                </Dropdown.Item>
                <Dropdown.Item>
                    <FiSave />
                   Save file
                </Dropdown.Item>
                <Dropdown.Item>
                    <IoCopyOutline />
                    Copy file
                </Dropdown.Item>
                <Dropdown.Item isDangerous={true}>
                    <RiDeleteBinLine />
                    Delete file
                </Dropdown.Item>
            </Dropdown.List>
        </Dropdown>
        )
    }
}