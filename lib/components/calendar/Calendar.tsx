"use client"

import React from "react"

export default function Calendar() {

    const currentDate = new Date()
    const [year, setYear] = React.useState<number>(currentDate.getFullYear())
    const [month, setMonth] = React.useState<number>(currentDate.getMonth())

    // Object representing the months of the year with the amount
    // of days per month.
    // keys: monthnames
    // values: days that are in the month.
    const months = {
        "january": 31,
        "february": year && year % 4 == 0 ? 29 : 28,
        "march": 31,
        "april": 30,
        "may": 31,
        "june": 30,
        "july": 31,
        "august": 31,
        "september": 30,
        "october": 31,
        "november": 30,
        "december": 31 
    }
    const monthNames: string[] = Object.keys(months)
    const dayNames: string[] = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    
    // Sets the month of a given Date object to the new given
    // month and returns a new Date object with the new month.
    // Extends vanilla JS Date method 'setMonth' because the
    // vanilla method returns a timestamp instead of a Date object.
    // With this helper function you don't have to create a new
    // instance of Date after every change.
    function changeMonth(currentDate: Date, newMonth: number): Date {
        const newDateTimestamp = currentDate.setMonth(newMonth)
        return new Date(newDateTimestamp)
    }

    // Sets the year of a given Date object to the new given
    // year and returns a new Date object with the new year.
    function changeYear(currentYear: Date, newYear: number): Date {
        const newDateTimestamp = currentYear.setFullYear(newYear)
        return new Date(newDateTimestamp)
    }

    // Returns the index of the first weekday of the given month
    // in the given year.
    function getFirstWeekdayOfMonth(year: number, month: number): number {
        const currentDate: number = Date.now()
        const date: number = changeYear(new Date(currentDate), year).setMonth(month)

        // Substract one day from the current day in the given month and year
        // until the day doesn't belong to the given month.
        const daysBack = [...Array(30).keys()].map(i => {
            // 1000 * 3600 * 24 = #milliseconds in a day and i is #days to be substracted.
            const prevDayTimestamp: number = date - (1000 * 3600 * 24 * i)
            const prevDay: Date = new Date(prevDayTimestamp)

            // Only save the day of the week if it is outside the given month.
            // Because there is no way to break through .map and for loops are illegal in React.
            if (prevDay.getMonth() != month) {
                return prevDay.getDay()
            } else {
                return -1
            }
        })

        // First value to be not -1 is the first saved day outside the month.
        return daysBack.filter((x) => x > -1)[0]
    }

    function getFirstWeekOfMonth(year: number, month: number) {
        const firstWeekdayOfMonth: number = getFirstWeekdayOfMonth(year, month)
        const prevDays = [...Array(7 - firstWeekdayOfMonth + 1).keys()].map(i => {
            return 31 - firstWeekdayOfMonth + i + 1
        })
        const currentDays = [...Array(7 - firstWeekdayOfMonth).keys()].map(i => {
            return i + 1
        })
        return prevDays.concat(currentDays)
    }

    console.log(getFirstWeekOfMonth(2026, 5))

    return (
        <h1>Calendar</h1>
    )
}