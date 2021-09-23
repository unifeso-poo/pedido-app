
export type Product = {
  id: number;
  nome: string;
  quantidadeDisponivel: number;
  preco: number;
}

export type ProductApiResponse = {
  data: Product[];
}


