import { BsHighlights } from "react-icons/bs";
import Tooltip from "../tooltip/Tooltip"
import "./themetoggle.css"

type ThemeToggleProps = {
    toggleFunction: () => void
}

// Button that toggles the theme of the app.
export default function ThemeToggle({toggleFunction}: ThemeToggleProps) {

    return (
            <Tooltip tip="Theme" position="bottom">
                <button className="themetoggle-button" onClick={toggleFunction}>
                    <BsHighlights className="themetoggle-icon" />
                </button>
            </Tooltip>
    )
}