"use client"

import { InputOTP } from "@devrosui/react"

export default function PhoneVerification({allowNumbers=true, allowLetters=true}) {
    return (
        <InputOTP 
                allowLetters={allowLetters}
                allowNumbers={allowNumbers}
            >
                <InputOTP.Label>Verification</InputOTP.Label>
                <InputOTP.Description>
                    We have sent a code to +31 ******27.
                    Enter the code below.
                </InputOTP.Description>
                <InputOTP.Slot index={0} />
                <InputOTP.Slot index={1} />
                <InputOTP.Slot index={2} />
                <InputOTP.Slot index={3} />
            </InputOTP>
    )
}