import { RiLoader5Line } from "react-icons/ri"
import "./spinner.css"

// color: color of the loading spinner.
// size: size of the loading spinner.
type SpinnerProps = {
    color?: "primary" | "secondary" | "tertiary",
    size?: string,
}

// Loading spinner that spins infinitely.
export default function Spinner({color="primary", size="1.5rem"}: SpinnerProps) {
    return (
        <RiLoader5Line
            className={`spinner ${color}`}
            style={{fontSize: size}}
        />
    )
}