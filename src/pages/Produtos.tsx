import React, { useState } from "react";
import { Container, Form, Navbar, FormControl, Button, Collapse, ListGroup, ButtonGroup, Row, Col, FormGroup } from "react-bootstrap";
import Logo from "../logo.svg";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import IProduto from "../model/IProduto";
import FiltroProduto from "../utils/FiltroProduto";
import LabeledRange from "../components/LabeledRange";
import "../styles/produtos.scss"
import "bootstrap-icons/font/bootstrap-icons.css";

const data: IProduto[] = [
  {
    id: 1,
    nome: "Playstation 5",
    quantidadeDisponivel: 5,
    preco: 439900,
  },

  {
    id: 2,
    nome: "Xbox Series S",
    quantidadeDisponivel: 5,
    preco: 279900,
  },

  {
    id: 3,
    nome: "Xbox Series X",
    quantidadeDisponivel: 5,
    preco: 439900,
  },
];

export const Produtos: React.FC = () => {
  const history = useHistory();
  const { isLoading, error, result } = useQuery<IProduto[]>("/produtos");
  const [filtroProduto, setFiltroProduto] = useState<FiltroProduto>(new FiltroProduto());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const filtroProdutoTemporario = new FiltroProduto(filtroProduto);
  console.log("build isOpen? " + isOpen );
  console.log("icon: " + ("icon " + isOpen? "bi-chevron-up" : "bi-chevron-down"))
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
          <Container className="d-flex flex-column justify-content-center align-items-center">
            <Form className="sm-d-flex sm-block md-m-1 form-filtro">
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
                <Collapse in={isOpen}  className='relative'>
                  <Form className="absolute">
                    <FormControl
                      type="search"
                      placeholder="Id"
                      className=" m-1 mt-2"
                      aria-label="Id"
                      onInput={(e) => {
                        filtroProdutoTemporario.id = parseInt((e.target as HTMLInputElement).value);
                      }}
                    />
                   <LabeledRange label="Quantidade mínima" onChange={(v) => filtroProdutoTemporario.quantidadeMinima = v}/>
                   <LabeledRange label="Quantidade máxima" onChange={(v) => filtroProdutoTemporario.quantidadeMaxima = v}/>
                   <LabeledRange label="Preço Mímino" onChange={(v) => filtroProdutoTemporario.precoMinimo = v}/>
                   <LabeledRange label="Preço Máximo" onChange={(v) => filtroProdutoTemporario.precoMaximo = v}/>
                  </Form>
                </Collapse>
              </Container>
                <div className={`col-5 form-filtro-buttons d-${isOpen? "block" : "none"}`}>
                  <Button variant="info" className="text-light text-bold btn-filtro" onClick={() => setFiltroProduto(filtroProdutoTemporario)}>
                  <i className="bi-search"/> Pesquisar
                  </Button>
                  <Button
                    variant="outline-info"
                    className="form-filtro-toggler"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={isOpen}
                    title="Mais filtros"
                  >
                    <i className={`"icon ${isOpen? "bi-chevron-up" : "bi-chevron-down"}`} title="Mais Filtros"/>
                  </Button>
                </div>
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
            {data
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
