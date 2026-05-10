import LinkButton from "../../../widgets/linkbutton/LinkButton"
import "./hero.css"

export default function Hero() {
    return (
        <section className="hero">
            <div className="tag">
                <h6>React component library</h6>
            </div>
            <h1>Fast and easy modern looking UI components</h1>
            <p>
                Lorem ipsum dolor sit amet. 
                Aut laborum nisi quo sequi laboriosam et odit omnis. 
                Est atque eius et sint magnam 33 tempore magnam. 
            </p>
            <div className="hero-buttons">
                <LinkButton type="primary" path="docs/installation">
                    Get started
                </LinkButton>
                 <LinkButton type="secondary" path="docs/components">
                    View components
                </LinkButton>
            </div>
        </section>
            
    )
}