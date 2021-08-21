import React from "react";

interface Props {
    title: string;
    customClass?: string;
    children: React.ReactNode;
}

export const Card: React.FC<Props> = (props) => {
    return (
        <div className={`card ${props.customClass}`}>
            <div className="card-header">
                <h1 className="card-title">
                    {props.title}
                </h1>
            </div>
            <div className="card-block">
                {props.children}
            </div>
        </div>
    )
}