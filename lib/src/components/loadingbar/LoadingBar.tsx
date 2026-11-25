import "./loadingbar.css"

// progress: float between 0-1. Specifies the part of the bar to be filled.
// maxWidth: width of the whole bar.
// thickness: thickness of the loading bar.
// color: color schema of the loading bar
type LoadingBarProps = {
    progress: number,
    maxWidth?: string,
    thickness?: string,
    color?: "primary" | "secondary" | "tertiary"
}

// Loading bar that takes a 0-1 decimal and renders the progression.
export default function LoadingBar({
    progress=0,
    maxWidth="200px",
    thickness="5px",
    color="primary"
}: LoadingBarProps) {

    if (progress < 0 || progress > 1) {
        throw new Error("LoadingBar: progress can only have a value between 0-1")
    }

    return (
        <div
            className={`loading-bar ${color}`}
            role="progressbar"
            aria-label="progress-bar"
            style={{
                width: maxWidth,
                height: thickness
            }}
        >
            <div
                className={`loading-bar-progress ${color}`}
                role="progressbar"
                aria-label="progress-value"
                style={{
                    width: `calc(${maxWidth} * ${progress})`,
                    height: thickness,
                    borderTopLeftRadius: "16px",
                    borderBottomLeftRadius: "16px",
                    borderTopRightRadius: progress === 1 ? "16px" : "0",
                    borderBottomRightRadius: progress === 1 ? "16px" : "0"
                }}
            ></div>
        </div>
    )
}