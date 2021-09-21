import React, { useState } from "react";
import { Container, Form, Navbar, Nav, Table, FormControl, Button, Accordion, Collapse, Col } from "react-bootstrap";
import Logo from "../logo.svg";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import IProduto from "../model/IProduto"
import CartaoDeProduto from '../components/List'





const data: IProduto[] = [
    {
        id: 1,
        nome: "Playstation 5",
        quantidadeDisponivel: 5,
        preco: 439900
    },
    
    {
        id: 2,
        nome: "Xbox Series S",
        quantidadeDisponivel: 5,
        preco: 279900
    },
   
    {
        id: 3,
        nome: "Xbox Series X",
        quantidadeDisponivel: 5,
        preco: 439900
    }
  ]


class FiltroProduto{
    id : number|null
    nome : string
    precoMaximo: number 
    precoMinimo: number
    quantidadeMaxima: number
    quantidadeMinima: number
    constructor(){
        this.id = null
        this.nome = ''
        this.precoMaximo = Infinity 
        this.precoMinimo = 0
        this.quantidadeMaxima = Infinity
        this.quantidadeMinima = 0
    }

    comparaProduto(produto: IProduto)  {
        let id = (!this.id) || this.id && produto.id == this.id
        let nome = !(this.nome && produto.nome && this.nome.length > 0) || (this.nome && produto.nome && produto.nome.toLowerCase().includes(this.nome.toLowerCase()))
        let filtrarPreco = (this.precoMinimo && produto.preco && this.precoMaximo)
        let preco = !filtrarPreco || (produto.preco <= this.precoMaximo && produto.preco >= this.precoMinimo);
        let filtrarQuantidade = (this.quantidadeMinima && produto.quantidadeDisponivel) && (this.quantidadeMaxima || produto.quantidadeDisponivel)
        let quantidade = !filtrarQuantidade || (this.quantidadeMinima && produto.quantidadeDisponivel && produto.quantidadeDisponivel <= this.quantidadeMaxima && produto.quantidadeDisponivel >= this.quantidadeMinima);
        console.log("produto.preco " + produto.preco)
        console.log(" !filtrarPreco " +  !filtrarPreco)
        return id && nome && preco;
        // id && nome && preco && quantidade
    }
}

export const Produtos: React.FC = () => {
    const history = useHistory();    
    const { isLoading, error, result } = useQuery<IProduto[]>('/produtos');
    const [ filtroProduto, setFiltroProduto] = useState<FiltroProduto>(new FiltroProduto())
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const filtroProdutoTemporario = new FiltroProduto();

    const open = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar bg="dark">
                <Container className="justify-content-center flex-column">
                    <Navbar.Brand onClick={() => history.goBack()}>
                        <img
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Pedidos logo"
                        />
                    </Navbar.Brand>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                            aria-expanded={isOpen}
                            onChange={(e)=>{filtroProdutoTemporario.nome = e.target.value}}
                        />
                        <Button variant="outline-success" onClick={()=>setFiltroProduto(filtroProdutoTemporario)}>Pesquisar</Button>
                        <Button
                            variant="outline-success"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-controls="example-collapse-text"
                            aria-expanded={isOpen}
                        >
                            Filtros
                        </Button>
                    </Form>
                    <Container className='d-block align-itens-left'>
                        
                        <Collapse in={isOpen}>
                            <Form>
                                <FormControl
                                    type="search"
                                    placeholder="Id"
                                    className="mr-2 m-1 w-10"
                                    aria-label="Search"
                                    onChange={(e)=>{filtroProdutoTemporario.id= parseInt(e.target.value)}}
                                />
                                <FormControl
                                    type="search"
                                    placeholder="Nome do Produto"
                                    className="mr-2 m-1 w-10"
                                    aria-label="Search"
                                    onChange={(e)=>{filtroProdutoTemporario.nome = e.target.value}}
                                />
                                <FormControl
                                    type="search"
                                    placeholder="Preço Mímino"
                                    className="mr-2 m-1 w-10"
                                    aria-label="Search"
                                    onChange={(e)=>{filtroProdutoTemporario.precoMinimo = parseInt(e.target.value)}}
                                />
                                <FormControl
                                    type="search"
                                    placeholder="Preço Máximo"
                                    className="mr-2 m-1 w-10"
                                    aria-label="Search"
                                    onChange={(e)=>{filtroProdutoTemporario.precoMaximo = parseInt(e.target.value)}}
                                />

                                <Button variant="outline-success" onClick={()=>setFiltroProduto(filtroProdutoTemporario)}>Filtrar</Button>
                           </Form>
                        </Collapse>
                    </Container>
                </Container>
            </Navbar>
            
            <Container className={'d-flex flex-wrap justify-content-center row ' }>
                {data?.filter(produto => filtroProduto.comparaProduto(produto)).map( 
                        produto =>{ 
                        console.log("passou no filtro");
                        console.log(produto);
                        return <CartaoDeProduto produto={produto}/>;
                        }
                    )
                }
            </Container>
        </div>
    );
}
