import { AiOutlineExclamationCircle } from "react-icons/ai"
import "./error.css"

type ErrorProps = {
    type?: "warning" | "danger",
    width?: string,
    children: string
}

export default function Error({type="warning", width="100%", children}: ErrorProps) {
    return (
        <div 
            className={"error-container " + type}
            style={{width: width}}
        >
            <AiOutlineExclamationCircle className="error-icon" />
            <h6>{children}</h6>
        </div>
    )
}