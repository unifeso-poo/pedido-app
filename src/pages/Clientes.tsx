import React from "react";
import { Spinner, Table } from "react-bootstrap";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

interface Clientes {
  id: string;
  nome: string;
  tipo: string;
  cpfCnpj: string;
}

export const Clientes: React.FC = () => {
  const history = useHistory();
  const { isLoading, error, result } = useQuery<Clientes[]>("/clientes");

  return isLoading ? <Spinner animation="border" />
  : <Table striped borderless hover variant="dark">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>CPF/CNPJ</th>
            </tr>
          </thead>
          <tbody>
            {error && (
              <tr>
                <td colSpan={4}>{error.message}</td>
              </tr>
            )}
            {result?.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{cliente.tipo}</td>
                <td>{cliente.cpfCnpj}</td>
              </tr>
            ))}
          </tbody>
    </Table>;
};
