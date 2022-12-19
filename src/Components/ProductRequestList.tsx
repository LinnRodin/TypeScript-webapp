import React, { useEffect } from 'react'
import { IProductContextType , ProductContext } from '../Contexts/ProductContext'
import { Product } from '../Models/ProductModel'


const ProductRequestList = () => {
    const { products, getAll } = React.useContext(ProductContext) as IProductContextType 

    useEffect(() => {
        getAll()

    }, [])
    
    
    return (
        <>
            <h3 className="display-6 mb-4"></h3>
            {
                products.slice(0, 4).map((product: Product) => (<div key={product.articleNumber}className="mb-3">{product.imageURL}{product.title}{product.description}{product.price}</div>))
            }
    
        </>
    )
}

export default ProductRequestList