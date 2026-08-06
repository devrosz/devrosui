"use client"

import { InputOTP } from "@devrosui/react"

export default function PINVerification({disabled=false}) {
    return (
        <InputOTP>
            <InputOTP.Label>Enter PIN</InputOTP.Label>
            <InputOTP.Form 
                inputLength={4}
                allowLetters={false}
                disabled={disabled}
            >
                    <InputOTP.Slot index={0} />
                    <InputOTP.Slot index={1} />
                    <InputOTP.Slot index={2} />
                    <InputOTP.Slot index={3} />
                </InputOTP.Form>
        </InputOTP>
    )
}