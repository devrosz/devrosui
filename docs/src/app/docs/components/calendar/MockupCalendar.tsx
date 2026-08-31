"use client"

import { Calendar } from "@devrosui/react"
import React from "react"

// Mockup component that extracts the React-logic from the MDX file of Calendar to
// make the code example work.
export default function MockupCalendar({
    minYear=undefined,
    maxYear=undefined,
    disabledDays=[],
}) {

    return (
        <Calendar
            minYear={minYear}
            maxYear={maxYear}
            disabledDays={disabledDays}

        />
    )
}