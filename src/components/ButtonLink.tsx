import React from "react";
import './ButtonLink.scss';

interface Props {
    text: string;
    url: string;
}

export const ButtonLink: React.FC<Props> = ({text, url}) => (
    <a href={url} className="button-link">{text}</a>
);