import './cardProdutos.css';

export default function CardProduto({produtos}) {
    return (
        <div className="card-produtos">
            <img src={produtos.images} />
            <h2>{produtos.title}</h2>
            <a href={`/produtos/${produtos.id}`}>Saiba mais.</a>
        </div>
    )
}