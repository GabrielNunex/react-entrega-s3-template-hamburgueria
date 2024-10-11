import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const localStorageCartList = localStorage.getItem("@CARTLIST");
   const [cartList, setCartList] = useState(localStorageCartList ? JSON.parse(localStorageCartList) : []);
   const [isOpen, setIsOpen] = useState(false);
   
   const addCart = (item) => {
      if(cartList.some(inCart => inCart.id  === item.id)) {
         alert("Item já adicionado")
      } else {
         setCartList([...cartList, item])
      }
   }

   const removeCart = (itemId) => {
      const newCart = cartList.filter(item => item.id !== itemId);
      setCartList(newCart);
   }

   const cleanCart = () => {
      const cart = [];
      setCartList(cart);
   }

   useEffect(() => {
      const getList = async () => {
         const response = await fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products");
         const json = await response.json();
         setProductList(json);
      }
      getList();
   }, [])

   useEffect (() => {
      localStorage.setItem("@CARTLIST", JSON.stringify(cartList))
   }, [cartList])


   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header cartList={cartList} setIsOpen={setIsOpen}/>
         <main>
            <ProductList productList={productList} addCart={addCart}/>
            {isOpen ? <CartModal cartList={cartList} setIsOpen={setIsOpen} removeCart={removeCart} cleanCart={cleanCart}/> : null}
         </main>
      </>
   );
};
