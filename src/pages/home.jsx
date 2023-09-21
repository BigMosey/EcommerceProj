import React, {useContext} from "react";
import {ProductContext} from '../Contexts/ProductContext';
import '../pages/styles.css'
import Product from '../components/Product';

export function Home(){
    const { products } = useContext(ProductContext);

    const filteredProducts = products.filter(item =>{
        return (item.category === "men's clothing" || item.category === 
        "women's clothing"
        );
    })
    return (
        <div>
            <section className="py-16">
                <div className="custom-container">
                    <div className="custom-grid">
                       {filteredProducts.map(product =>{
                        return (
                            <Product product={product} key={product.id}/>
                        )
                       })} 
                    </div>
                </div>
            </section>
        </div>
        );
}