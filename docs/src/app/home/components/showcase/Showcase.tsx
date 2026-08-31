"use client"

import { JSX } from "react"

// components
import { Calendar, Dropdown, Switch } from "@devrosui/react"
import MockupDatePicker from "@/app/docs/components/datepicker/MockupDatePicker"
import LinkButton from "@/components/interfaces/linkbutton/LinkButton"
import ArrowLink from "@/components/interfaces/arrowlink/ArrowLink"
import OutputContainer from "@/components/interfaces/outputcontainer/OutputContainer"

// icons
import { AiOutlineEdit } from "react-icons/ai"
import { FiSave } from "react-icons/fi"
import { IoCopyOutline } from "react-icons/io5"
import { RiDeleteBinLine } from "react-icons/ri"
import "./showcase.css"

type Demo = {
    name: string,
    path: string,
    component: JSX.Element
}

export default function Showcase() {

    const demoDropdown = () => (
          <Dropdown>
              <Dropdown.Header>
                  Actions
              </Dropdown.Header>
              <Dropdown.List>
                  <Dropdown.Item>
                      <AiOutlineEdit />
                      Edit file
                  </Dropdown.Item>
                  <Dropdown.Item>
                      <FiSave />
                      Save file
                  </Dropdown.Item>
                  <Dropdown.Item>
                      <IoCopyOutline />
                      Copy file
                  </Dropdown.Item>
                  <Dropdown.Item isDangerous={true}>
                      <RiDeleteBinLine />
                      Delete file
                  </Dropdown.Item>
              </Dropdown.List>
          </Dropdown>
    )

    const demoSwitch = () => (  
         <Switch isActive={true} >
              <Switch.Track>
                  <Switch.Thumb />
              </Switch.Track>
              <Switch.Meta>
                  <Switch.Label>
                      Notifications
                  </Switch.Label>
                  <Switch.Description>
                      Receive emails about the latest updates.
                  </Switch.Description>
              </Switch.Meta>
          </Switch>
    )

    const demos: Demo[] = [
        {
            name: "calendar",
            path: "docs/components/calendar",
            component: <Calendar />
        },
        {
            name: "dropdown",
            path: "docs/components/dropdown",
            component: demoDropdown()
        },
        {
            name: "switch",
            path: "docs/components/switch",
            component: demoSwitch()
        }
    ]

    return (
        <section className="showcase">
            <div className="showcase-header">
                <h2>Explore various components</h2>
                <p>
                    We have various components in our library 
                    from which some of them are customizable to match its style with your taste. 
                </p>
            </div>
            <div className="showcase-content">
                {demos.map((demo, i) => {
                    const { name, path, component } = demo
                    const className: string = i % 2 == 0 ? "demo-container" : "demo-container-flipped"
                    return (
                        <div className={className} key={"showcase-" + i}>
                            <div className="demo-container-output">
                                <OutputContainer components={[component]} width="23rem" height="23rem" />
                            </div>
                            <div className="component-header">
                                <div>
                                    <h2>{name}</h2>
                                    <ArrowLink path={path} arrowType="straight" direction="right">
                                        View documentation
                                    </ArrowLink>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="showcase-button-container">
                <LinkButton path="docs/components">View all components</LinkButton>
            </div>
        </section>
    )
}