import Link from "next/link"
import { JSX } from "react"
import "./linkbutton.css"

type LinkButtonProps = {
    type?: "primary" | "secondary" | "tertiary",
    path: string,
    target?: "_self" | "_blank",
    children: (string | JSX.Element) | (string | JSX.Element)[]
}

// Link tag that has the appearance of a button.
// type: styling type of the button.
// path: the destination of the link. Can be within the app or outside.
// target: tab in which the destination should be openned.
// children: inner text of the button. Can contain icons as well.
export default function LinkButton({
    type="primary",
    path="#",
    target="_self", 
    children
}: LinkButtonProps): JSX.Element {
    return (
        <Link href={path} target={target} className={type + " link-button"}>
            {children}
        </Link>
    )
}