import React from "react"
import Calendar from "./Calendar"

export default function DatePicker() {
    const [date, setDate] = React.useState<null | string>(null)
    const [openCalendar, setOpenCalendar] = React.useState<boolean>(false)

    function toggleCalendar() {
        setOpenCalendar(prev => !prev)
    }

    function handleChange(e) {
        const { value } = e.targt
        setDate(value)
    }

    // Parses Date object received from Calendar into datestring
    // to be represented in the date input.
    // date: Date object received from Calendar.tsx.
    function parseDate(date: Date) {
        const dayOfMonth = date.getDate()
        // Apply offset because getMonth is zero-indexed.
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const dayOfMonthFormatted = dayOfMonth < 10 ? `0${dayOfMonth}` : dayOfMonth
        const monthFormatted = month < 10 ? `0${month}` : month
        return `${year}-${monthFormatted}-${dayOfMonthFormatted}`
    }

    return (
        <div className="datepicker">
            <label htmlFor="datepicker">Date</label>
            <input
                type="date"
                id="datepicker"
                name="date"
                value={date ? parseDate(date) : null}
                onChange={handleChange}
            />
            <button type="button" onClick={toggleCalendar}>Open</button>
            <Calendar open={openCalendar} toggleOpen={toggleCalendar} date={date} setDate={setDate} />
        </div>
    )

}