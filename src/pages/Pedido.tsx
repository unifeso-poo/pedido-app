import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Logo from "../logo.svg";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

interface ItemProps {
    id: number;
    quantidade: number;
    valor: number;
    valorTotal: number;
}

interface IPedido {
    id: number;
    codigo: string;
    valorTotal: number;
    clienteId: number;
    itens: ItemProps[]
}

export const Pedido: React.FC = () => {
    const history = useHistory();
    const params = useParams<{id?:string}>();
    const { isLoading, error, result } = useQuery<IPedido>(`/pedidos/${params.id}`);

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
            {error && <div className="alert alert-danger">{error.message}</div>}
            <pre>{JSON.stringify(result)}</pre>
        </div>
    );
}