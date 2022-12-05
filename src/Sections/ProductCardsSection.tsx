import React from 'react'
import ProductCard from '../Components/ProductCard'
import { useProductContext, IProductContextType } from '../Contexts/ProductContext'
import {Product} from '../Models/ProductModel'


interface IProductCardProps {
    title: string
    products: Product[]
}


const ProductCardsSection: React.FC<IProductCardProps> = ({title=""}) => {
    const {products} = useProductContext() as IProductContextType
  
    return (
        <section className="new-arrivals">
            <div className="container">
                <div className="header">
                    <h1>{title}</h1>
                </div>
                <div className="grid">
                 {
                    products.map( (product:Product) => <ProductCard key={product.articleNumber} product={product} />)
                 } 
                </div>
            </div>                   
        </section>
    
    )   


}

export default ProductCardsSection
