
import React from 'react'
import { IProductContextType , ProductContext } from '../Contexts/ProductContext'

const CreateForm = () => {
    const {productRequest, setProductRequest, create } = React.useContext(ProductContext) as IProductContextType 

  return (
    <form onSubmit={create} className='d-grid mb-5'>
      <h3 className="display-6 mb-4">CREATE PRODUCT</h3>
      <input value={productRequest.category} onChange={(e) => setProductRequest({...productRequest, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter category...' />
      <input value={productRequest.imageURL} onChange={(e) => setProductRequest({...productRequest, imageURL: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter imageURL...' />
      <input value={productRequest.title} onChange={(e) => setProductRequest({...productRequest, title: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter title...' />
      <input value={productRequest.description} onChange={(e) => setProductRequest({...productRequest, description: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter description...' />
      <input value={productRequest.price} onChange={(e) => setProductRequest({...productRequest, price: e.target.valueAsNumber})} type="number" className="form-control py-2 mb-3" placeholder='Enter price...' /> 
      <button type='submit' className='btn btn-success'>ADD</button>
    </form>
  )
}

export default CreateForm
