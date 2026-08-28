import CodeBlock from "@/components/interfaces/codeblock/CodeBlock"
import ArrowLink from "@/components/interfaces/arrowlink/ArrowLink"
import "./introduction.css"

export default function Introduction() {

    const codeInstallation = "npm install @devrosui/react"
    const codeUsage = 
`
import { Switch } from “@devrosui”

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
                        Lorem ipsum dolor sit amet.
                        Sed ullam quas ut voluptas sapiente qui ullam dolores
                        sed ipsum nihil et quis impedit
                        Ut explicabo reiciendis est perspiciatis eius
                        sed dolores accusantium ut alias quod hic minus nihil et
                        magnam numquam qui galisum inventore. 
                    </p>
                    <div className="docs-link-container">
                        <ArrowLink path="/docs/getting-started">
                            Learn more
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