import React, { useState } from "react";
import { Container, Form, Navbar, FormControl, Button, Collapse, ButtonGroup, Table } from "react-bootstrap";
import Logo from "../logo.svg";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import IProduto from "../model/IProduto";
import FiltroProduto from "../utils/FiltroProduto";
import LabeledRange from "../components/LabeledRange";
import "../styles/produtos.scss";
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
  console.log("build isOpen? " + isOpen);
  console.log("icon: " + ("icon " + isOpen ? "bi-chevron-up" : "bi-chevron-down"));
  return (
    <div className="overflow-hidden">
      <Navbar bg="dark">
        <Container className="justify-content-center flex-column">
          <Navbar.Brand onClick={() => history.goBack()}>
            <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Pedidos logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="d-flex md-flex-column justify-content-end bg-dark w-200 ">
        <Form className="sm-d-flex md-block md-m-1 col-5 m-auto">
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
            <Collapse in={isOpen} className="relative">
              <Form className="absolute">
                <FormControl
                  type="search"
                  placeholder="Id"
                  className=" m-1 "
                  aria-label="Produto"
                  onInput={(e) => {
                    filtroProdutoTemporario.id = parseInt((e.target as HTMLInputElement).value);
                  }}
                />
                <LabeledRange label="Quantidade mínima" onChange={(v) => (filtroProdutoTemporario.quantidadeMinima = v)} />
                <LabeledRange label="Quantidade máxima" onChange={(v) => (filtroProdutoTemporario.quantidadeMaxima = v)} />
                <LabeledRange label="Preço Mímino" onChange={(v) => (filtroProdutoTemporario.precoMinimo = v)} />
                <LabeledRange label="Preço Máximo" onChange={(v) => (filtroProdutoTemporario.precoMaximo = v)} />
              </Form>
            </Collapse>
          </Container>
          <Container className=" d-flex justify-content-center mt-2 mb-4">
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
                Filtros
              </Button>
            </ButtonGroup>
          </Container>
        </Form>
      </div>
      <div className="w-100">
        <h3 className="m-auto mt-4 mb-3 text-center">Lista de Produtos</h3>
        <Table responsive="sm bg-light col-8 m-auto rounded">
          <thead className="bg-dark text-light rounded">
            <tr>
              <th className="text-center">{`ID`}</th>
              <th className="text-center">{`Produto`}</th>
              <th className="text-center">{`Preço`}</th>
              <th className="text-center">{`Quantidade`}</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {data
              ?.filter((produto) => filtroProduto.comparaProduto(produto))
              .map((produto) => {
                return (
                  <>
                    <tr>
                      <td className="text-center">{`${produto?.id}`}</td>
                      <td className="text-center">{`${produto?.nome}`}</td>
                      <td className="text-center">
                        {Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(produto?.preco / 100)}
                      </td>
                      <td className="text-center">{`${produto?.quantidadeDisponivel}`}</td>
                      <td className="text-center">
                        <Button className="text-light" variant="info" size="sm">
                          ...
                        </Button>
                      </td>
                    </tr>
                    <Collapse in={isOpen}>
                      <tr>
                        <td>{`${produto?.id}`}</td>
                        <td>{`${produto?.nome}`}</td>
                        <td>{Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(produto?.preco / 100)}</td>
                        <td>{`${produto?.quantidadeDisponivel}`}</td>
                        <td>
                          <Button className="px-3 mx-1 text-light" variant="info" size="sm">
                            ...
                          </Button>
                        </td>
                      </tr>
                    </Collapse>
                  </>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
