import "./skeleton.css"

// height: height of the skeleton.
// width: width of the skeleton.
// borderRadius: border-radius of the skeleton.
// Type 'string' is used to allow the user to specify the unit.
type SkeletonProps = {
    height?: string,
    width?: string,
    borderRadius?: string
}

// Placeholder for page elements with animating gradient background
export default function Skeleton({height="100px", width="200px", borderRadius="16px"}: SkeletonProps) {
    return (
        <div 
            className="skeleton" 
            style={{
                height: height,
                width: width,
                borderRadius: borderRadius
            }}
        >
        </div>
    )
}