"use client"

import { InputOTP } from "@devrosui/react"
import React from "react"

export default function OnError() {

    const [error, setError] = React.useState<string>("")

    function handleSubmit() {
        setError("An unexpected error has occured. Please try again later")
    }

    return (
        <InputOTP
            onSubmit={handleSubmit}
            errorMessage={error}
        >
            <InputOTP.Label>Verification</InputOTP.Label>
            <InputOTP.Description>
                We have sent a code to j***@mail.com.
                Enter the code below.
            </InputOTP.Description>
            <InputOTP.Slot index={0} />
            <InputOTP.Slot index={1} />
            <InputOTP.Slot index={2} />
            <InputOTP.Separator />
            <InputOTP.Slot index={3} />
            <InputOTP.Slot index={4} />
            <InputOTP.Slot index={5} />
        </InputOTP>
    )

}