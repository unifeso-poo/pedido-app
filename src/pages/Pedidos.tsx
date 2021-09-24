import React from "react";
import { Container, Navbar, Table } from "react-bootstrap";
import Logo from "../logo.svg";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

const data = [
    {
      "id": 1,
      "codigo": "ped_1",
      "valorTotal": 439900,
      "clienteId": 1,
      "dataCriacao": "2021-09-17T00:00:00Z",
      "dataPagamento": "2021-09-20T00:00:00Z",
      "itens": [
        {
          "id": 1,
          "quantidade": 1,
          "valor": 439900,
          "valorTotal": 439900
        }
      ]
    }
]

interface ItemProps {
    id: number;
    quantidade: number;
    valor: number;
    valorTotal: number;
}

interface Pedidos {
    id: number;
    codigo: string;
    valorTotal: number;
    clienteId: number;
    itens: ItemProps[]
}

export const Pedidos: React.FC = () => {
    const history = useHistory();    
    const { isLoading, error, result } = useQuery<Pedidos[]>('/pedidos');

    console.log(result)
    console.log(error)

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
                        <th>Codigo</th>
                        <th>valor</th>
                        <th>Quantidade</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {error && <tr><td colSpan={4}>{error.message}</td></tr>}
                    {error == null ? (
                        result?.map(pedido => (
                        <tr key={pedido.id}>
                            <td>{pedido.codigo}</td>
                            <td>{pedido.valorTotal}</td>
                            <td>{pedido.itens[0].quantidade}</td>
                            <td><Link className="btn btn-primary" to={`/pedidos/${pedido.id}`}>Acessar</Link></td>
                        </tr>
                    ))) : (
                        data.map(pedido => (
                            <tr key={pedido.id}>
                                <td>{pedido.codigo}</td>
                                <td>{pedido.valorTotal}</td>
                                <td>{pedido.itens[0].quantidade}</td>
                                <td><Link className="btn btn-primary" to={`/pedidos/${pedido.id}`}>Acessar</Link></td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </div>
    );
}