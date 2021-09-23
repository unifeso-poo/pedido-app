import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useQuery } from "../hooks/useQuery";
import json_pagamentos from '../data/meios_pagamento.json';

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
  // Para uso real, descomentar as linhas abaixo
  // const { error, result: pagamentos } = useQuery<PagamentoAPIResult>('/meiosPagamento');
  /* if (error) {
   *   return <div className="alert alert-danger">{error.message}</div>
   * } */

  // Para uso real, apagar as linhas abaixo
  const pagamentos: PagamentoAPIResult = {
    data: [
      {
        id: 1,
        nome: "Cartão 3x",
        codigo: "cartao_3x",
        aliquotaDesconto: 0,
        parcelas: 3
      },
      {
        id: 2,
        nome: "Pix",
        codigo: "pix",
        aliquotaDesconto: 5,
        parcelas: 1
      },
      {
        id: 3,
        nome: "Transferência",
        codigo: "transferencia",
        aliquotaDesconto: 5,
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

  const onClickEvents: any = {
    'pix': () => alert('pix'),
    'transferencia': () => alert('transferencia'),
    'cartao_3x': () => alert('cartão')
  }

  return (
    <>
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
