import { JSX } from "react"
import Tooltip from "../tooltip/Tooltip"
import "./iconbutton.css"

type IconButtonProps = {
    icon: JSX.Element,
    tip?: string,
    className?: string,
    disabled?: boolean
    handler: () => void
}

// Renders an icon that invokes a function on click.
// icon: icon to be displayed.
// tip: tooltip text if applicable.
// className: classname of the icon for custom styling if applicable.
// disabled: boolean value indicating if the icon can be clicked or not.
// handler: function to be invoked on click if disabled is false.
export default function IconButton({icon, tip, className="", disabled=false, handler}: IconButtonProps) {

    const buttonJSX = () => (
        <button 
            onClick={handler}
            className="icon-button"
            disabled={disabled}
        >
            {icon}
        </button>
    )
    return (
        <div className={className}>
            {tip ? (
                    <Tooltip tip={tip}>
                       {buttonJSX()}
                    </Tooltip>
                ) :
                buttonJSX()
            }
        </div>
    )
}