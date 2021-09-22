import React, { useState } from "react";
import { Container, Form, Navbar, FormControl, Button, Collapse, ListGroup, ButtonGroup, Row, Col } from "react-bootstrap";
import Logo from "../logo.svg";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import IProduto from "../model/IProduto";

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

class FiltroProduto {
  id: number | null;
  nome: string;
  private _precoMaximo: number;
  private _precoMinimo: number;
  private _quantidadeMaxima: number;
  private _quantidadeMinima: number;
  constructor(filtroProduto: FiltroProduto | null = null) {
    this.id = filtroProduto ? filtroProduto.id : null;
    this.nome = filtroProduto ? filtroProduto.nome : "";
    this._precoMaximo = filtroProduto ? filtroProduto.precoMaximo : Infinity;
    this._precoMinimo = filtroProduto ? filtroProduto.precoMinimo : 0;
    this._quantidadeMaxima = filtroProduto ? filtroProduto.quantidadeMaxima : Infinity;
    this._quantidadeMinima = filtroProduto ? filtroProduto.quantidadeMinima : 0;
  }

  get precoMaximo(): number {
    return this._precoMaximo;
  }

  set precoMaximo(precoMaximo: number) {
    if (isNaN(precoMaximo) || precoMaximo < 0) {
      this._precoMaximo = Infinity;
      return;
    }
    this._precoMaximo = precoMaximo;
  }

  get precoMinimo(): number {
    return this._precoMinimo;
  }

  set precoMinimo(precoMinimo: number) {
    if (isNaN(precoMinimo) || precoMinimo < 0) {
      console.log("precoMinimo invalido");
      this._precoMinimo = 0;
      return;
    }
    this._precoMinimo = precoMinimo;
  }

  get quantidadeMaxima() {
    return this._quantidadeMaxima;
  }

  set quantidadeMaxima(quantidadeMaxima: number) {
    if (isNaN(quantidadeMaxima) || quantidadeMaxima < 0) {
      this._quantidadeMaxima = Infinity;
      return;
    }
    this._quantidadeMaxima = quantidadeMaxima;
  }

  get quantidadeMinima() {
    return this._quantidadeMinima;
  }

  set quantidadeMinima(quantidadeMinima: number) {
    if (isNaN(quantidadeMinima) || quantidadeMinima < 0) {
      this._quantidadeMinima = 0;
      return;
    }
    this._quantidadeMinima = quantidadeMinima;
  }

  comparaProduto(produto: IProduto) {
    let id = !this.id || (this.id && produto.id == this.id);
    let nome =
      !(this.nome && produto.nome && this.nome.length > 0) ||
      (this.nome && produto.nome && produto.nome.toLowerCase().includes(this.nome.toLowerCase()));
    console.log("this.precoMinimo " + this.precoMinimo);
    let preco = produto.preco <= this.precoMaximo && produto.preco >= this.precoMinimo;
    let quantidade = produto.quantidadeDisponivel <= this.quantidadeMaxima && produto.quantidadeDisponivel >= this.quantidadeMinima;
    return id && nome && preco && quantidade;
    // id && nome && preco && quantidade
  }
}

export const Produtos: React.FC = () => {
  const history = useHistory();
  const { isLoading, error, result } = useQuery<IProduto[]>("/produtos");
  const [filtroProduto, setFiltroProduto] = useState<FiltroProduto>(new FiltroProduto());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const filtroProdutoTemporario = new FiltroProduto(filtroProduto);

  const open = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar bg="dark">
        <Container className="justify-content-center flex-column">
          <Navbar.Brand onClick={() => history.goBack()}>
            <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Pedidos logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Row className="h-100 ">
        <Col className="d-flex justify-content-center col-4 bg-dark h-100">
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

              <Button variant="info" className="text-light text-bold  sm" onClick={() => setFiltroProduto(filtroProdutoTemporario)}>
                Pesquisar
              </Button>
            </Form>

            <Button
              variant="outline-info"
              className=" m-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="example-collapse-text"
              aria-expanded={isOpen}
            >
              Filtrar
            </Button>
          </Container>
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
