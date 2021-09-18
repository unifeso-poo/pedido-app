import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

interface Menu {
    title: any;
    bg: any;
    text: any;
    link: any;
}

export const Home: React.FC = () => {
    const menu:Menu[] = [
        { title: "Clientes", bg: "dark", text: "white", link: "/clientes" },
        { title: "Pedidos", bg: "primary", text: "white", link: "/pedidos" },
        { title: "Produtos", bg: "secondary", text: "white", link: "/produtos" },
        { title: "Financeiro", bg: "info", text: "white", link: "/financeiro" },
        { title: "Formas de pagamento", bg: "danger", text: "white", link: "/formas-pagamento" }
    ];

    const history = useHistory();

    return (
        <div className="vh-100 d-flex align-items-center justify-content-center">
            <Container>
                <Row xs={2} className="g-4">
                    {menu.map((m, i) => (
                        <Col key={i}>
                            <Card
                                bg={m.bg}
                                text={m.text}
                                onClick={(e) => history.push(m.link)}>
                                <Card.Body>
                                    <Card.Title>{m.title}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}