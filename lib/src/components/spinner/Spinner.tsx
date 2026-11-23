import { RiLoader5Line } from "react-icons/ri"
import "./spinner.css"

// color: color of the loading spinner.
// size: size of the loading spinner.
type SpinnerProps = {
    color?: "primary" | "secondary" | "tertiary",
    size?: string,
    key?: string
}

// Loading spinner that spins infinitely.
export default function Spinner({color="primary", size="1.5rem", key}: SpinnerProps) {
    return key ? (
        <RiLoader5Line
            key={key}
            className={`spinner ${color}`}
            style={{fontSize: size}}
        />
    ) : (
        <RiLoader5Line
            className={`spinner ${color}`}
            style={{fontSize: size}}
        />
    )
}