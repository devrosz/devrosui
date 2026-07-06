"use client"

import { DatePicker } from "@devrosui/react"
import React from "react"

// Mockup component that extracts the React-logic from the MDX file of Datepicker to
// make the code example work.
export default function MockupDatePicker({
    date="",
    minYear=undefined,
    maxYear=undefined,
    disabledDays=[],
    disabled=false
}) {
    const [mockupFormData, setMockupFormData] = React.useState({date: date})

    function mockupHandleChange(name: string, value: string) {
        setMockupFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
         <DatePicker
            id="datepicker"
            name="date"
            date={mockupFormData.date}
            onChange={mockupHandleChange}
            minYear={minYear}
            maxYear={maxYear}
            disabled={disabled}
            disabledDays={disabledDays}
        />
    )
}