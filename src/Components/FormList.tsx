import React, { useEffect } from 'react'
import { IProductsContext, ProductsFormContext } from '../Contexts/ProductsFormContext'
import { Product } from '../Models/ProductModel'


const FormList = () => {
    const { Product, getAll } = React.useContext(ProductsFormContext) as IProductsContext

    useEffect(() => {
        getAll()

    }, [getAll])
    
    
    return (
        <>
            <h3 className="display-6 mb-4">ADD PRODUCT</h3>
            {
                Product.map((Product: Product) => (<div key={Product.articleNumber} className="mb-3">{Product.description} {Product.title}</div>))
            }
    
        </>
    )
}

export default FormList
