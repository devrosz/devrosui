"use client"

import React from "react"
import { codeToHtml } from "shiki"
import CopyButton from "../copybutton/CopyButton"
import { useTheme } from "@/utils/ThemeProvider"
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
    const themeContext = useTheme()
    const [highlightedCode, setHighlightedCode] = React.useState<string>("")
    // const [theme, setTheme] = React.useState<"dark" | "light">("dark")

    // // Listen to theme toggle.
    // React.useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         const documentClassList = document?.documentElement.classList || null
    //         setTheme(documentClassList?.contains("light") ? "light" : "dark")
    //     }
    // }, [])

    // Highlight code and style the background in contrast to theme of the app.
    // I.e. if app is in dark mode -> highlighted code background should also be dark.
    // Vica versa.
    React.useEffect(() => {
        let mounted: boolean = true
        async function highlightCode() {
            try {
                setError("")
                const html = await codeToHtml(code, {
                    lang: language.trim().toLowerCase(),
                    theme: themeContext.theme === "light" 
                    ? "vitesse-light" 
                    : "vitesse-black"
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

    }, [code, language, themeContext.theme])

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