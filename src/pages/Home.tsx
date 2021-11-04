import React from "react";
import { Card } from "../components/Card";
import { Cards } from "../components/Cards";

export const Home: React.FC = () => {
    return (
        <div className="content">
            <h2 className="content-title">Dashboard</h2>
            <div className="content-body">
                <Cards>
                    <Card title="Resumo financeiro do mês" isFullSize={true} />
                    <Card title="Mais vendidos" />
                    <Card title="Mais rentáveis" />
                    <Card title="Últimas atualizações" />
                    <Card title="Estoque baixo" />
                </Cards>
            </div>
        </div>
    );
}