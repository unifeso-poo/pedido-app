import React from "react";
import { Container, Navbar, Table } from "react-bootstrap";
import Logo from "../logo.svg";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

interface Produto {
    id: number;
    nome: string;
    preco: number;
    quantidadeDisponivel: number;
}

export const Produtos: React.FC = () => {
    const history = useHistory();    
    const { isLoading, error, result } = useQuery<Produto[]>('/produtos');

    return (
        <div>
            <Navbar bg="dark">
                <Container className="justify-content-center">
                    <Navbar.Brand onClick={() => history.goBack()}>
                        <img
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Pedidos logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade Disponível</th>
                    </tr>
                </thead>
                <tbody>
                    {error && <tr><td colSpan={3}>{error.message}</td></tr>}
                    {result?.map(produto => (
                        <tr onClick={() => history.push(`/produtos/${produto.id}`)}
                            key={produto.id}>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.quantidadeDisponivel}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}