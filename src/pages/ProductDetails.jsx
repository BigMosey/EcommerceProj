import React , {useContext} from "react";
// import useParams
import { useParams } from 'react-router-dom';
import { CartContext } from '../Contexts/CartContexts';
import { ProductContext } from '../Contexts/ProductContext';

export function ProductDetails() {
    //get the product id from the url
    const { id } = useParams();
    console.log(id);
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);

    //get the single product based on the id
    const product = products.find(item =>{
        return item.id === parseInt(id);
    });

    if(!product){
        return <section className="loadingdiv">Loading...</section>;
        
    }
    // destructure product 
    const { title, price, description, image } = product;
    return (
    <section className="productdetailsdiv">
        <div className="container mx-auto">
            {/* image and text wrapper */}
            <div className="imagetextdiv">
                {/* image */}
                <div className="picdiv1">
                    <img className="picdiv" src={image} alt="" />
                </div>
                {/* text */}
                <div className="detailsdiv">
                    <h1 className="producttitlediv">
                        {title}
                    </h1>
                    <div className="productpricediv">
                       $ {price}
                    </div>
                    <p className="productdescriptiondiv">{description}</p>
                    <button onClick={()=> addToCart(product, product.id)} className="productbutton">Add to cart </button>
                </div>
            </div>
           
        </div>
    </section>
    );
};
