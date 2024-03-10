import React from 'react'
import './styles.css'

interface IButtonProps {
    className?: string,
    ariaLabel?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    type?: "button" | "submit";
    disabled?: boolean;
};

const Button: React.FC<IButtonProps> = ({ className, ariaLabel, children, onClick, type = "submit", disabled }) => {
    return (
        <button aria-label={ariaLabel} className={className} type={type} disabled={disabled} onClick={onClick}>{children}</button>
    )
}

export default Button
