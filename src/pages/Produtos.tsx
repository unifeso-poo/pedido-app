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
    private _precoMaximo: number 
    private _precoMinimo: number
    private _quantidadeMaxima: number
    private _quantidadeMinima: number
    constructor(filtroProduto: FiltroProduto | null = null){
        this.id = filtroProduto? filtroProduto.id : null;
        this.nome = filtroProduto? filtroProduto.nome : '';
        this._precoMaximo = filtroProduto? filtroProduto.precoMaximo : Infinity
        this._precoMinimo = filtroProduto? filtroProduto.precoMinimo : 0
        this._quantidadeMaxima = filtroProduto? filtroProduto.quantidadeMaxima : Infinity
        this._quantidadeMinima =  filtroProduto? filtroProduto.quantidadeMinima : 0
    }

    get precoMaximo(): number{
        return this._precoMaximo
    }

    set precoMaximo(precoMaximo: number){
        if(isNaN(precoMaximo) || precoMaximo<0){
            this._precoMaximo = Infinity;
            return;
        }
        this._precoMaximo = precoMaximo
    }

    get precoMinimo() : number{
        return this._precoMinimo
    }

    set precoMinimo(precoMinimo: number){
        if(isNaN(precoMinimo) || precoMinimo<0){
            console.log("precoMinimo invalido")
            this._precoMinimo = 0;
            return;
        }
        this._precoMinimo = precoMinimo
    }

    get quantidadeMaxima(){
        return this._quantidadeMaxima;
    }

    set quantidadeMaxima(quantidadeMaxima: number){
        if(isNaN(quantidadeMaxima) || quantidadeMaxima<0){
            this._quantidadeMaxima = Infinity;
            return;
        }
        this._quantidadeMaxima = quantidadeMaxima
    }

    get quantidadeMinima(){
        return this._quantidadeMinima;
    }

    set quantidadeMinima(quantidadeMinima: number){
        if(isNaN(quantidadeMinima) || quantidadeMinima<0){
            this._quantidadeMinima = 0;
            return;
        }
        this._quantidadeMinima = quantidadeMinima
    }

    comparaProduto(produto: IProduto)  {
        let id = (!this.id) || this.id && produto.id == this.id
        let nome = !(this.nome && produto.nome && this.nome.length > 0) || (this.nome && produto.nome && produto.nome.toLowerCase().includes(this.nome.toLowerCase()))
        console.log("this.precoMinimo " + this.precoMinimo)
        let preco = (produto.preco <= this.precoMaximo && produto.preco >= this.precoMinimo);
        let quantidade = produto.quantidadeDisponivel <= this.quantidadeMaxima && produto.quantidadeDisponivel >= this.quantidadeMinima;
        return id && nome && preco && quantidade;
        // id && nome && preco && quantidade
    }
}

export const Produtos: React.FC = () => {
    const history = useHistory();    
    const { isLoading, error, result } = useQuery<IProduto[]>('/produtos');
    const [ filtroProduto, setFiltroProduto] = useState<FiltroProduto>(new FiltroProduto())
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const filtroProdutoTemporario = new FiltroProduto(filtroProduto);

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
                            onInput={(e)=>{filtroProdutoTemporario.nome = (e.target as HTMLInputElement).value}}
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
                                    onInput={(e)=>{filtroProdutoTemporario.id=parseInt((e.target as HTMLInputElement).value)}}
                                />
                                <FormControl
                                    type="search"
                                    placeholder="Nome do Produto"
                                    className="mr-2 m-1 w-10"
                                    aria-label="Search"
                                    onInput={(e)=>{filtroProdutoTemporario.nome = (e.target as HTMLInputElement).value}}
                                />
                                <FormControl
                                    type="search"
                                    placeholder="Preço Mímino"
                                    className="mr-2 m-1 w-10"
                                    aria-label="Search"
                                    onInput={(e)=>{filtroProdutoTemporario.precoMinimo = parseInt((e.target as HTMLInputElement).value)}}
                                />
                                <FormControl
                                    type="search"
                                    placeholder="Preço Máximo"
                                    className="mr-2 m-1 w-10"
                                    aria-label="Search"
                                    onInput={(e)=>{filtroProdutoTemporario.precoMaximo = parseInt((e.target as HTMLInputElement).value)}}
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
