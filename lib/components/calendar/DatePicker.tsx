import React from "react"
import { LuCalendar } from "react-icons/lu"
import Calendar from "./Calendar"

// Datepicker component that lets the user select a date.
// The selected date is stored as string so it can be represented in the date input.
// Communication Datepicker <> Calendar.
// - Communication displays date as string in date input.
// - This date string is turned into a Date object and passed to Calendar
// - Calendar operates on this Date object.
// - When a date is selected via Calendar, the selected date as Date object is turned into a date string.
// - This date string is passed to DatePicker and displayed.
export default function DatePicker() {
    const [date, setDate] = React.useState<null | string>(null)
    const [openCalendar, setOpenCalendar] = React.useState<boolean>(false)

    function toggleCalendar() {
        setOpenCalendar(prev => !prev)
    }

    function handleChange(e) {
        const { value } = e.target
        setDate(value)
    }

    return (
        <div className="datepicker">
            <label htmlFor="datepicker">Date</label>
            <input
                type="date"
                id="datepicker"
                name="date"
                value={date}
                onChange={handleChange}
            />
            <button type="button" onClick={toggleCalendar} className="calendar-icon">
                <LuCalendar />
            </button>
            <Calendar 
                open={openCalendar}
                toggleOpen={toggleCalendar}
                date={date}
                setDate={setDate}
            />
        </div>
    )

}