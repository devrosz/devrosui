import "./tags.css"

type TagProps = {
    type: "new" | "updated",
    children: string
}

// Displays a tag next to navigation links that point to documentation pages.
// Indicate whether a component is updated or new.
export default function Tag({type, children}: TagProps) {
    return <span className={"component-tag " + type}>{children}</span>
}