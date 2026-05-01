import CodeBlock from "@/components/widgets/codeblock/CodeBlock"

export default function ComponentInfo() {

    const codeDemo: string =
    `
        export default function CodeBlock({language, children}: CodeBlockProps) {
            return (
                <div className="codeblock">
                    <div className="codeblock-header">
                       <h5>{language}</h5> 
                    </div>
                    <div className="codeblock-content">
                        {children}
                    </div>
                    <BiCopy className="copy-icon" />
                </div>
            )
        }
    `
    return (
        <section>
            <div className="component-info-header">
                <h2>Try out different styles</h2>
                <p>
                    We have various components in our library from which some of them
                    are customizable to match its style with your taste.
                </p>
            </div>
            <CodeBlock language="JSX" code={codeDemo} />
        </section>
    )
}