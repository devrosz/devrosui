import CodeBlock from "@/components/widgets/codeblock/CodeBlock"
import ArrowLink from "@/components/widgets/arrowlink/ArrowLink"
import "./introduction.css"

export default function Introduction() {

    const codeInstallation = "npm install @devrosui react-icons motion"
    const codeUsage = 
    `import { Spinner } from “@devrosui”

<button type="submit" className="primary-button">
    {isSubmitted && !submitSucces ? <Spinner /> : null}
    {submitSucces ? <FaCheck /> : null}
    {!isSubmitted && !submitSucces ? "Send" : null}
</button>`

    return (
        <section className="introduction">
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
                <ArrowLink path="/docs/getting-started">
                    Learn more
                </ArrowLink>
            </div>
            <div className="introduction-code">
                <CodeBlock langHighlight="powershell" langDisplay="npm" code={codeInstallation} />
                <CodeBlock langHighlight="JSX" code={codeUsage} />
            </div>
        </section>
    )
}