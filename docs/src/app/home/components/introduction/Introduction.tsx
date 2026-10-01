import CodeBlock from "@/components/interfaces/codeblock/CodeBlock"
import ArrowLink from "@/components/interfaces/arrowlink/ArrowLink"
import "./introduction.css"

export default function Introduction() {

    const codeInstallation = "npm install @devrosui/react"
    const codeUsage = 
`
import { Switch } from “@devrosui/react”

<Switch>
    <Switch.Track>
        <Switch.Thumb />
    </Switch.Track>
    <Switch.Meta>
        <Switch.Label>
            Notifications
        </Switch.Label>
        <Switch.Description>
            Receive emails about the latest updates.
        </Switch.Description>
    </Switch.Meta>
</Switch>

`

    return (
        <section className="introduction">
            <div className="introduction-content">
                <div className="introduction-text">
                    <h2>Get started within minutes</h2>
                    <p>
                        You can start right now by reading the prerequisites and
                        installation page before going through the component
                        documentation pages.
                    </p>
                    <div className="docs-link-container">
                        <ArrowLink path="/docs/getting-started">
                            Read prerequisites
                        </ArrowLink>
                    </div>
                </div>
                <div className="introduction-code">
                    <CodeBlock langHighlight="powershell" langDisplay="npm" code={codeInstallation} />
                    <CodeBlock langHighlight="JSX" code={codeUsage} />
                </div>
            </div>
        </section>
    )
}