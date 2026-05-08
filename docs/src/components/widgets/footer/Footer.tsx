import Link from "next/link"
import { JSX } from "react"
import { FaInstagram } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa"
import { LuGithub } from "react-icons/lu"
import "./footer.css"

type SocialType = {
    name: string,
    icon: JSX.Element,
    path: string
}

export default function Footer() {

    const socials: SocialType[] = [
        {
            name: "instagram",
            icon: <FaInstagram />,
            path: "https://www.instagram.com/"
        },
        {
            name: "tiktok",
            icon: <FaTiktok />,
            path: "https://www.tiktok.com"
        },
        {
            name: "github",
            icon: <LuGithub />,
            path: "https://www.github.com"
        }
    ]

    function SocialLinkBtn(path: string, key: string, icon: JSX.Element) {
        return (
            <Link
                href={path}
                target="_blank"
                className="social-link-button"
                key={key}
            >
                {icon}
            </Link>
        )
    }

    return (
        <footer>
            <div className="footer-inner">
                <p>Made by devros</p>
                <div className="socials-container">
                    {socials.map((social, i) => {
                        const path = social.path
                        const icon = social.icon
                        const key = "social-" + i
                        return (
                            SocialLinkBtn(path, key, icon)
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}