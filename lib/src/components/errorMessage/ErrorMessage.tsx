import { AiOutlineExclamationCircle } from "react-icons/ai"
import "./errormessage.css"

type ErrorMessageProps = {
    type?: "warning" | "danger",
    width?: string,
    children: string
}

export default function ErroMessager({type="warning", width="100%", children}: ErrorMessageProps) {
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