import { JSX } from "react"
import "./features.css"

// icons
import { LuCodeXml } from "react-icons/lu"
import { TbFiles } from "react-icons/tb"
import { IoPhonePortraitOutline } from "react-icons/io5";

type Feature = {
    icon: JSX.Element,
    feature: string,
    description: string
}

export default function Features() {

    const features: Feature[] = [
        {
            icon: <LuCodeXml />,
            feature: "reuseable",
            description: "Simply import and paste the component"
        },
        {
            icon: <TbFiles />,
            feature: "consistent",
            description: "Bring consistency in your designs across all websites"
        },
        {
            icon: <IoPhonePortraitOutline />,
            feature: "responsive",
            description: "Looks good on desktop, mobile and tablet"
        }
    ]

    return (
        <section className="features">
            {features.map((featureItem, i) => {
                const { icon, feature, description } = featureItem
                return (
                    <div className="feature-container" key={"feature-" + i}>
                        <div className="feature-icon">
                            {icon}
                        </div>
                        <h6><span>{feature}</span>. {description}</h6>
                    </div>
                )
            })}
        </section>
    )
}