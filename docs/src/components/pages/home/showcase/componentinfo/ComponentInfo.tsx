import CodeBlock from "@/components/widgets/codeblock/CodeBlock"
import OutputContainer from "@/components/widgets/outputcontainer/OutputContainer"
import "./componentinfo.css"

export default function ComponentInfo() {

    const codeDemo1: string = '<Accordion border={true} toggleIcon="plus" />'
    const codeDemo2: string = '<Accordion border={false} toggleIcon="chevron" />'

    const placeholder = () => (
        <p>TBA</p>
    )

    return (
        <section>
            <div className="component-info-header">
                <h2>Try out different styles</h2>
                <p>
                    We have various components in our library from which some of them
                    are customizable to match its style with your taste.
                </p>
            </div>
            <div className="component-info-content">
                <div>
                    <CodeBlock language="JSX" code={codeDemo1} />
                    <OutputContainer components={[placeholder()]} height="10rem" />
                </div>
                <div>
                    <CodeBlock language="JSX" code={codeDemo2} />
                    <OutputContainer components={[placeholder()]} height="10rem" />
                </div>
            </div>
        </section>
    )
}