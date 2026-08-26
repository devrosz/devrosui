
"use client"

import { Select } from "@devrosui/react"
import React from "react"

export default function WrapperSelect() {

    const [selection, setSelection] = React.useState<string[]>([])

    function handleChange(_: string, value: string) {
        setSelection([value])
    }

    return (
        <Select 
            id="select" 
            name="select"
            values={selection}
            onSelect={handleChange}
            options={[
                "Volkswagen",
                "Audi",
                "Mercedes",
                "BMW"
            ]}
            placeholder="Choose an option"
            label="Select"
        />
    )
}
