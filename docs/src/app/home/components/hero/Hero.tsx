"use client"

import LinkButton from "../../../../components/interfaces/linkbutton/LinkButton"
import "./hero.css"

export default function Hero() {
    return (
        <section className="hero">
            <div className="tag">
                <h6>React component library</h6>
            </div>
            <h1>Fast and easy modern looking UI components</h1>
            <div className="hero-buttons">
                <LinkButton type="primary" path="docs/getting-started/prerequisites">
                    Get started
                </LinkButton>
                 <LinkButton type="secondary" path="docs/components/accordion">
                    View components
                </LinkButton>
            </div>
        </section>
            
    )
}