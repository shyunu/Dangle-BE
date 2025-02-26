import React from "react";
import "../styles/components/Button.css";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button", disabled = false, className = "" }) => {
    return (
        <button className={`custom-button ${className}`} onClick={onClick} type={type} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
