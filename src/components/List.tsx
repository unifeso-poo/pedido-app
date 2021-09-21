import IProduto from "../model/IProduto"

interface ICartaoDeProduto {
    produto: IProduto
}

const CartaoDeProduto:React.FC<ICartaoDeProduto> = ({produto})=>{
    return(
        
        <div className="col-sm-3 m-2" >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{`ID ${produto?.id} - ${produto?.nome}`}</h5>
                    <p className="card-text">{`Preço: ${produto?.preco}`}</p>
                    <p className="card-text">{`Quatidade Disponível: ${produto?.quantidadeDisponivel}`}</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>
        
    )
} 

export default CartaoDeProduto