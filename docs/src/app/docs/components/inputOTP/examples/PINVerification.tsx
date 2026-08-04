"use client"

import { InputOTP } from "@devrosui/react"

export default function PINVerification({disabled=false}) {
    return (
         <InputOTP allowLetters={false} disabled={disabled}>
                <InputOTP.Label>Enter PIN</InputOTP.Label>
                <InputOTP.Slot index={0} />
                <InputOTP.Slot index={1} />
                <InputOTP.Slot index={2} />
                <InputOTP.Slot index={3} />
            </InputOTP>
    )
}