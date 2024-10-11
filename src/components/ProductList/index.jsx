import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, addCart }) => {
  
   return (
      <ul className="products">
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addCart={addCart}/>
         ))}
      </ul>
   );
};
