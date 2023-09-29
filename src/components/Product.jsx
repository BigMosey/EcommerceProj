import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs'
import '../components/product.css'
import { CartContext } from '../Contexts/CartContexts'

const myStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    width: '3rem', 
    height: '3rem',
  };
const myButton = {
  position: 'absolute',
  top: 0,
  right: 0,
  color: 'red',
  background: 'none',
    border: 'none',
    cursor: 'pointer',
}
const myLink = {
    width:'3rem',
    height:'3rem',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    className: 'text-primary drop-shadow-xl',
}

const myTitle = {
    className: 'font-semibold mb-1',
}
const myCategory = {
    fontSize: '0.875rem',
    textTransform: 'capitalize', 
    color: '#718096', 
    marginBottom: '0.25rem',
    
}
const myPrice = {
    fontSize: '1.25rem', 
    fontWeight: '700', 
  };
export default function Product({product}){
    const {addToCart} = useContext(CartContext);
    const { id, image, category, title, price } = product;
    return (
    <div>
        <div className='div1'>
            <div className='div1in1'> 
                {/* image */}
                <div className='div2in1'>
                    <img className='image group' src={image} alt =''/>
                </div>
                {/* buttons*/}
                    <div style={myButton}>
                        <button onClick={()=> addToCart(product, id)}>
                            <div style={myStyle}>
                                <BsPlus className="btext"/>
                            </div>
                        </button>
                        <Link to={`/product/${id}`} style={myLink}><BsEyeFill/></Link>
                    </div>
            </div>
        </div>
        {/* category and title and price */}
        <div>
            <div style={myCategory}>{category}</div>
            <Link to={`/product/${id}`}></Link>
            <h2 style={myTitle}>{title}</h2>
            <Link to={`/product/${id}`}></Link>
            <div style={myPrice}> $ {price}</div>

        </div>

    </div>
    )
}

