import React from "react";

interface Props {
    text: string;
}

export const Button: React.FC<Props> = ({text}) => (
    <button className="button">{text}</button>
);