import React, { useState } from "react";
import { Container, Form, Navbar, FormControl, Button, Collapse, ListGroup, ButtonGroup, Row, Col, FormGroup } from "react-bootstrap";
import Logo from "../logo.svg";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import IProduto from "../model/IProduto";
import FiltroProduto from "../utils/FiltroProduto";
import LabeledRange from "../components/LabeledRange";

// const data: IProduto[] = [
//   {
//     id: 1,
//     nome: "Playstation 5",
//     quantidadeDisponivel: 5,
//     preco: 439900,
//   },

//   {
//     id: 2,
//     nome: "Xbox Series S",
//     quantidadeDisponivel: 5,
//     preco: 279900,
//   },

//   {
//     id: 3,
//     nome: "Xbox Series X",
//     quantidadeDisponivel: 5,
//     preco: 439900,
//   },
// ];

export const Produtos: React.FC = () => {
  const history = useHistory();
  const { isLoading, error, result } = useQuery<IProduto[]>("/produtos");
  const [filtroProduto, setFiltroProduto] = useState<FiltroProduto>(new FiltroProduto());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const filtroProdutoTemporario = new FiltroProduto(filtroProduto);

  const open = () => setIsOpen(!isOpen);
  return (
    <div className="overflow-hidden">
      <Navbar bg="dark">
        <Container className="justify-content-center flex-column">
          <Navbar.Brand onClick={() => history.goBack()}>
            <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Pedidos logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Row className=" ">
        <Col className="d-flex justify-content-center flex-column col-4 bg-dark  w-100">
          <Container className="d-flex flex-column justify-content-end">
            <Form className="d-flex m-1">
              <Container>
                <FormControl
                  type="search"
                  placeholder="Produto"
                  className="m-1"
                  aria-label="Search"
                  aria-expanded={isOpen}
                  onInput={(e) => {
                    filtroProdutoTemporario.nome = (e.target as HTMLInputElement).value;
                  }}
                />
                <Collapse in={isOpen}>
                  <Form className="">
                    <FormControl
                      type="search"
                      placeholder="Id"
                      className=" m-1 "
                      aria-label="Produto"
                      onInput={(e) => {
                        filtroProdutoTemporario.id = parseInt((e.target as HTMLInputElement).value);
                      }}
                    />
                   <LabeledRange label="Quantidade mínima"/>
                   <FormGroup>

                    <FormControl
                      type="search"
                      placeholder="Quantidade máxima"
                      className=" m-1"
                      aria-label="Search"
                      onInput={(e) => {
                        filtroProdutoTemporario.quantidadeMaxima = parseInt((e.target as HTMLInputElement).value);
                      }}
                      />
                      </FormGroup>
                    <FormControl
                      type="search"
                      placeholder="Preço Mímino"
                      className=" m-1 "
                      aria-label="Search"
                      onInput={(e) => {
                        filtroProdutoTemporario.precoMinimo = parseInt((e.target as HTMLInputElement).value);
                      }}
                    />
                    <FormControl
                      type="search"
                      placeholder="Preço Máximo"
                      className=" m-1"
                      aria-label="Search"
                      onInput={(e) => {
                        filtroProdutoTemporario.precoMaximo = parseInt((e.target as HTMLInputElement).value);
                      }}
                    />
                  </Form>
                </Collapse>
              </Container>
              <Container className="col-4">
                <ButtonGroup className="col-5">
                  <Button variant="info" className="text-light text-bold w-100 " onClick={() => setFiltroProduto(filtroProdutoTemporario)}>
                    Pesquisar
                  </Button>
                  <Button
                    variant="outline-info"
                    className=""
                    onClick={() => setIsOpen(!isOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={isOpen}
                  >
                    Filtrar
                  </Button>
                </ButtonGroup>
              </Container>
            </Form>
          </Container>
          <div className="h-100"></div>
        </Col>
        <Col className="d-flex flex-column justify-content-center col-8 w-66 m-auto">
          <h3 className="m-auto mt-4">Lista de Produtos</h3>
          <ListGroup variant="flush" className="dark w-100 p-3">
            <ListGroup.Item className="d-flex justify-content-between m-1 rounded-3 bg-dark text-light">
              <h5>{`ID`}</h5>
              <h5>{`Produto`}</h5>
              <h5>{`Preço`}</h5>
              <h5>{`Quantidade`}</h5>
              <div></div>
            </ListGroup.Item>
            {result
              ?.filter((produto) => filtroProduto.comparaProduto(produto))
              .map((produto) => {
                console.log("passou no filtro");
                console.log(produto);
                return (
                  <ListGroup.Item className="d-flex justify-content-between text-center m-1 rounded-3">
                    <p>{`${produto?.id}`}</p>
                    <p>{`${produto?.nome}`}</p>
                    <p>{`R$ ${produto?.preco / 100}`}</p>
                    <p>{`${produto?.quantidadeDisponivel}`}</p>
                    <ButtonGroup aria-label="Basic example">
                      <Button className="px-3 mx-1 text-light" variant="info" size="sm">
                        ...
                      </Button>
                      <Button className="px-3" variant="outline-info" size="sm">
                        X
                      </Button>
                    </ButtonGroup>
                  </ListGroup.Item>
                );
              })}
          </ListGroup>
        </Col>
      </Row>
      <Container className={" m-auto"}></Container>
    </div>
  );
};
