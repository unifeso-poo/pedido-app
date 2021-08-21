import React from "react";
import { isPropertySignature } from "typescript";

interface Props {
    label: string;
    type: string;
}

export const TextInput: React.FC<Props> = ({label, type}) => (
    <div className="formGroup">
        <label className="label">{label}</label>
        <input className="input" type={type} />
    </div>
);