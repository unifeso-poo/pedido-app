import React, { useState } from "react";
import { Container, Form, Navbar, FormControl, Button, Collapse, ListGroup, ButtonGroup } from "react-bootstrap";
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
  precoMaximo: number;
  precoMinimo: number;
  quantidadeMaxima: number;
  quantidadeMinima: number;
  constructor() {
    this.id = null;
    this.nome = "";
    this.precoMaximo = Infinity;
    this.precoMinimo = 0;
    this.quantidadeMaxima = Infinity;
    this.quantidadeMinima = 0;
  }

  comparaProduto(produto: IProduto) {
    let id = !this.id || (this.id && produto.id == this.id);
    let nome =
      !(this.nome && produto.nome && this.nome.length > 0) ||
      (this.nome && produto.nome && produto.nome.toLowerCase().includes(this.nome.toLowerCase()));
    let filtrarPreco = this.precoMinimo && produto.preco && this.precoMaximo;
    let preco = !filtrarPreco || (produto.preco <= this.precoMaximo && produto.preco >= this.precoMinimo);
    let filtrarQuantidade = this.quantidadeMinima && produto.quantidadeDisponivel && (this.quantidadeMaxima || produto.quantidadeDisponivel);
    let quantidade =
      !filtrarQuantidade ||
      (this.quantidadeMinima &&
        produto.quantidadeDisponivel &&
        produto.quantidadeDisponivel <= this.quantidadeMaxima &&
        produto.quantidadeDisponivel >= this.quantidadeMinima);
    console.log("produto.preco " + produto.preco);
    console.log(" !filtrarPreco " + !filtrarPreco);
    return id && nome && preco;
    // id && nome && preco && quantidade
  }
}

export const Produtos: React.FC = () => {
  const history = useHistory();
  const { isLoading, error, result } = useQuery<IProduto[]>("/produtos");
  const [filtroProduto, setFiltroProduto] = useState<FiltroProduto>(new FiltroProduto());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const filtroProdutoTemporario = new FiltroProduto();

  const open = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar bg="dark">
        <Container className="justify-content-center flex-column">
          <Navbar.Brand onClick={() => history.goBack()}>
            <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Pedidos logo" />
          </Navbar.Brand>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              aria-expanded={isOpen}
              onChange={(e) => {
                filtroProdutoTemporario.nome = e.target.value;
              }}
            />
            <Button variant="outline-success" onClick={() => setFiltroProduto(filtroProdutoTemporario)}>
              Pesquisar
            </Button>
            <Button variant="outline-success" onClick={() => setIsOpen(!isOpen)} aria-controls="example-collapse-text" aria-expanded={isOpen}>
              Filtros
            </Button>
          </Form>
        </Container>
      </Navbar>

      <Container className={" m-auto"}>
        <ListGroup variant="flush" className="dark">
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
                    <Button className="" variant="success" size="sm">
                      ...
                    </Button>
                    <Button className="-4" variant="danger" size="sm">
                      X
                    </Button>
                  </ButtonGroup>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </Container>
    </div>
  );
};
