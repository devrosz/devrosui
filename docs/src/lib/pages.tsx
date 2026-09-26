// This file contains the metadata of every page on this website.
// This includes the navbar pages as well as the documentation pages.
// It is used as the single-source-of-truth.

type DocsPagesObj = {
    [key: string]: {
        title: string,
        path: string,
        isNew?: boolean,
        isUpdated?: boolean
    }[]
}

type PageObj = {
    path: string,
    title: string
}

// Documentation pages
export const docsPages: DocsPagesObj = {
    "Getting started": [
        {title: "prerequisites", path: "/docs/getting-started/prerequisites"},
        {title: "installation", path: "/docs/getting-started/installation"},
    ],
    "Components": [
        {title: "accordion", path: "/docs/components/accordion", isUpdated: true},
        {title: "breadcrumbs", path: "/docs/components/breadcrumbs"},
        {title: "button", path: "/docs/components/button"},
        {title: "calendar", path: "/docs/components/calendar"},
        {title: "cookieConsent", path: "/docs/components/cookieConsent"},
        {title: "datepicker", path: "/docs/components/datepicker"},
        {title: "dropdown", path: "/docs/components/dropdown", isUpdated: true},
        {title: "errorMessage", path: "/docs/components/errorMessage", isUpdated: true},
        {title: "inputOTP", path: "/docs/components/inputOTP"},
        {title: "panel", path: "/docs/components/panel", isNew: true},
        {title: "popup", path: "/docs/components/popup"},
        {title: "select", path: "/docs/components/select"},
        {title: "skeleton", path: "/docs/components/skeleton"},
        {title: "slider", path: "/docs/components/slider"},
        {title: "switch", path: "/docs/components/switch"},
        {title: "tabs", path: "/docs/components/tabs"},
    ]
}

// Site pages
export const pages: PageObj[] = [
    {path: "/", title: "Home"},
    {path: "/docs/components/accordion", title: "Components"},
    {path: "/docs/getting-started/prerequisites", title: "Documentation"}
]

