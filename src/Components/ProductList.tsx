import React, { useEffect } from 'react'
import { IProductContextType , ProductContext } from '../Contexts/ProductContext'
import { Product } from '../Models/ProductModel'


const ProductList = () => {
    const { products, getAll } = React.useContext(ProductContext) as IProductContextType 

    useEffect(() => {
        getAll(4)

    }, [getAll])
    
    
    return (
        <>
            <h3 className="display-6 mb-4">ADD PRODUCT</h3>
            {
                products.map((product: Product) => (<div key={product.articleNumber} className="mb-3">{product.category}{product.imageURL}{product.title}{product.name}{product.description}{product.price}</div>))
            }
    
        </>
    )
}

export default ProductList
