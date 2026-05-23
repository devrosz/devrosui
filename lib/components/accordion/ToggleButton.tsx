import { FaChevronDown, FaPlus, FaMinus } from "react-icons/fa6"
import { motion } from "motion/react"
import { JSX } from "react"

type ToggleButtonProps = {
    entry: string,
    getStatus: (string) => void,
    toggleStatus: (string) => void,
    icon?: "plus" | "chevron"
}

export default function ToggleButton({
    entry,
    getStatus,
    toggleStatus,
    icon="chevron"
}: ToggleButtonProps): JSX.Element {
        return icon === "plus" ? (
            <button onClick={() => toggleStatus(entry)}>
                { getStatus(entry) 
                    ? <FaMinus className="accordion-toggle-icon plus" />
                    : <FaPlus className="accordion-toggle-icon plus" />
                }
            </button>
        ) : (
            <motion.button
                animate={{rotate: getStatus(entry) ? 180 : 0}}
                transition={{duration: 0.25, ease: "easeInOut"}}
                onClick={() => toggleStatus(entry)}
            >
                <FaChevronDown className="accordion-toggle-icon chevron" />
            </motion.button>
        )
    }