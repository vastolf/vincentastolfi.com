import React, { ButtonHTMLAttributes } from 'react'
import './styles.css'

type ButtonProps = {
    className?: string,
    ariaLabel?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: JSX.Element | JSX.Element[];
    type?: "button" | "submit";
    disabled?: boolean;
};

const Button = ({
    className,
    ariaLabel,
    children,
    onClick,
    type = "submit",
    disabled
    } :  ButtonProps) => {

    return (
        <button aria-label={ariaLabel} className={className} type={type} disabled={disabled} onClick={onClick}>{children}</button>
    )
}

export default Button
