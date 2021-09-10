import React from "react";
import "./Button.scss";

interface Props {
    text: string;
    onClick?: () => void;
}

export const Button: React.FC<Props> = ({text, onClick}) => (
    <button className="button" onClick={onClick}>{text}</button>
);