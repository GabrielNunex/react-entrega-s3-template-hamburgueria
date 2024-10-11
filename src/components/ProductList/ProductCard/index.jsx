export const ProductCard = ({ product, addCart }) => {
    return(
        <li>
            <img src={product.img} alt={product.name} />
            <div>
                <h3 className="title3">{product.name}</h3>
                <span className="fCaption">{product.category}</span>
                <span className="fBodyH">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="cart" onClick={() => addCart(product)}>Adicionar</button>
            </div>
        </li>
    )
}