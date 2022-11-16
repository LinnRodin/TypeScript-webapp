import React from 'react'
import ProductCard from '../Components/ProductCard'


const FlashSaleCards = ({ products = []}) => {
  return (
        <section className="flash-sale-left">
            <div className="container">              
                <div className="img_left_box">
                    <h1>2 FOR USD $29</h1>
                    <div className="img_left_button">
                        <a href = "#"><button type= "button" className="btn special_button_white">FLASH SALE</button></a>
                    </div>
                </div>      
                <div className="product_component_left">
                    {
                        products.map( product => <ProductCard key={product.articleNumber} product={product} />)
                    } 
                </div>  
            </div>     
        </section>      
    )
}

export default FlashSaleCards

