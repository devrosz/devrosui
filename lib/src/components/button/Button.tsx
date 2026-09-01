import React from 'react'
import { JSX } from 'react'
import './button.css'

// Style: visual styling of the button.
// disabled: allows button to be clicked.
// onClick: callback function when button is clicked.
// children: can be plain text, an icon or a combination of both.
type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant?: "primary" | "secondary" | "tertiary" | "danger",
  disabled?: boolean,
  onClick?: () => void,
  children: string | JSX.Element
}

// Rounded button component with multiple variants.
export default function Button({
    variant="primary",
    disabled=false, 
    onClick,
    children,
    ...props
}: ButtonProps) {
  return (
    <button
        className={"custom-button " + variant}
        disabled={disabled}
        onClick={onClick}
        {...props}
    >
        {children}
    </button>
  )
}
