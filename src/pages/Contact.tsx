import React from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { LinkButton } from "../components/LinkButton";
import { TextArea, TextInput } from "../components/TextInput";
import icon from "../cargo.svg";

export const Contact: React.FC = () => {
    return (
        <Card icon={icon} title="Meus pedidos">
            <p>
                Caso esteja enfrentando dificuldades para acessar
                a central de pedidos, entre em contato conosco através
                do formulário abaixo.
            </p>
            <TextInput type="text" label="Nome" />
            <TextInput type="text" label="CPF / CNPJ" />
            <TextInput type="email" label="Email" />
            <TextInput type="phone" label="Telefone" />
            <TextArea label="Mensagem"></TextArea>
            <Button text="Enviar" />
            <div className="center">
                <LinkButton text="Voltar ao login" url="/" />
            </div>
        </Card>
    );
}