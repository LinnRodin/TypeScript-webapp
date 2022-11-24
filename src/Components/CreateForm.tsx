import React from 'react'
import { IProductsUpdateContext, ProductsFormContext } from '../Contexts/ProductsFormContext'

const CreateForm = () => {
    const {productRequest, setProductRequest, create } = React.useContext(ProductsFormContext) as IProductsUpdateContext

  return (
    <form onSubmit={create} className='d-grid mb-5'>
      <h3 className="display-6 mb-4">ADD PRODUCT</h3>
      <input value={productRequest.imageURL} onChange={(e) => setProductRequest({...productRequest, imageURL: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter imageURL...' />
      <input value={productRequest.title} onChange={(e) => setProductRequest({...productRequest, title: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter title...' />
      <input value={productRequest.description} onChange={(e) => setProductRequest({...productRequest, description: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter description...' />
      <button type='submit' className='btn btn-success'>ADD PRODUCT</button>
    </form>
  )
}

export default CreateForm


