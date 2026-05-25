import { FaChevronDown, FaPlus, FaMinus } from "react-icons/fa6"
import { motion } from "motion/react"
import { JSX } from "react"

type ToggleButtonProps = {
    entry: string,
    getStatus: (key: string) => boolean,
    toggleStatus: (
        key: string,
        e: React.MouseEvent<HTMLLIElement> | React.MouseEvent<HTMLButtonElement>
    ) => void,
    icon?: "plus" | "chevron"
}

// Returns the toggle button for collapsing the accordion item.
// entry: the key of the item that needs to be controlled.
// getStatus: function that returns the open state of the item.
// toggleStatus: function that toggles the open state.
// icon: icon to be displayed as button.
export default function ToggleButton({
    entry,
    getStatus,
    toggleStatus,
    icon="chevron"
}: ToggleButtonProps): JSX.Element {
        return icon === "plus" ? (
            <button 
                onClick={(e) => toggleStatus(entry, e)}
                aria-label={"collapse content button-" + entry}
            >
                { getStatus(entry) 
                    ? <FaMinus className="accordion-toggle-icon plus" />
                    : <FaPlus className="accordion-toggle-icon plus" />
                }
            </button>
        ) : (
            <motion.button
                animate={{rotate: getStatus(entry) ? 180 : 0}}
                transition={{duration: 0.25, ease: "easeInOut"}}
                onClick={(e) => toggleStatus(entry, e)}
                aria-label={"collapse content button-" + entry}
            >
                <FaChevronDown className="accordion-toggle-icon chevron" />
            </motion.button>
        )
    }