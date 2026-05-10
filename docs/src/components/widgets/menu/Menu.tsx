import { ToggleMenuProps } from "@/app/types"
import "./menu.css"

export default function Menu({open, handleToggle}: ToggleMenuProps) {

    return (
        <div 
            className="menu-btn-container"
            onClick={() => handleToggle}
        >
            <div 
                className="menu-upper" 
                style={{
                    transform: open ? "rotate(45deg)" : "rotate(0)",
                    marginBottom: open ? "12px" : "8px"
            }}>
            </div>
            <div 
                className="menu-lower" 
                style={{
                    transform: open ? "rotate(-45deg)" : "rotate(0)",
                    marginTop: open ? "12px" : "8px",
                    width: open ? "100%" : "70%"
                }}>
            </div>
        </div>
    )
}