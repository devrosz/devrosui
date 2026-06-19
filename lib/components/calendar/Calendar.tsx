"use client"

import React from "react"
import "./calendar.css"

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

    // Selects next month.
    // If the current month is december, the month will be set to january
    // and the year is incremented.
    function incrementMonth() {
        setMonth(prev => {
            const newValue = prev + 1
            if (newValue > 11) {
                setYear(prev => prev + 1)
                return 0
            }
            return newValue
        })
    }

    // Selects the previous month.
    // If the current month is january, the month will be set to december
    // and the year is decremented.
    function decrementMonth() {
        setMonth(prev => {
            const newValue = prev - 1
            if (newValue < 0) {
                setYear(prev => prev - 1)
                return 11
            }
            return newValue
        })
    }

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
        const daysInPrevMonth = months[monthNames[month == 0 ? 11 : month - 1]]

        // Fill days from previous month.
        const prevMonth = [...Array(firstWeekdayOfMonth).keys()].map(i => {
            return daysInPrevMonth - firstWeekdayOfMonth + i + 1
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
        const daysCurrentMonth = months[monthNames[month]]
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
            // We detect if a day belongs to next month by modulo daysCurrentMonth + 1
            // such that e.g. 31 % 32 = 31 and 32 % 32 = 0.
            // Because 0 is not a valid day in the month, we increment all days in this
            // last week which are below 7 with 1 to compensate the offset.
            // We chose 7 as upperbound because if the number is larger, it would mean
            // that in the fourthweek the month ended which cannot be true because then
            // the month has too less days.
            const calculatedValue = (fourthWeek[6] + i + 1) % (daysCurrentMonth + 1)
            return calculatedValue <= 7 ? calculatedValue + 1 : calculatedValue
        })
        return [firstWeek, secondWeek, thirdWeek, fourthWeek, fifthWeek]
    }

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                    <h4>{monthNames[month] + " " + year}</h4>
                <div className="calendar-buttons">
                    <button onClick={decrementMonth}>{"<"}</button>
                    <button onClick={incrementMonth}>{">"}</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        {dayNames.map(day => <td key={day}>{day.slice(0,3)}</td>)}
                    </tr>
                </thead>
                <tbody>
                    {populateMonth(year, month).map((week, i) => {
                        return (
                            <tr key={i}>
                                {week.map(day => {
                                    // Give the days from another month a different color.
                                    const daysPrevMonth = months[monthNames[month == 0 ? 11 : month - 1]]
                                    const isFromPrevMonth = i == 0 && day <= daysPrevMonth && day > 7
                                    const isFromNextMonth = i == 4 && day >= 1 && day <= 7

                                    return (
                                        <td key={day}>
                                            <button className={"day-button " + (isFromPrevMonth || isFromNextMonth ? "outlier" : "")}>
                                                {day}
                                            </button>
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}