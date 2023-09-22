import React from "react";
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { CartItem } from '../components/CartItem';
import { SidebarContext } from "../Contexts/SidebarContext";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContexts";


export function Sidebar(){

    const { isOpen, handleClose } = useContext(SidebarContext)
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
    const { cart,clearCart,total, itemAmount } = useContext(CartContext);
    return (
        <div>
        <div className={`sidebar ${isOpen ? "" : "sidebar-closed"}`}>
        
            <div className="shoppingbag">
            <div className="shoppingb">Shopping Bag ({itemAmount})</div> 
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
              <Link to='/' className="checkoutdiv">Checkout</Link>

            </div>
        </div>
        </div>   
    );
};