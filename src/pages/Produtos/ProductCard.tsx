import type { FC } from "react";
import { Product } from "./types";

type ProductCardProps = {
  product: Product
}
export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card w-full" role="button">
      <div className="card-body">
        <h5 className="card-title">{product.nome}</h5>
        <div className="card-subtitle mb-2 text-muted">Valor: R$ {product.preco.toFixed(2)}</div>
        <div className="card-subtitle mb-2 text-muted">Quantidade Disponível: {product.quantidadeDisponivel}</div>
      </div>
    </div>
  )
}
