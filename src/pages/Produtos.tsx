import React from "react";
import { Table } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { IProduto } from "../models/IProduto";

export const Produtos: React.FC = () => {
    const history = useHistory();
    const { isLoading, error, result } = useQuery<IProduto[]>('/produtos');

    return (            
        <Table striped borderless hover variant="dark">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Quantidade Disponível</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {error && <tr><td colSpan={4}>{error.message}</td></tr>}
                {result?.map(produto => (
                    <tr key={produto.id}>
                        <td>{produto.nome}</td>
                        <td>{produto.preco}</td>
                        <td>{produto.quantidadeDisponivel}</td>
                        <td><Link className="btn btn-primary" to={`/produtos/${produto.id}`}>Acessar</Link></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}