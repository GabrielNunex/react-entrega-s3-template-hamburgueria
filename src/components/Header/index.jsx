import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

export const Header = ({ cartList, setIsOpen}) => {
   const [value, setValue] = useState("");

   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button>
                <MdShoppingCart size={25} onClick={() => setIsOpen(true)}/>
                <span className="cart">{cartList.length}</span>
            </button>
            <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
