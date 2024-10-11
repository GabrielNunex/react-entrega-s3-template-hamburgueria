import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { useEffect, useRef } from "react";

export const CartModal = ({ cartList, setIsOpen, removeCart, cleanCart }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const modalRef = useRef(null);
   
   useEffect(() => {
      const handleKeyPress = (event) => {
         if (event.key === "Enter" || event.key === "Escape" || event.key === "Esc") {
            setIsOpen(false);
         }
      };

      const handleClickOutside = (event) => {
         if (!modalRef.current?.contains(event.target)) {
            setIsOpen(false);
         }
      };

      window.addEventListener("keydown", handleKeyPress);
      window.addEventListener("mousedown", handleClickOutside);

      return () => {
         window.removeEventListener("keydown", handleKeyPress);
         window.removeEventListener("mousedown", handleClickOutside);
      };
   }, [setIsOpen]);

   return (
      <div role="dialog">
         <div  className="modalBox" ref={modalRef}>
            <div className="modalTitle">
               <h2 className="title3 fWhite">Carrinho de compras</h2>
               <button aria-label="close" title="Fechar">
                  <MdClose size={23} onClick={() => setIsOpen(false)} />
               </button>
            </div>

            { total > 0 ? 
            <div>
               <ul className="modalItems">
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} removeCart={removeCart} cleanCart={cleanCart}/>
                  ))}
               </ul>
            </div>

            :
            <>
            <h3 className="modalInfo title3">Nenhum item adicionado</h3>
            </>
         }

            <div className="modalTotal">
               <div>
                  <span className="fBody fBlack">Total</span>
                  <span className="fBody fGray">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button className="cart" onClick={() => cleanCart()}>Remover todos</button>
            </div>
         </div>
      </div>
      
      
   );
};
