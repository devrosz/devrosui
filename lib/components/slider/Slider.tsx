"use client"

import React from "react"
import "./slider.css"

type SliderProps = {
    id: string,
    name: string,
    min: string,
    max: string,
    initValue?: string,
    step?: string,
    showValue?: boolean,
    label?: string,
    description?: string,
    width?: string
}

export default function Slider({
    id,
    name,
    min="0",
    max="100",
    initValue="0",
    step="1",
    showValue=true,
    label="",
    description="",
    width="15rem"
}: SliderProps) {

    const [value, setValue] = React.useState<string>(initValue)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setValue(e.target.value)
        console.log(calcProgress())
    }

    function calcProgress() {
        return ((Number(value) - Number(min)) / (Number(max) - Number(min))) * 100
    }

    return (
        <div className="slider-container" style={{width: width}}>
            <div className="slider-header">
                {label && <label htmlFor={id}>{label}</label>}
                {showValue && 
                    <output htmlFor={id} name={name}>
                        {value}
                    </output>
                }
            </div>
            <div className="slider-input-container">
                <div 
                    className="slider-progress"
                    style={{width: `${Math.max(calcProgress(), 13)}%`}}>
                    <div className="slider-mockup-thumb"></div>
                </div>
                <input
                    type="range"
                    id={id}
                    name={name}
                    min={min}
                    max={max}
                    value={value}
                    step={step}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}