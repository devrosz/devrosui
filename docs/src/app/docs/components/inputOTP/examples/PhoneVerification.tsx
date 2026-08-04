"use client"

import { InputOTP } from "@devrosui/react"

export default function PhoneVerification({allowNumbers=true, allowLetters=true}) {
    return (
        <InputOTP 
                label="Verification"
                description="We have sent a verification code to +31 ******27. Enter the code below."
                allowLetters={allowLetters}
                allowNumbers={allowNumbers}
            >
                <InputOTP.Slot index={0} />
                <InputOTP.Slot index={1} />
                <InputOTP.Slot index={2} />
                <InputOTP.Slot index={3} />
            </InputOTP>
    )
}