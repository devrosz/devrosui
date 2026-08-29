"use client"

import React from "react"
import "./slider.css"

// id, name: id and name of the range input.
// min, max: minimum and maximum value that the range input can hold.
// value: holds the value after the user stopped sliding.
// setValue: callback function to update the value in the parent component.
// step: step size of the slider.
// showValue: toggles showing the live value while sliding.
// label: label for the range input.
// description: short paragraph explaining what is expected from the user.
// width: sets the width of the range input.
// unit: unit to be displayed next to the live value.
type SliderProps = {
    id: string,
    name: string,
    min: string,
    max: string,
    value?: string, // optional because it is only necessary if the user wants the parent to get the value.
    setValue?: (arg0: string) => void, // optional because it is only necessary if the user wants the parent to get the value.
    required?: boolean,
    disabled?: boolean,
    step?: string,
    showValue?: boolean,
    label?: string,
    description?: string,
    width?: string,
    unit?: string
}

// Styled range input that shows the slide progress as well as the live value.
// The progress is implemented with a div that overlays the track.
// Notices:
// - Mockup thumb
// Because z-indices can't be applied to the native range input,
// the progress bar overlays the native thumb.
// To fix this, I've created a mockup thumb which overlays the progress bar on the
// spot where the thumb is positioned under the progressbar to make the thumb visible.
// With other words, the thumb that the user sees is a mockup thumb which mirrors the
// functionality of the native thumb.
// - Difference value and liveValue
// The value of the range input is passed to the parent component via setValue,
// This only happens when the user lets go of the range input indicating end of sliding event.
// This prevents performance issues where the value is passed to parent every second during sliding
// causing lag.
// The realtime value while sliding is hold in liveValue and is NOT being sent to the parent.
export default function Slider({
    id,
    name,
    min="0",
    max="100",
    value,
    setValue,
    required=false,
    disabled=false,
    step="1",
    showValue=true,
    label="",
    description="",
    width="15rem",
    unit=""
}: SliderProps) {

    if (value && !setValue) {
        console.warn(
            `Slider: value has been given but setValue is undefined. Slider is now unable to change the value in the parent component.`
        )
    }

    // Live value used to display the realtime value above the input.
    const [liveValue, setLiveValue] = React.useState<string>(value ?? min)

    // Updates the realtime value while sliding.
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setLiveValue(e.target.value)
    }

    // Calculates how far the thumb is on the track in percentages.
    function calcProgress() {
        return ((Number(liveValue) - Number(min)) / (Number(max) - Number(min))) * 100
    }

    // Sends the current value of the range input to the parent when the user
    // stopped sliding.
    function handlePointerUp() {
        if (setValue) {
            setValue(liveValue)
        }
    }

    return (
        <div className="slider-container" style={{width: width}}>
            <div className="slider-header">
                {label && <label htmlFor={id}>{label}</label>}
                {showValue && 
                    <output htmlFor={id} name={name}>
                        {unit ? `${unit} ${liveValue}` : liveValue}
                    </output>
                }
            </div>
            {description && <p>{description}</p>}
            <div className="slider-input-container">
                {/* Progress bar */}
                <div 
                    className="slider-progress"
                    // Math.max(..., 12) to compensate for thumb width.
                    style={{width: `${Math.max(calcProgress(), 10)}%`}}>
                    {/* Mockup thumb */}
                    <div 
                        className={"slider-mockup-thumb " + (disabled ? "disabled" : "")}>
                    </div>
                </div>
                <input
                    type="range"
                    id={id}
                    name={name}
                    min={min}
                    max={max}
                    value={liveValue}
                    step={step}
                    onChange={handleChange}
                    onPointerUp={handlePointerUp}
                    required={required}
                    disabled={disabled}
                />
            </div>
        </div>
    )
}