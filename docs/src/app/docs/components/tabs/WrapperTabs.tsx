"use client"

import { Tabs } from "@devrosui/react"

type WrapperProps = {
    styling?: "primary" | "secondary" | "tertiary",
    showDisabled?: boolean
}

export default function WrapperTabs({styling="primary", showDisabled=false}: WrapperProps) {
    return (
        <Tabs type="local" initialTabId="tab-1" styling={styling}>
            <Tabs.TabsList>
                <Tabs.Tab id="tab-1">
                    <button>Overview</button>
                </Tabs.Tab>
                <Tabs.Tab id="tab-2" disabled={showDisabled}>
                    <button>Analytics</button>
                </Tabs.Tab>
                <Tabs.Tab id="tab-3">
                    <button>Settings</button>
                </Tabs.Tab>
            </Tabs.TabsList>

            <Tabs.TabRender id="tab-1">
                <h5 className="tabs-children">Overview content</h5>
            </Tabs.TabRender>
                <Tabs.TabRender id="tab-2">
                <h5 className="tabs-children">Analytics content</h5>
            </Tabs.TabRender>
                <Tabs.TabRender id="tab-3">
                <h5 className="tabs-children">Settings content</h5>
            </Tabs.TabRender>
        </Tabs>
    )
}