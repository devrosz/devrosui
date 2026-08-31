"use client"

import { Select } from "@devrosui/react"
import React from "react"

type MockupSelectProps = {
    name: string,
    options: (string | number)[],
    label?: string,
    multiple?: boolean,
    placeholder?: string | number,
    disabled?: boolean,
    description?: string
}

type MockupFormData = {
    [key: string]: (string | number)[]
}

// Mockup component that extracts the React-logic from the MDX file of Select to
// make the code example work.
export default function MockupSelect({
    name="select",
    options=[],
    label,
    multiple=false,
    placeholder=options[0] ?? "Select one",
    disabled=false,
    description=""
}: MockupSelectProps) {
    const [mockupFormData, setMockupFormData] = React.useState<MockupFormData>({[name]: []})

    function mockupHandleChange(name: string, value: (string | number)[]) {
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
            description={description}
        />
    )
}