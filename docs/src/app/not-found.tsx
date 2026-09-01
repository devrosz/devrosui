import LinkButton from "@/components/interfaces/linkbutton/LinkButton"
import { FaLongArrowAltRight } from "react-icons/fa";
import "./page.css"

export default function NotFound() {

    return (
        <div className="pnf-container">
            <div className="pnf-content">
                <h2>404</h2>
                <h4>Page not found</h4>
                <LinkButton path="./">
                    Return to homepage
                    <FaLongArrowAltRight />
                </LinkButton>
            </div>
        </div>
    )
}