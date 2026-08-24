import { Skeleton } from "@devrosui/react"

export default function Avatar() {
    return (
        <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
            <Skeleton height="45px" width="45px" borderRadius="100%" />
            <div>
                <Skeleton height="20px" />
                <Skeleton height="20px" width="80px" />
            </div>
        </div>
    )
}