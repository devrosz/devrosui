import type { Meta, StoryObj } from "@storybook/react-vite"
import { useArgs } from "storybook/internal/preview-api"
import { Select } from "@devrosui/react"

const meta = {
    title: "Select",
    component: Select,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const SelectDev: Story = {
    args: {
        name: "car",
        id: "car",
        values: [],
        onSelect: () => {},
        options: [
            "BMW",
            "Audi",
            "Mercedes",
            "Volkswagen"
        ],
        label: "select",
        placeholder: "Favorite car"
    },
    render: () => {
        const [{name, id, car, options, label, placeholder}, updateArgs] = useArgs()

        function handleSelect(name: string, value: (string | number)[]): void {
            updateArgs({[name]: value})
        }

        return (
            <Select
                id={id}
                name={name}
                values={car}
                onSelect={handleSelect}
                options={options}
                label={label}
                placeholder={placeholder}
            />
        )
    }
}

export const numbers: Story = {
    args: {
        name: "number",
        id: "number",
        values: [],
        onSelect: () => {},
        options: [
            1,
            2,
            3,
            4
        ],
        label: "select",
        placeholder: "Select a number"
    },
    render: () => {
        const [{name, id, number, options, label, placeholder}, updateArgs] = useArgs()

        function handleSelect(name: string, value: (string | number)[]): void {
            updateArgs({[name]: value})
        }

        return (
            <Select
                id={id}
                name={name}
                values={number}
                onSelect={handleSelect}
                options={options}
                label={label}
                placeholder={placeholder}
            />
        )
    }
}

export const stringsAndNumbers: Story = {
    args: {
        name: "option",
        id: "option",
        values: [],
        onSelect: () => {},
        options: [
            "BMW",
            2,
            "Mercedes",
            4
        ],
        label: "select",
        placeholder: "Select one"
    },
    render: () => {
        const [{name, id, option, options, label, placeholder}, updateArgs] = useArgs()

        function handleSelect(name: string, value: (string | number)[]): void {
            updateArgs({[name]: value})
        }

        return (
            <Select
                id={id}
                name={name}
                values={option}
                onSelect={handleSelect}
                options={options}
                label={label}
                placeholder={placeholder}
            />
        )
    }
}

export const longPlaceholder: Story = {
    args: {
        name: "car",
        id: "car",
        values: [],
        onSelect: () => {},
        options: [
            "BMW",
            "Audi",
            "Mercedes",
            "Volkswagen"
        ],
        label: "select",
        placeholder: "Choose your favorite car brand"
    },
    render: () => {
        const [{name, id, car, options, label, placeholder}, updateArgs] = useArgs()

        function handleSelect(name: string, value: (string | number)[]): void {
            updateArgs({[name]: value})
        }

        return (
            <Select
                id={id}
                name={name}
                values={car}
                onSelect={handleSelect}
                options={options}
                label={label}
                placeholder={placeholder}
            />
        )
    }
}

export const longList: Story = {
    args: {
        name: "car",
        id: "car",
        values: [],
        onSelect: () => {},
        options: [
            "BMW",
            "Audi",
            "Mercedes",
            "Volkswagen",
            "Citroën",
            "Opel",
            "Ford",
            "Toyota",
            "Nissan",
            "Pagani",
            "Koeningsegg",
            "Ferrari",
            "Lamborghini",
            "Bugatti"
        ],
        label: "select",
        placeholder: "Favorite car"
    },
    render: () => {
        const [{name, id, car, options, label, placeholder}, updateArgs] = useArgs()

        function handleSelect(name: string, value: (string | number)[]): void {
            updateArgs({[name]: value})
        }

        return (
            <Select
                id={id}
                name={name}
                values={car}
                onSelect={handleSelect}
                options={options}
                label={label}
                placeholder={placeholder}
            />
        )
    }
}

export const disabled: Story = {
    args: {
        name: "car",
        id: "car",
        values: [],
        onSelect: () => {},
        options: [
            "BMW",
            "Audi",
            "Mercedes",
            "Volkswagen"
        ],
        label: "select",
        placeholder: "Favorite car",
        disabled: true
    },
    render: () => {
        const [{name, id, car, options, label, placeholder, disabled}, updateArgs] = useArgs()

        function handleSelect(name: string, value: (string | number)[]): void {
            updateArgs({[name]: value})
        }

        return (
            <Select
                id={id}
                name={name}
                values={car}
                onSelect={handleSelect}
                options={options}
                label={label}
                placeholder={placeholder}
                disabled={disabled}
            />
        )
    }
}

export const multiple: Story = {
    args: {
        name: "colours",
        id: "colours",
        values: [],
        onSelect: () => {},
        options: [
            "Red",
            "Blue",
            "Green",
            "Yellow"
        ],
        label: "select",
        placeholder: "Choose a color",
        multiple: true
    },
    render: () => {
        const [{name, id, colours, options, label, placeholder, multiple}, updateArgs] = useArgs()

        function handleSelect(name: string, value: (string | number)[]): void {
            updateArgs({[name]: value})
        }

        return (
            <Select
                id={id}
                name={name}
                values={colours}
                onSelect={handleSelect}
                options={options}
                label={label}
                placeholder={placeholder}
                multiple={multiple}
            />
        )
    }
}

export const Description: Story = {
    args: {
        name: "car",
        id: "car",
        values: [],
        onSelect: () => {},
        options: [
            "BMW",
            "Audi",
            "Mercedes",
            "Volkswagen"
        ],
        label: "select",
        placeholder: "Favorite car",
        description: "Select your favorite car brand."
    },
    render: () => {
        const [{name, id, car, options, label, placeholder, description}, updateArgs] = useArgs()

        function handleSelect(name: string, value: (string | number)[]): void {
            updateArgs({[name]: value})
        }

        return (
            <Select
                id={id}
                name={name}
                values={car}
                onSelect={handleSelect}
                options={options}
                label={label}
                placeholder={placeholder}
                description={description}
            />
        )
    }
}

