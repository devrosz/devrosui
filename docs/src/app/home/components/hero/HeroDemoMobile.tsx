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

export default function HeroDemoMobile() {
    return (
        <section className="hero-demo-mobile">
            <div className="hero-demo-select">
                <WrapperSelect />     
            </div>

            <div className="hero-demo-slider">
                <Slider 
                    id="slider"
                    name="slider"
                    min="0"
                    max="100"
                    step="0.01"
                    label="Price"
                    unit="EUR"
                />
            </div>

            <div className="hero-demo-tabs">
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
            </div>

            <div className="hero-demo-cookie">
                <CookieConsent position="relative" onNecessary={() => {}} onAcceptAll={() => {}}>
                    Lorem ipsum dolor sit amet. Aut laborum nisi quo sequi laboriosam et odit omnis.
                    Est atque eius et sint magnam 33 tempore magnam.
                </CookieConsent>
            </div> 

            <div className="hero-demo-otp">
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
            </div>

            <div className="hero-demo-accordion">
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
            </div>

            <div className="hero-demo-error">
                <Error>An unexpected error has occured</Error>
            </div>

            <div className="hero-demo-buttons">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
                <Button variant="danger">Danger</Button>
            </div>

            <div className="hero-demo-popup">
                <MockupPopup />
            </div>

            <div className="hero-demo-skeleton">
                <div className="skeleton-card">
                    <Skeleton width="100%" />
                    <Skeleton height="20px" width="100%" />
                    <Skeleton height="20px" width="100%" />
                    <Skeleton height="20px" width="100%" />
                </div>
            </div>
        </section>
    )
}