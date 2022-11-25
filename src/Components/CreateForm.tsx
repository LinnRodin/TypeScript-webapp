import React from 'react'
import { IProductsContext, ProductsFormContext } from '../Contexts/ProductsFormContext'

const CreateForm = () => {
    const {product, setProduct, create } = React.useContext(ProductsFormContext) as IProductsContext

  return (
    <form onSubmit={create} className='d-grid mb-5'>
      <h3 className="display-6 mb-4">ADD PRODUCT</h3>
      <input value={product.articleNumber} onChange={(e) => setProduct({...product, articleNumber: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter articlenumber...' />
      <input value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter description...' />
      <input value={product.title} onChange={(e) => setProduct({...product, title: e.target.value})} type="number" className="form-control py-2 mb-3" placeholder='Enter title...' />
      <button type='submit' className='btn btn-success'>ADD PRODUCT</button>
    </form>
  )
}

export default CreateForm


