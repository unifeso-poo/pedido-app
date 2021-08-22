import React from "react";
import './Card.scss';

interface Props {
    title: string;
    children: React.ReactNode;
    customClass?: string;
}

export const Card: React.FC<Props> = (props) => {
    return (
        <div className={`card ${props.customClass ?? ''}`}>
            <div className="card__header">
                <div className="card-title">
                    {props.title}
                </div>
            </div>
            <div className="card__content">
                {props.children}
            </div>
        </div>
    )
}