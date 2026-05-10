"use client"

import React from "react"
import Tooltip from "../tooltip/Tooltip"
import { BiCopy } from "react-icons/bi"
import { FaCheck } from "react-icons/fa6"
import "./copybutton.css"

type CopyButtonProps = {
    code: string
}

// Button that copies the code from the codeblock to
// the user's clipboard.
// This icon is supposed to be used in the CodeBlock component only
// because of the hardcoded absolute position.
export default function CopyButton({code}: CopyButtonProps) {

    const [isCopied, setIsCopied] = React.useState<boolean>(false)

    async function copy() {
        try {
            setIsCopied(prev => !prev)
            await navigator.clipboard.writeText(code)

            setTimeout(() => {
                setIsCopied(prev => !prev)
            }, 1000)
    
        } catch(e) {
            const errorMsg: string =
                e instanceof Error ? e.message
                : "An unexpected error has occured"
            throw new Error(errorMsg)
        }
    }

    return (
        <div className="copy-button-container">
            <Tooltip tip={isCopied ? "" : "Copy"}>
                <button
                    className="copy-button"
                    onClick={copy}
                    disabled={isCopied}
                >
                    {isCopied 
                        ? <FaCheck className="copy-button-icon" />
                        : <BiCopy className="copy-button-icon" />
                    }
                </button>
            </Tooltip>
        </div>
    )
}