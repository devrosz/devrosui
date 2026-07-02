import React from "react"
import { LuCalendar } from "react-icons/lu"
import Calendar from "./Calendar"

type DatePickerProps = {
    minYear?: number,
    maxYear?: number,
    disabled?: Date[],
    id: string,
    name: string,
    value: string | null,
    onChange: (name: string, value: string) => void
}

// Datepicker component that lets the user select a date.
// The selected date is stored as string so it can be represented in the date input.
// Communication Datepicker <> Calendar.
// - Communication displays date as string in date input.
// - This date string is turned into a Date object and passed to Calendar
// - Calendar operates on this Date object.
// - When a date is selected via Calendar, the selected date as Date object is turned into a date string.
// - This date string is passed to DatePicker and displayed.
export default function DatePicker({
    minYear,
    maxYear,
    disabled=[],
    id="datepicker",
    name="datepicker",
    value,
    onChange
}: DatePickerProps) {
    const [openCalendar, setOpenCalendar] = React.useState<boolean>(false)

    function toggleCalendar() {
        setOpenCalendar(prev => !prev)
    }

    function handleCalendarSelect(value: string): void {
        onChange(name, value)
        toggleCalendar()
    }

    return (
        <div className="datepicker">
            <label htmlFor={id}>Date</label>
            <input
                type="date"
                id={id}
                name={name}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
            />
            <button type="button" onClick={toggleCalendar} className="calendar-icon">
                <LuCalendar />
            </button>
            <Calendar 
                open={openCalendar}
                date={value}
                onSelect={handleCalendarSelect}
                minYear={minYear}
                maxYear={maxYear}
                disabled={disabled}
            />
        </div>
    )

}