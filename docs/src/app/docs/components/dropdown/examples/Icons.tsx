"use client"

import { Dropdown } from "@devrosui/react"
import { AiOutlineEdit } from "react-icons/ai"
import { FiSave } from "react-icons/fi"
import { IoCopyOutline } from "react-icons/io5"
import { RiDeleteBinLine } from "react-icons/ri"

export default function Icons() {
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