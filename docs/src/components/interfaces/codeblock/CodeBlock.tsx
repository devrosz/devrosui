"use client"

import React from "react"
import { codeToHtml } from "shiki"
import CopyButton from "../copybutton/CopyButton"
import { useTheme } from "@/lib/ThemeProvider"
import "./codeblock.css"

type CodeBlockProps = {
    langHighlight: string,
    langDisplay?: string,
    fileName?: string,
    code: string,
    height?: string,
    width?: string
}

// Renders a code display block where highlighted code can be displayed and copied.
// langHighlight: programming language to be highlighted.
// langDisplay: programming language to be displayed above code block.
// fileName: name of the file in which the displayed code is ought to be written.
// code: code to be displayed
// heigth: height of the codeblock container.
// width: width of the codeblock container.
export default function CodeBlock({
    langHighlight,
    langDisplay=langHighlight,
    fileName,
    code,
    height="100%", width="100%"
}: CodeBlockProps) {

    const [error, setError] = React.useState<string>("")
    const themeContext = useTheme()
    const [highlightedCode, setHighlightedCode] = React.useState<string>("")

    // Highlight code and style the background in contrast to theme of the app.
    // I.e. if app is in dark mode -> highlighted code background should also be dark.
    // Vica versa.
    React.useEffect(() => {
        let mounted: boolean = true
        async function highlightCode() {
            try {
                setError("")
                const html = await codeToHtml(code, {
                    lang: langHighlight.trim().toLowerCase(),
                    theme: themeContext.theme === "light" 
                    ? "vitesse-light" 
                    : "vitesse-black",
                    colorReplacements: {
                        "#000": "#090909",
                        "#ffffff": "#efefef"
                    }
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

    }, [code, langHighlight, themeContext.theme])

    return (
        <div className="codeblock">
            <div className="codeblock-langdisplay">
               <h5>{langDisplay}</h5>
            </div>
            <div className="codeblock-content" style={{height: height, width: width}}>
                {fileName ? (
                    <div className="codeblock-header">
                        <code>{fileName}</code>
                    </div>
                ) : null}
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