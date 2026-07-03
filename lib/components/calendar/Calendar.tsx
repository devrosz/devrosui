"use client"

import React from "react"
import { FaChevronLeft } from "react-icons/fa6"
import { FaChevronRight } from "react-icons/fa6"
import { motion, AnimatePresence } from "motion/react"
import "./calendar.css"

type CalendarProps = {
    open: boolean,
    date: string,
    onSelect: (value: string) => void,
    minYear?: number,
    maxYear?: number,
    disabled?: Date[]
}

// Calendar component where the user can select a certain date.
// open: if true, the calendar will be displayed; otherwise not.
// toggleOpen: callback to toggle the open state.
// (optional)date: initial date as string in the format yyyy-mm-dd to be marked on the calendar.
// if no date has been given, the current date will be used.
// setDate: callback to set the marked Date.
export default function Calendar({open, date, onSelect, minYear, maxYear, disabled=[]}: CalendarProps) {
    const currentDate: Date = new Date()
    const [year, setYear] = React.useState<number>(currentDate.getFullYear())
    const [month, setMonth] = React.useState<number>(currentDate.getMonth())
    const selected: Date = date ? new Date(date) : currentDate
    
    // Object representing the months of the year with the amount
    // of days per month.
    // keys: monthnames
    // values: days that are in the month.
    const months: {[key:string]: number} = {
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

    // Sets the year of a given Date object to the new given
    // year and returns a new Date object with the new year.
    // Extends vanilla JS Date method 'setYear' because the
    // vanilla method returns a timestamp instead of a Date object.
    // With this helper function you don't have to create a new
    // instance of Date after every change.
    function changeYear(currentYear: Date, newYear: number): Date {
        if (
            minYear && maxYear &&
            (newYear < minYear || newYear > maxYear)
        ) {
            throw new Error(`Datepicker: year must be between ${minYear}-${maxYear}`)
        }
        const newDateTimestamp = currentYear.setFullYear(newYear)
        return new Date(newDateTimestamp)
    }

    // Checks if a given date is in the array of disabled dates.
    // Returns true if it is, otherwise false.
    function checkDisabledDay(year: number, month: number, day: number): boolean {
        if (disabled && disabled.length > 0) {
            const isInDisabled = (date: Date) => {
                const dateObj = new Date(date)
                return dateObj.getFullYear() === year && 
                        dateObj.getMonth() === month && 
                        dateObj.getDate() === day
            }
            return disabled.some(isInDisabled)
        }
        return false
    }

    // Returns an array of the short form of the days in a week
    // in the language of the user.
    // If the language of the user can't be inferred, a fallback to en-US
    // will be used.
    function getDayNames() {
        // June 2026 started on a monday.
        // Since we only care about the day names and Intl requires a date object,
        // we just pass in the first seven days of june 2026 to get the ascending
        // order of day names.
        const alignedDates = [
            "2026-06-1",
            "2026-06-2",
            "2026-06-3",
            "2026-06-4",
            "2026-06-5",
            "2026-06-6",
            "2026-06-7",
        ]

        return alignedDates.map(date => {
            const dateObj = new Date(date)
            const locale = navigator.language || "en-US"
            return new Intl.DateTimeFormat(locale, { weekday: "short"}).format(dateObj)
        })
    }

    // Returns the index of the first weekday of the given month
    // in the given year.
    function getFirstWeekdayOfMonth(year: number, month: number): number {
        const currentDate: number = Date.now()
        const date: number = changeYear(new Date(currentDate), year).setMonth(month)
        const daysInMonth = months[monthNames[month]]

        // Substract one day from the current day in the given month and year
        // until the day doesn't belong to the given month.
        const daysBack = [...Array(daysInMonth + 1).keys()].map(i => {
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

    // Constructs a date string in the format yyyy-mm-dd.
    function parseDate(year: number, month: number, day: number) {
        const dayOfMonthFormatted = day < 10 ? `0${day}` : day
        const monthFormatted = month < 10 ? `0${month}` : month
        return `${year}-${monthFormatted}-${dayOfMonthFormatted}`
    }

    return (
        <AnimatePresence>
            {open ? (
                <motion.div 
                    className="calendar-container"
                    initial={{y: -10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: -10, opacity: 0}}
                    transition={{duration: 0.2}}
                >
                    <div className="calendar-header">
                            <h5>{monthNames[month] + " " + year}</h5>
                        <div className="calendar-buttons">
                            <button 
                                onClick={decrementMonth} 
                                disabled={minYear != null && year <= minYear && month == 0}
                                className="calendar-set-month-button"
                            >
                                <FaChevronLeft />
                            </button>
                            <button 
                                onClick={incrementMonth}
                                disabled={maxYear != null && year >= maxYear && month == 11}
                                className="calendar-set-month-button"
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                {getDayNames().map(day => <td key={day}>{day}</td>)}
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
                                            // Account for situation where e.g. calendar is at july and july ends on a friday,
                                            // but user selects the saturday of this week (so 1st of august), then the correct
                                            // month should be passed to the handleSelect.
                                            // Is zero-indexed.
                                            const monthOfThisDay = !isFromPrevMonth && !isFromNextMonth ? month : (isFromPrevMonth ? month - 1 : month + 1)
                                            
                                            // Get selected date properties to mark the selected date if applicable.
                                            const selectedYear = selected.getFullYear()
                                            const selectedMonth = selected.getMonth()
                                            const selectedDay = selected.getDate()
                                            const isSelected = selectedYear === year && selectedMonth === monthOfThisDay && selectedDay === day
                                            
                                            // Check if date is already taken.
                                            const dateString = parseDate(year, monthOfThisDay + 1, day)
                                            const isInDisabled = disabled.length > 0 && checkDisabledDay(year, monthOfThisDay, day)

                                            return (
                                                <td key={day} className={"day-number " + (isSelected ? "selected" : "") + (isInDisabled ? "taken" : "")}>
                                                    <button 
                                                        className="day-button"
                                                        disabled={isFromPrevMonth || isFromNextMonth || isInDisabled}
                                                        onClick={() => onSelect(dateString)}
                                                    >
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
                </motion.div>

            ) : null}
        </AnimatePresence>
    )
}