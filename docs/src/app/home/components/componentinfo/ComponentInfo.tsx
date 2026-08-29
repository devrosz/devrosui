"use client"

// components
import CodeBlock from "@/components/interfaces/codeblock/CodeBlock"
import OutputContainer from "@/components/interfaces/outputcontainer/OutputContainer"
import { Accordion, CookieConsent, Skeleton } from "@devrosui/react"
import MockupPopup from "@/components/interfaces/mockup-popup/MockupPopup"

import "./componentinfo.css"

export default function ComponentInfo() {

    const codeDemo1: string = 
    `
    <Accordion background="filled" toggleIcon="chevron">
        <Accordion.Item>
            <Accordion.Header>Item 1</Accordion.Header>
            <Accordion.Content>
                Lorem ipsum dolor sit amet. 
            </Accordion.Content>
        </Accordion.Item>
    </Accordion>
    `
    const codeDemo2: string =
        `
    <Accordion background="empty" toggleIcon="plus">
        <Accordion.Item>
            <Accordion.Header>Item 1</Accordion.Header>
            <Accordion.Content>
                Lorem ipsum dolor sit amet. 
            </Accordion.Content>
        </Accordion.Item>
    </Accordion>
    `

    function AccordionWrapper(background: "filled" | "empty", toggleIcon: "chevron" | "plus") {
        return (     
            <Accordion background={background} toggleIcon={toggleIcon}>
                <Accordion.Item>
                    <Accordion.Header>Item 1</Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet. 
                        Eum necessitatibus modi ex culpa quis sit provident provident
                        non minima internos.
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>

        )
    }

    function CookieConsentWrapper() {
        return (
             <CookieConsent position="relative" onNecessary={() => {}} onAcceptAll={() => {}}>
                Lorem ipsum dolor sit amet. Aut laborum nisi quo sequi laboriosam et odit omnis.
            </CookieConsent>
        )
    }

    function SkeletonWrapper() {
        return (
           <div className="skeleton-card">
                <Skeleton width="17rem" />
                <Skeleton height="20px" width="100%" />
                <Skeleton height="20px" width="100%" />
                <Skeleton height="20px" width="100%" />
            </div>
        )
    }

    return (
        <section className="component-info">
            <div className="component-style-info">
                <div className="component-info-header">
                    <h2>Try out different styles</h2>
                    <p>
                        We have various components in our library from which some of them
                        are customizable to match its style with your taste.
                    </p>
                </div>
                <div className="component-style-info-content">
                    <div>
                        <CodeBlock langHighlight="JSX" code={codeDemo1} />
                        <OutputContainer
                            components={[AccordionWrapper("filled", "chevron")]}
                            height="10rem"
                        />
                    </div>
                    <div>
                        <CodeBlock langHighlight="JSX" code={codeDemo2} />
                        <OutputContainer
                            components={[AccordionWrapper("empty", "plus")]}
                            height="10rem" 
                        />
                    </div>
                </div>
            </div>
            <div className="component-theme-info">
                <div className="component-info-header">
                    <h2>All components are lightmode compatible</h2>
                    <p>
                        When the theme of an app gets toggled to light mode, the components
                        automatically change color to match the app's theme. 
                    </p>
                </div> 
                <div className="component-theme-info-content">
                    <OutputContainer 
                        components={[
                            <div className="component-theme-info-components">
                                {CookieConsentWrapper()}
                                {SkeletonWrapper()}
                                <MockupPopup width="18rem" />
                            </div>
                        ]}
                        addThemeToggle={true} 
                        height="auto"
                    />
                </div>
            </div>
        </section>
    )
}