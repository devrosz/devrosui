"use client"

import React from "react"
import { BiCopy } from "react-icons/bi"
import { FaCheck } from "react-icons/fa6"
import { codeToHtml } from "shiki"
import IconButton from "../iconbutton/IconButton"
import "./codeblock.css"

type CodeBlockProps = {
    language: string,
    code: string,
    height?: string,
    width?: string
}


// Renders a code display block where highlighted code can be displayed and copied.
// language: programming language to be displayed.
// code: code to be displayed
// heigth: height of the codeblock container.
// width: width of the codeblock container.
export default function CodeBlock({language, code, height="100%", width="100%"}: CodeBlockProps) {

    const [error, setError] = React.useState<string>("")
    const [isCopied, setIsCopied] = React.useState<boolean>(false)
    const [highlightedCode, setHighlightedCode] = React.useState<string>("")

    React.useEffect(() => {
        let mounted: boolean = true
        async function highlightCode() {
            try {
                setError("")
                const html = await codeToHtml(code, {
                    lang: language,
                    theme: "vitesse-dark"
                })

                if (mounted) {
                    setHighlightedCode(html)
                }

            } catch(e) {
                const errorMsg: string = 
                    e instanceof Error 
                    ? e.message
                    : "An unexpected error has occured"
                setError(errorMsg)
            }
        }
       highlightCode()

       return () => {
        mounted = false
       }

    }, [code, language])

    async function copyCode() {
        setIsCopied(prev => !prev)
        await navigator.clipboard.writeText(code)
        setTimeout(() => {
            setIsCopied(prev => !prev)
        }, 1000)
    }

    return (
        <div className="codeblock">
            <div className="codeblock-header">
               <h5>{language}</h5> 
            </div>
            <div className="codeblock-content" style={{height: height, width: width}}>
                {error ? (
                    <div className="codeblock-error">
                        <p>{error}</p>
                    </div>
                    ) :
                    <code>{highlightedCode}</code>
                }
                 <IconButton 
                    icon={isCopied ? <FaCheck /> : <BiCopy />}
                    tip={isCopied ? "" : "Copy"}
                    className="codeblock-icon"
                    disabled={isCopied}
                    handler={copyCode} 
                />
            </div>
        </div>
    )
}