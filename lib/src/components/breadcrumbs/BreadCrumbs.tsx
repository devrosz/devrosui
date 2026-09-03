import "./breadcrumbs.css"

type BreadCrumbsProps = {
    path: string,
    delimiter?: string
}

// Placeholder path if no path has been passed.
// Though, the path prop still remains mandatory.
const defaultPath = "documents/components/breadcrumbs"

// Shows the current path where each directory is seperated
// with the delimiter and where the current directory is highlighted.
// path: path to be represented in crumbs.
// delimiter: symbol between crumbs.
export default function BreadCrumbs({path=defaultPath, delimiter=">"}: BreadCrumbsProps) {
    if (typeof path != "string") {
        throw new Error("BreadCrumbs: path must be a string")
    }

    if (typeof delimiter != "string") {
        throw new Error("BreadCrumbs: delimiter must be a string")
    }

    const pathParsed = path.split("/")
    return (
        <div className="breadcrumbs">
            {pathParsed.map((dir, i) => {
                // Navigate to specific crumb in the given path.
                const outDir = "../"
                const currentPath = outDir.repeat(pathParsed.length - 1 - i)
                const isLast = i === pathParsed.length - 1

                return (
                    <div className={isLast ? "crumb-active" : "crumb"} key={dir}>
                        <a href={currentPath}>
                            <h6>{dir}</h6>
                        </a>
                        {!isLast ? <h6>{delimiter}</h6> : null}
                    </div>
                )
            })
            }
        </div>
    )
}