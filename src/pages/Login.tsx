import React from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { LinkButton } from "../components/LinkButton";
import { TextInput } from "../components/TextInput";
import icon from "../cargo.svg";
import { Router } from "react-router-dom";

export const Login: React.FC = () => {
    return (
        <div>
            <Card icon={icon} title="Meus pedidos">
                <div className="mb-2">
                    <TextInput label="Email" type="email" />
                    <TextInput label="Password" type="password" />
                </div>

                <Button text="Entrar" />                
                <div className="center">
                    <LinkButton url="/forgot" text="Esqueceu sua senha?" />
                    <LinkButton url="/contact" text="Dificuldades para entrar?" />
                </div>
            </Card>
        </div>
    );
}