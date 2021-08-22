import React from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { ButtonLink } from "../components/ButtonLink";
import { TextInput } from "../components/TextInput";

export const Login: React.FC = () => {
    return (
        <div className="login">
            <Card title="Pedidos" customClass="login__box">
                <TextInput label="Email" type="email" />
                <TextInput label="Password" type="password" />
                <Button text="Entrar" />
                <div className="center">
                    <ButtonLink text="Esqueceu sua senha?" />
                    <ButtonLink text="Dificuldades para entrar?" />
                </div>
            </Card>
        </div>
    );
}