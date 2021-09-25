import React, { useState } from "react";
 import { Card, Col, Container, Row } from "react-bootstrap";
 import { useQuery } from "../hooks/useQuery";
 import { TransferenciaModal } from '../components/TransferenciaModal';
 import { CartaoModal } from '../components/CartaoModal';
 import {Pix} from '../components/Pix';
 import {GeraBoleto} from '../components/GeraBoleto';

 interface PagamentoDatum {
     id: number,
     nome: string,
     codigo: string,
     aliquotaDesconto: number,
     parcelas: number
 }

 interface PagamentoAPIResult {
     data: PagamentoDatum[]
 }

 export const FormaPagamento: React.FC = () => {

     const pagamentos: PagamentoAPIResult = {
         data: [
             {
                 id: 1,
                 nome: "Cartão 12x",
                 codigo: "cartao_12x",
                 aliquotaDesconto: 0,
                 parcelas: 12
             },
            
             {
                 id: 2,
                 nome: "Transferência",
                 codigo: "transferencia",
                 aliquotaDesconto: 5,
                 parcelas: 1
             },
             {
                id: 3,
                nome: "Pix",
                codigo: "pix",
                aliquotaDesconto: 5,
                parcelas: 1
            },
            {
                id: 4,
                nome: "Boleto",
                codigo: "boleto",
                aliquotaDesconto: 0,
                parcelas: 1
            }

         ]
     };

     const makeCards = (title: string, onClick: () => void) => (
         <Card bg="dark" text="white" onClick={onClick}>
             <Card.Body>
                 <Card.Text>
                     {title}
                 </Card.Text>
             </Card.Body>
         </Card>
     )

     const [transferenciaModalOpen, setTransferenciaModalOpen] = useState(false);
     const [CartaoModalModalOpen, setCartaoModalModalOpen] = useState(false);
     const [PixOpen, setPixOpen] = useState(false);
     const [GeraBoletoOpen, setGeraBoletoOpen] = useState(false);



     const onClickEvents: any = {
         'transferencia': () => setTransferenciaModalOpen(true),
         'cartao_12x': () => setCartaoModalModalOpen(true),
         'pix': () => setPixOpen(true),
         'GeraBoleto': () => setGeraBoletoOpen(true)
     }

     return (
         <>
             <TransferenciaModal isOpen={transferenciaModalOpen} setIsOpen={setTransferenciaModalOpen} />
             <CartaoModal isOpen={CartaoModalModalOpen} setIsOpen={setCartaoModalModalOpen} />

             <Pix isOpen={PixOpen} setIsOpen={setPixOpen} />
             <GeraBoleto isOpen={GeraBoletoOpen} setIsOpen={setGeraBoletoOpen} />

             <div className="mt-5 d-flex align-items-center justify-content-center">
                 <h1>Selecione a forma de pagamento</h1>
             </div>
             <div className="mt-5 d-flex align-items-center justify-content-center">
                 <Container>
                     <Row xs={12} className="g-4">
                         <Col>
                             {pagamentos.data.map((pagamento) => makeCards(pagamento.nome, onClickEvents[pagamento.codigo]))}
                         </Col>
                     </Row>
                 </Container>
             </div>
         </>
     );
 }