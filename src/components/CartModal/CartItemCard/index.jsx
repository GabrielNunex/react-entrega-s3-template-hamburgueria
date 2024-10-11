import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, removeCart }) => {
   return (
      <li>
         <div>
            <img src={product.img} alt={product.name} />
            <div>
               <h3 className="title3">{product.name}</h3>
               <p className="fBodyH">R$ {product.price.toFixed(2)}</p>
            </div>
         </div>
         <button aria-label="delete" title="Remover item">
            <MdDelete size={25} onClick={() => removeCart(product.id)}/>
         </button>
      </li>
   );
};
