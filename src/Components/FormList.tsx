import React, { useEffect } from 'react'
import { IProductsUpdateContext, ProductsFormContext } from '../Contexts/ProductsFormContext'
import { ProductRequest } from '../Models/ProductModel'


const FormList = () => {
    const { ProductRequest, getAll } = React.useContext(ProductsFormContext) as IProductsUpdateContext

    useEffect(() => {
        getAll()

    }, [getAll])
    
    
    return (
        <>
            <h3 className="display-6 mb-4">ADD PRODUCT</h3>
            {
                ProductRequest.map((ProductRequest: ProductRequest) => (<div key={ProductRequest.imageURL} className="mb-3">{ProductRequest.title} {ProductRequest.description}</div>))
            }
    
        </>
    )
}

export default FormList
