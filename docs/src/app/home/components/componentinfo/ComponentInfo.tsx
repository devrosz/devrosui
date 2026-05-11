import CodeBlock from "@/components/interfaces/codeblock/CodeBlock"
import OutputContainer from "@/components/interfaces/outputcontainer/OutputContainer"
import "./componentinfo.css"

export default function ComponentInfo() {

    const codeDemo1: string = '<Accordion border={true} toggleIcon="plus" />'
    const codeDemo2: string = '<Accordion border={false} toggleIcon="chevron" />'

    const placeholder = () => (
        <p>TBA</p>
    )

    return (
        <section className="component-info">
            <div className="component-style-info">
                <div className="component-info-header">
                    <h2>Try out different styles</h2>
                    <p>
                        We have various components in our library from which some of them
                        are customizable to match its style with your taste.
                    </p>
                </div>
                <div className="component-style-info-content">
                    <div>
                        <CodeBlock langHighlight="JSX" code={codeDemo1} />
                        <OutputContainer components={[placeholder()]} height="10rem" />
                    </div>
                    <div>
                        <CodeBlock langHighlight="JSX" code={codeDemo2} />
                        <OutputContainer components={[placeholder()]} height="10rem" />
                    </div>
                </div>
            </div>
            <div className="component-theme-info">
                <div className="component-info-header">
                    <h2>All components are lightmode compatible</h2>
                    <p>
                        When the theme of an app gets toggled to light mode, the components
                        automatically change color to match the app's theme. 
                    </p>
                </div> 
                <div className="component-theme-info-content">
                    <OutputContainer 
                        components={[placeholder(), placeholder(), placeholder()]}
                        addThemeToggle={true} 
                        height="20rem"
                    />
                </div>
            </div>
        </section>
    )
}