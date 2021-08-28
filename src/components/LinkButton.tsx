import React from "react";
import "./LinkButton.scss";
import { Link } from "react-router-dom";

interface Props {
    text: string;
    url: string;
}

export const LinkButton: React.FC<Props> = ({text, url}) => (
    <Link to={url} className="linkButton">{text}</Link>
);