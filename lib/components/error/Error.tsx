import { AiOutlineExclamationCircle } from "react-icons/ai"
import "./error.css"

type ErrorProps = {
    message: string,
    type?: "warning" | "danger",
    width?: string
}

export default function Error({type="warning", message="Error", width="100%"}: ErrorProps) {
    return (
        <div 
            className={"error-container " + type}
            style={{width: width}}
        >
            <AiOutlineExclamationCircle className="error-icon" />
            <h6>{message}</h6>
        </div>
    )
}