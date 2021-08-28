import React from "react";
import "./Card.scss";

interface Props {
    title: string;
    customClass?: string;
    icon?: string;
    children: React.ReactNode;
}

export const Card: React.FC<Props> = (props) => {
    let iconTag = null;
    if (props.icon) {
        iconTag = (
            <picture className="picture card__header-icon">
                <img className="picture__img" src={props.icon} />
            </picture>
        );
    }
    return (
        <div className={`card ${props.customClass}`}>
            <div className="card__header">
                {iconTag}           
                <h1 className="card__header-title">
                    {props.title}
                </h1>
            </div>
            <div className="card__content">
                {props.children}
            </div>
        </div>
    )
}