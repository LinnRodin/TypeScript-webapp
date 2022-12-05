import React, { useEffect } from 'react'
import { IProductsContext, ProductsFormContext } from '../Contexts/ProductsFormContext'
import { Product } from '../Models/ProductModel'


const ProductList = () => {
    const { products, getAll } = React.useContext(ProductsFormContext) as IProductsContext

    useEffect(() => {
        getAll()

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
