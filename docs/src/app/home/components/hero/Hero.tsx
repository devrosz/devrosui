"use client"

import LinkButton from "../../../../components/interfaces/linkbutton/LinkButton"
import WrapperSelect from "./WrapperSelect"
import MockupPopup from "../../../../components/interfaces/mockup-popup/MockupPopup"
import { Slider,
        Tabs,
        CookieConsent,
        InputOTP,
        Accordion,
        Error,
        Skeleton,
        Button } 
from "@devrosui/react"
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
            <div className="components-demo-container">
                <div className="components-demo-column">
                    <WrapperSelect />     
                    <Slider 
                        id="slider"
                        name="slider"
                        min="0"
                        max="100"
                        step="0.01"
                        label="Price"
                        unit="EUR"
                    />

                    <Tabs type="local" initialTabId="tab-1">
                        <Tabs.TabsList>
                            <Tabs.Tab id="tab-1">
                                <button>Monthly</button>
                            </Tabs.Tab>
                            <Tabs.Tab id="tab-2">
                                <button>Yearly</button>
                            </Tabs.Tab>
                        </Tabs.TabsList>
                    </Tabs>

                    <CookieConsent position="relative" onNecessary={() => {}} onAcceptAll={() => {}}>
                        Lorem ipsum dolor sit amet. Aut laborum nisi quo sequi laboriosam et odit omnis.
                        Est atque eius et sint magnam 33 tempore magnam.
                    </CookieConsent>
                </div> 

                <div className="components-demo-column">
                
                    <InputOTP>
                        <InputOTP.Label>Verification</InputOTP.Label>
                        <InputOTP.Description>
                            We have sent a code to j***@mail.com. 
                            Enter the code below.
                        </InputOTP.Description>
                        <InputOTP.Form inputLength={6}>
                            <InputOTP.Slot index={0} />
                            <InputOTP.Slot index={1} />
                            <InputOTP.Slot index={2} />
                            <InputOTP.Separator />
                            <InputOTP.Slot index={3} />
                            <InputOTP.Slot index={4} />
                            <InputOTP.Slot index={5} />
                        </InputOTP.Form>
                    </InputOTP>

                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header>Question one</Accordion.Header>
                            <Accordion.Content>
                                Lorem ipsum dolor sit amet. 
                                Eum necessitatibus modi ex culpa quis sit provident provident
                                non minima internos. Ut quia dolores eos numquam obcaecati aut
                                voluptatem voluptatibus qui vero corporis non autem impedit.
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item>
                            <Accordion.Header>Question two</Accordion.Header>
                            <Accordion.Content>
                                Lorem ipsum dolor sit amet. 
                                Eum necessitatibus modi ex culpa quis sit provident provident
                                non minima internos. Ut quia dolores eos numquam obcaecati aut
                                voluptatem voluptatibus qui vero corporis non autem impedit.
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item>
                            <Accordion.Header>Question three</Accordion.Header>
                            <Accordion.Content>
                                Lorem ipsum dolor sit amet. 
                                Eum necessitatibus modi ex culpa quis sit provident provident
                                non minima internos. Ut quia dolores eos numquam obcaecati aut
                                voluptatem voluptatibus qui vero corporis non autem impedit.
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion>
                    <Error>An unexpected error has occured</Error>

                    <div className="demo-button-container">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="tertiary">Tertiary</Button>
                        <Button variant="danger">Danger</Button>
                    </div>
                </div> 

                <div className="components-demo-column">
                    <MockupPopup />
                    <div className="skeleton-card">
                        <Skeleton width="100%" />
                        <Skeleton height="20px" width="100%" />
                        <Skeleton height="20px" width="100%" />
                        <Skeleton height="20px" width="100%" />
                    </div>
                </div>

            </div>
        </section>
            
    )
}