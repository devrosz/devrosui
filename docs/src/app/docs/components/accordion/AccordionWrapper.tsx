"use client"

import { Accordion } from "@devrosui/react"

type AccordionWrapperProps = {
    background: "empty" | "filled",
    toggleIcon: "plus" | "chevron",
    customHeader?: boolean
}

export default function AccordionWrapper({
    background="filled",
    toggleIcon="chevron",
    customHeader=false
}: AccordionWrapperProps) {
    return (
            <Accordion width="20rem" background={background} toggleIcon={toggleIcon}>
                <Accordion.Item>
                    <Accordion.Header>
                        {customHeader ? <h4>Item 1</h4> : "Item 1"}
                    </Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet. 
                        Eum necessitatibus modi ex culpa quis sit provident provident
                        non minima internos. Ut quia dolores eos numquam obcaecati aut
                        voluptatem voluptatibus qui vero corporis non autem impedit.
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Header>
                        {customHeader ? <h4>Item 1</h4> : "Item 2"}
                    </Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet. 
                        Eum necessitatibus modi ex culpa quis sit provident provident
                        non minima internos. Ut quia dolores eos numquam obcaecati aut
                        voluptatem voluptatibus qui vero corporis non autem impedit.
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Header>
                        {customHeader ? <h4>Item 1</h4> : "Item 3"}
                    </Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet. 
                        Eum necessitatibus modi ex culpa quis sit provident provident
                        non minima internos. Ut quia dolores eos numquam obcaecati aut
                        voluptatem voluptatibus qui vero corporis non autem impedit.
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        )
}