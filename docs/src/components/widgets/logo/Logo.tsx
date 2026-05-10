import Image from "next/image"
import Link from "next/link"
import "./logo.css"

export default function Logo() {
    return (
        <Link href="/" className="logo-container">
            <img 
                src="/assets/devrosui_logo.jpg"  
                alt="devrosui logo" 

                className="logo-img"
            />
            <h4>DevrosUI</h4>
        </Link>
    )
}