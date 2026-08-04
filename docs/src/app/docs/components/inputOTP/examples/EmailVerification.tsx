"use client"

import { InputOTP } from "@devrosui/react"

export default function EmailVerification({onSubmit=null, autoSubmit=true}) {
    return (
        <InputOTP>
            <InputOTP.Label>Verification</InputOTP.Label>
            <InputOTP.Description>
                We have sent a code to j***@mail.com. 
                Enter the code below.
            </InputOTP.Description>
            <InputOTP.Form
                    onSubmit={onSubmit === "log" ? () => console.log("Submitted!") : () => {}}
                    autoSubmit={autoSubmit}
                >
                    <InputOTP.Slot index={0} />
                    <InputOTP.Slot index={1} />
                    <InputOTP.Slot index={2} />
                    <InputOTP.Separator />
                    <InputOTP.Slot index={3} />
                    <InputOTP.Slot index={4} />
                    <InputOTP.Slot index={5} />
                </InputOTP.Form>
        </InputOTP>
    )
}