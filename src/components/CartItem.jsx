import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { IoMdClose} from 'react-icons/io'
import { MdAdd, MdRemove } from 'react-icons/md';
import { CartContext} from '../Contexts/CartContexts';

export function CartItem ({item}){
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
    const { id,title,image,price,amount, } = item;
    return (
    <div className="cartdiv1">
        <div className="cartdiv2">
         {/* image */}   
                <Link to={`/product/${id}`}>
            <img className="cartimg" src={image} alt="" />
                </Link>
         <div className="cartdivv">
            {/* title & remove icon*/}
            <div className="cartdiv3"> 
                {/*  title */}
                <Link to={`/product/${id}`} className="cartlink">
                    {title}
                </Link>
                {/* remove icon */}
                <div onClick={() =>  removeFromCart(id) } className="icondiv">
                    <IoMdClose className="carticon" />
                </div>
            </div>  
            <div className="totaldiv">
               {/* qty */} 
               <div className="divvv">
                {/* minus icon */}
                <div onClick={() => decreaseAmount(id)} className="removediv">
                    <MdRemove/>
                </div>
                {/* amount  */}
                <div className="amountdiv">{amount}</div>
                {/* plus icon */}
                <div onClick={() => increaseAmount(id)} className="adddiv">
                    <MdAdd/>
                </div>
                </div>
                {/* item price */}
                <div className="pricediv">$ {price}</div>
                {/* final price */}
                {/* make the price at 2 decimals*/}
                <div className="totalpricediv">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
            </div>
         </div>
        </div>
    </div>
    );
};
