import React from 'react'
import ProductCard from '../Components/ProductCard'


const ProductCardsSection = ({title, products = []}) => {
    
  
    return (
        <section className="new-arrivals">
            <div className="container">
                <div className="header">
                    <h1>{title}</h1>
                </div>
                <div className="grid">
                 {
                    products.map( product => <ProductCard key={product.articleNumber} product={product} />)
                 } 
                </div>
            </div>                   
        </section>
    
    )   


}

export default ProductCardsSection
