import "./skeleton.css"

type SkeletonProps = {
    height?: string,
    width?: string,
    borderRadius?: string
}

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