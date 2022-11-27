
import React from 'react'
import { IProductsContext, ProductsFormContext } from '../Contexts/ProductsFormContext'

const UpdateForm = () => {
    const {product, setProduct, update } = React.useContext(ProductsFormContext) as IProductsContext

  return (
    <form onSubmit={update} className='d-grid mb-5'>
      <h3 className="display-6 mb-4">ADD PRODUCT</h3>
      <input value={product.articleNumber} onChange={(e) => setProduct({...product, articleNumber: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter articlenumber...' />
      <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter category...' />
      <input value={product.imageURL} onChange={(e) => setProduct({...product, imageURL: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter imageURL...' />
      <input value={product.title} onChange={(e) => setProduct({...product, title: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter title...' />
      <input value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter description...' />
      <input value={product.price} onChange={(e) => setProduct({...product, price: e.target.valueAsNumber})} type="number" className="form-control py-2 mb-3" placeholder='Enter price...' /> 
      <button type='submit' className='btn btn-success'>ADD PRODUCT</button>
    </form>
  )
}

export default UpdateForm

