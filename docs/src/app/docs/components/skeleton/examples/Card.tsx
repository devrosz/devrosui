import { Skeleton } from "@devrosui/react"

export default function Card() {
    return (
        <div className="skeleton-card">
            <Skeleton />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
        </div>
    )
}