import React from "react";
import "./TextInput.scss";

interface Props {
    label: string;
    type?: string;
}

export const TextInput: React.FC<Props> = ({label, type}) => (
    <div className="form">
        <input className="form__input" type={type} placeholder=" " />
        <label className="form__label">{label}</label>
    </div>
);

export const TextArea: React.FC<Props> = ({label}) => (
    <div className="form">
        <textarea className="form__input" placeholder=" "></textarea>
        <label className="form__label">{label}</label>
    </div>
);