import React from "react";
import "./Button.scss";

interface Props {
    text: string;
}

export const Button: React.FC<Props> = ({text}) => (
    <button className="button">{text}</button>
);