"use client"

import { InputOTP } from "@devrosui/react"
import React from "react"
import { useId } from "react"

type ErrorObj = {
    message: string,
    key: string
}

export default function OnError() {

    const [error, setError] = React.useState<ErrorObj | null>(null)
    const errorkey = useId()

    function handleSubmit() {
        setError({
            message: "An unexpected error has occured. Please try again later",
            key: errorkey
        })
    }

    return (
        <InputOTP>
            <InputOTP.Label>Verification</InputOTP.Label>
            <InputOTP.Description>
                We have sent a code to j***@mail.com.
                Enter the code below.
            </InputOTP.Description>
            <InputOTP.Form
                inputLength={6}
                onSubmit={handleSubmit}
                errorMessage={error}
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