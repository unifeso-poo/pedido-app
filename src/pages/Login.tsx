import React from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { LinkButton } from "../components/LinkButton";
import { TextInput } from "../components/TextInput";

export const Login: React.FC = () => {
    return (
        <div>
            <Card title="Pedidos">
                <div className="mb-2">
                    <TextInput label="Email" type="email" />
                    <TextInput label="Password" type="password" />
                </div>

                <Button text="Entrar" />                
                <div className="center">
                    <LinkButton text="Esqueceu sua senha?" />
                    <LinkButton text="Dificuldades para entrar?" />
                </div>
            </Card>
        </div>
    );
}