import Image from "next/image"
import Link from "next/link"
import "./logo.css"

export default function Logo() {
    return (
        <Link href="/" className="logo-container">
            <Image 
                src="/assets/devrosui_logo.webp"  
                alt="devrosui logo" 
                width={263}
                height={241}
                sizes="(max-width: 450px) 40px, 50px"
                className="logo-img"
            />
            <h4>DevrosUI</h4>
        </Link>
    )
}