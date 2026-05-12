import Link from "next/link"


type NavLinkProps = {
    path: string,
    toggleMenu: () => void,
    key?: string,
    children: React.ReactNode
}

export default function ToggleLink({path, toggleMenu, children}: NavLinkProps) {
    return (
        <li onClick={() => toggleMenu()}>
            <Link href={path}>{children}</Link>
        </li>
    )
}