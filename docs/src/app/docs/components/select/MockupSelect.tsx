"use client"

import { Select } from "@devrosui/react"
import React from "react"

// Mockup component that extracts the React-logic from the MDX file of Select to
// make the code example work.
export default function MockupSelect({
    name="select",
    options=[],
    label,
    multiple=false,
    placeholder=options[0] ?? "Select one",
    disabled=false
}) {
    const [mockupFormData, setMockupFormData] = React.useState({[name]: []})

    function mockupHandleChange(name: string, value: string | (string | number)[]) {
        setMockupFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
         <Select
            id={name}
            name={name}
            values={mockupFormData[name]}
            onSelect={mockupHandleChange}
            options={options}
            label={label}
            multiple={multiple}
            placeholder={placeholder}
            disabled={disabled}
        />
    )
}