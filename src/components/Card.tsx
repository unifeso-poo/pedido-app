import React from "react";

interface Props {
    title: string;
    children: React.ReactNode;
    customClass?: string;
}

export const Card: React.FC<Props> = (props) => {
    return (
        <div className={`card ${props.customClass ?? ''}`}>
            <div className="card__header">
                <h1 className="card-header__title">
                    {props.title}
                </h1>
            </div>
            <div className="card__content">
                {props.children}
            </div>
        </div>
    )
}