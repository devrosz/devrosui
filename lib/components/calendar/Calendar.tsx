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
        const daysInMonth = months[monthNames[month]]

        // Substract one day from the current day in the given month and year
        // until the day doesn't belong to the given month.
        const daysBack = [...Array(daysInMonth).keys()].map(i => {
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

    // Returns an array containing the days of the month for the first week of a given
    // month in a given year.
    // E.g:
    // [28, 29, 30, 31, 1, 2, 3] -> this month started on a friday.
    // [1, 2, 3, 4, 5, 6, 7] -> this month started on a monday.
    function getFirstWeekOfMonth(year: number, month: number) {
        const firstWeekdayOfMonth: number = getFirstWeekdayOfMonth(year, month)
        const daysInMonth = months[monthNames[month]]

        // Fill days from previous month.
        const prevMonth = [...Array(firstWeekdayOfMonth).keys()].map(i => {
            return daysInMonth - firstWeekdayOfMonth + i + 1
        })

        // Fill days from current month.
        const currentMonth = [...Array(7 - firstWeekdayOfMonth).keys()].map(i => {
            return i + 1
        })
        return prevMonth.concat(currentMonth)
    }

    // Fill in day number of month for every week.
    // Days from previous month and next month included.
    // E.g: [[28, 29, 30, 31, 1, 2, 3],[4, 5, 6, 7, 8, 9, 10],...,[26, 27, 28, 29, 30, 31, 1]]
    function populateMonth(year: number, month: number): number[][] {
        const daysInNextMonth = months[monthNames[month + 1]]
        const firstWeek = getFirstWeekOfMonth(year, month)
        const secondWeek = [...Array(7).keys()].map(i => {
            return firstWeek[6] + i + 1
        })
        const thirdWeek = [...Array(7).keys()].map(i => {
            return secondWeek[6] + i + 1
        })
        const fourthWeek = [...Array(7).keys()].map(i => {
            return thirdWeek[6] + i + 1
        })
        const fifthWeek = [...Array(7).keys()].map(i => {
            return (fourthWeek[6] + i + 1) % daysInNextMonth + 1
        })
        return [firstWeek, secondWeek, thirdWeek, fourthWeek, fifthWeek]
    }

    console.log(populateMonth(2024, 1))

    return (
        <h1>Calendar</h1>
    )
}