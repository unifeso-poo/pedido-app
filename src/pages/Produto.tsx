import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useMutation } from "../hooks/useMutation";
import { IProduto } from "../models/IProduto";

export const Produto: React.FC = () => {
    const history = useHistory();
    const params = useParams<{id?:string}>();
    const { isLoading, error, result } = useQuery<IProduto>(`/produtos/${params.id}`);
    const { register, handleSubmit, formState: {errors} } = useForm();
    const { isExecuting, error: mutationError, put } = useMutation<IProduto, IProduto>(`/produtos/${params.id}`);

    const onSubmit = async (produto: IProduto) => {
        await put(produto);

        if (!isExecuting && !error) {
            history.push("/produtos");
        }
    };    

    const productCard = (
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" value={result?.id} {...register('id')} />

                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" defaultValue={result?.nome} {...register('nome')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="preco">
                        <Form.Label>Preço</Form.Label>
                        <Form.Control type="number" defaultValue={result?.preco} {...register('preco')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="quantidadeDisponivel">
                        <Form.Label>Quantidade disponível</Form.Label>
                        <Form.Control type="number" defaultValue={result?.quantidadeDisponivel} {...register('quantidadeDisponivel')} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );

    return (
        <div>
            <Container>
                { isLoading ? <p>Carregando...</p> : productCard }
            </Container>
        </div>
    );
}