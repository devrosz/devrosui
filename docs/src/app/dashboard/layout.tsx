import { Tabs } from "@devrosui/react"
import Link from "next/link"

export default function Layout({ children }) {

    function linkJSX(path, children) {
        "use server"
        return (
            <Link href={path}>{children}</Link> 
        )
    }

    return (
        <Tabs
            tabs={[
                {text: "Overview", path: "/overview", renderLink: linkJSX},
                {text: "Analytics",path: "/analytics",  renderLink: linkJSX},
                {text: "Settings", path: "/settings", renderLink: linkJSX}
            ]}
        />
    )
}