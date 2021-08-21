import React from "react";

interface Props {
    text: string;
}

export const LinkButton: React.FC<Props> = ({text}) => (
    <a className="linkButton">{text}</a>
);