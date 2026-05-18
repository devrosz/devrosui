import Link from "next/link"
import { JSX } from "react"
import { FiArrowUpRight } from "react-icons/fi"
import { FaArrowRight } from "react-icons/fa6"
import "./arrowlink.css"

type ArrowLinkProps = {
    path: string,
    target?: "_blank" | "_self",
    arrowType?: "straight" | "diagonal",
    direction?: "left" | "right"
    children: string,
}

// Link component that features in-app-routing.
// Visually looks like an arrow with text.
// path: the destination of the link within the app.
// target: tab in which the destination should be openned.
// arrowType: choose between a straight arrow or a diagonal arrow.
// direction: choose direction of the arrow (left or right).
export default function ArrowLink({
    path,
    target="_self",
    arrowType="straight",
    direction="right",
    children
}: ArrowLinkProps) {

    const rotation: number = direction === "left" ? 180 : 0
    const arrowJSX: JSX.Element = 
        arrowType === "straight" ? <FaArrowRight style={{transform: `rotate(${rotation}deg)`}} /> 
        : <FiArrowUpRight style={{transform: `rotate(${rotation})`}} />

    return (
        <Link className="arrow-link" href={path} target={target}>
            {direction === "left" ? arrowJSX : null}
            {children}
            {direction === "right" ? arrowJSX : null}
        </Link>
    )
}