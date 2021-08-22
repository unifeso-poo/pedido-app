import React from "react";

interface Props {
    text: string;
}

export const ButtonLink: React.FC<Props> = ({text}) => (
    <a href="https://google.com" className="button-link">{text}</a>
);