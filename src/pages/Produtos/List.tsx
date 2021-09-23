import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

import { useQuery } from "../../hooks/useQuery";
import { Product, ProductApiResponse } from "./types";
import { ProductCard } from "./ProductCard";
import { productsMock } from "./mocks";

import Logo from "../../logo.svg";
import './styles.scss'
export const List: React.FC = () => {
    const history = useHistory();
    const { result } = useQuery<ProductApiResponse>('produtos');

    const products: Product[] = result?.data ?? productsMock

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
            <div className="products-container">
                {products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    );
}