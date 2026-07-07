import { JSX } from "react"
import OutputContainer from "@/components/interfaces/outputcontainer/OutputContainer"
import ArrowLink from "@/components/interfaces/arrowlink/ArrowLink"
import LinkButton from "@/components/interfaces/linkbutton/LinkButton"
import MockupDatePicker from "@/app/docs/components/datepicker/MockupDatePicker"
import "./showcase.css"

type Demo = {
    name: string,
    path: string,
    component: JSX.Element
}

export default function Showcase() {

    const placeholder = () => (
        <p>TBA</p>
    )

    const demos: Demo[] = [
        {
            name: "datepicker",
            path: "docs/components/datepicker",
            component: <MockupDatePicker />
        },
        {
            name: "dropdown",
            path: "docs/components/dropdown",
            component: placeholder()
        },
        {
            name: "switch",
            path: "docs/components/switch",
            component: placeholder()
        }
    ]

    return (
        <section className="showcase">
            <div className="showcase-header">
                <h2>Explore various components</h2>
                <p>
                    We have various components in our library 
                    from which some of them are customizable to match its style with your taste. 
                </p>
            </div>
            <div className="showcase-content">
                {demos.map((demo, i) => {
                    const { name, path, component } = demo
                    const className: string = i % 2 == 0 ? "demo-container" : "demo-container-flipped"
                    return (
                        <div className={className} key={"showcase-" + i}>
                            <OutputContainer components={[component]} width="22rem" height="22rem" />
                            <div className="component-header">
                                <div>
                                    <h2>{name}</h2>
                                    <ArrowLink path={path} arrowType="straight" direction="right">
                                        View documentation
                                    </ArrowLink>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="showcase-button-container">
                <LinkButton path="docs/components">View all components</LinkButton>
            </div>
        </section>
    )
}