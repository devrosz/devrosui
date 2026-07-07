import React from "react"
import { LuCalendar } from "react-icons/lu"
import DatePickerCalendar from "./DatePickerCalendar"

// minYear: minimum year that can be set.
// maxYear: maximum year that can be set.
// disabledDays: array of Date objects representing dates that cannot be selected.
// id: id of the date input.
// name: name of the date input.
// date: datevalue for the date input.
// onChange: callback function to change the date input.
// - This callback function can be a general form handleChange function which receives
// - the name of the input as well as the value for the input.
// required: boolean indicating whether filling in this input is required for submission.
// disabled: boolean indicating whether usage of date input is disabled.
type DatePickerProps = {
    minYear?: number | undefined,
    maxYear?: number | undefined,
    disabledDays?: Date[] | null,
    id: string,
    name: string,
    date: string,
    onChange: (name: string, value: string) => void,
    required?: boolean,
    disabled?: boolean
}

// Datepicker component that lets the user select a date.
// The selected date is stored as string so it can be represented in the date input.
// Communication Datepicker <-> Calendar:
// - Communication displays date as string in date input.
// - This date string is turned into a Date object and passed to Calendar
// - Calendar operates on this Date object.
// - When a date is selected via Calendar, the selected date as Date object is turned into a date string.
// - This date string is passed to DatePicker and displayed.
export default function DatePicker({
    minYear=undefined,
    maxYear=undefined,
    disabledDays=[],
    id="datepicker",
    name="datepicker",
    date="",
    onChange,
    required=true,
    disabled=false
}: DatePickerProps) {
    const [openCalendar, setOpenCalendar] = React.useState<boolean>(false)

    // Opens/closes the calendar UI.
    function toggleCalendar() {
        setOpenCalendar(prev => !prev)
    }

    // Receives the selected date from the calendar UI and updates
    // the value in the date input.
    // Side-effect: also closes the Calendar UI.
    function handleCalendarSelect(value: string): void {
        if (!value || typeof value != "string") {
            throw new Error("Datepicker: invalid date")
        }
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
                value={date}
                onChange={(e) => onChange(name, e.target.value)}
                min={minYear}
                max={maxYear}
                required={required}
                disabled={disabled}
            />
            <button 
                type="button"
                onClick={toggleCalendar}
                className="calendar-icon"
                disabled={disabled}
            >
                <LuCalendar />
            </button>
            <DatePickerCalendar 
                open={openCalendar}
                date={date}
                onSelect={handleCalendarSelect}
                minYear={minYear}
                maxYear={maxYear}
                disabledDays={disabledDays}
            />
        </div>
    )

}