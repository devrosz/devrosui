import { JSX } from "react"
import ThemeToggle from "../themetoggle/ThemeToggle"
import "./outputcontainer.css"

type OutputContainerProps = {
    components: JSX.Element[],
    width?: string,
    height?: string,
    addThemeToggle?: boolean
}

// Renders a container which showcases the given component(s).
// components: an array of component(s) that you want to showcase.
// addThemeToggle: if true the container gets a button that lets the user toggle the app's theme
export default function OutputContainer({
    components,
    width="100%",
    height="fit-content",
    addThemeToggle=false
}: OutputContainerProps) {
    return (
        <div className="output-container" style={{width: width, height: height}} >
            {addThemeToggle ? (
                <div className="output-container-header">
                    <ThemeToggle />
                </div>
            ) : null}
            {components.map((component, i) => (
                <div key={"component-" + i}>
                    {component}
                </div>
            ))}
        </div>
    )
}