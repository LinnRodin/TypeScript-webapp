import React, { useEffect } from 'react'
import { IProductsContext, ProductsFormContext } from '../Contexts/ProductsFormContext'
import { ProductRequest } from '../Models/ProductModel'


const ProductRequestList = () => {
    const { products, getAll } = React.useContext(ProductsFormContext) as IProductsContext

    useEffect(() => {
        getAll()

    }, [getAll])
    
    
    return (
        <>
            <h3 className="display-6 mb-4">ADD PRODUCT</h3>
            {
                products.map((product: ProductRequest) => (<div key={product.category}className="mb-3">{product.imageURL}{product.title}{product.description}{product.price}</div>))
            }
    
        </>
    )
}

export default ProductRequestList