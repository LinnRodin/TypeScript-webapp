import React from 'react'
import ProductCard from '../Components/ProductCard'
import { Product } from '../Models/ProductModel'

interface IFlashSale2CardsProps {
  
  products: Product[]
}

const FlashSale2Cards: React.FC<IFlashSale2CardsProps> = ({ products = []}) => {
  return (
      
    <section className="flash-sale-right">
          <div className="container">
              <div className="img_right_box">
                      <h1>2 FOR USD $49</h1>
                  <div className="img_right_button">
                      <a href = "#"><button type= "button" className="btn special_button_white">FLASH SALE</button></a>
                  </div>
              </div>
            <div className="product_component_right" >
                  {
                    products.map( product => <ProductCard key={product.articleNumber} product={product} />)
                  } 
            </div>   
        </div>   
    </section>
  )
}

export default FlashSale2Cards