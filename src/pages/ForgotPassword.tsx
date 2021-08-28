import React from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { LinkButton } from "../components/LinkButton";
import { TextInput } from "../components/TextInput";
import icon from "../cargo.svg";

export const ForgotPassword: React.FC = () => {
    return (
        <Card icon={icon} title="Meus pedidos">
            <p>
                Informe seu email e caso exista uma conta com esse email,
                você receberá um email com um link para recuperar sua senha.
            </p>
            <TextInput type="email" label="Email" />
            <Button text="Redefinir sua senha" />
            <div className="center">
                <LinkButton text="Voltar ao login" url="/" />
            </div>
        </Card>
    );
}