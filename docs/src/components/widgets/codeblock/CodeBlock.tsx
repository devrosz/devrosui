"use client"

import React from "react"
import { codeToHtml } from "shiki"
import "./codeblock.css"
import CopyButton from "../copybutton/CopyButton"

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

    const [error, setError] = React.useState<string>("test")
    const [highlightedCode, setHighlightedCode] = React.useState<string>("")
    const documentClassList = document?.documentElement.classList || null
    const theme = documentClassList?.contains("light") ? "light" : "dark"

    console.log(theme)
    React.useEffect(() => {
        let mounted: boolean = true
        async function highlightCode() {
            try {
                setError("")
                const html = await codeToHtml(code, {
                    lang: language.trim().toLowerCase(),
                    theme: theme && theme === "light" ? "vitesse-light" : "vitesse-black"
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

    }, [code, language, theme])

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
                    <div 
                        dangerouslySetInnerHTML={{__html: highlightedCode}}
                        className="highlighted-code"
                    ></div>
                }
                <CopyButton code={code} />
            </div>
        </div>
    )
}