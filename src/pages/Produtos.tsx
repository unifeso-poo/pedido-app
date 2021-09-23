import React from "react";
import { Container, Navbar, Table } from "react-bootstrap";
import Logo from "../logo.svg";
import { Link, useHistory } from "react-router-dom";
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
        </div>
    );
}
