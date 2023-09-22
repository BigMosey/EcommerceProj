import React from "react";
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { CartItem } from '../components/CartItem';
import { SidebarContext } from "../Contexts/SidebarContext";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContexts";

/*const sidebarStyles = {
    ".sidebar": {
      width: "25%",
      backgroundColor: "white",
      position: "fixed",
      top: 0,
      right:0,
      height: "100%",
      boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
      transition: "all 0.3s ease",
      zIndex: 20,
      padding: "1rem",
    },
  
    ".sidebar:where(.isOpen):not(.isOpen)": {
      right: "-100%",
    },
  
    "@media (min-width: 768px)": {
      ".sidebar": {
        width: "35vw",
      },
    },
  
    "@media (min-width: 1280px)": {
      ".sidebar": {
        maxWidth: "30vw",
        paddingLeft: "35px",
      },
    },
  };
  */
export function Sidebar(){

    const { isOpen, handleClose } = useContext(SidebarContext)
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
    const { cart,clearCart,total } = useContext(CartContext);
    return (
        <div>
        <div className={`sidebar ${isOpen ? "" : "sidebar-closed"}`}>
        
            <div className="shoppingbag">
            <div className="shoppingb">Shopping Bag (0)</div> 
             <div onClick={handleClose}className="cursor">
               <IoMdArrowForward className='text-2xl'/> 
             </div>
            </div>
            <div className="cartcolor"> {cart.map(item => {
              return <CartItem  item={item} key={item.id} /> ;
            })} 
            </div>
            <div className="totaltrashdiv1">
              <div className="totaltrashdiv">
                {/* total */}
                  <div className="totaltrashdiv2">
                    <span className="totalspan">Total:</span>$ {parseFloat(total).toFixed(2)} 
                  </div>
                  {/* clear cart icon */}
                  <div onClick={clearCart} className="trashdiv">
                    <FiTrash2/>
                  </div>
              </div>
              <Link to='/' className="viewcartdiv">View cart</Link>
              <Link>Checkout</Link>

            </div>
        </div>
        </div>   
    );
};