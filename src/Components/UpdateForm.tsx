
import React from 'react'
import { IProductContextType , ProductContext } from '../Contexts/ProductContext'

const UpdateForm = () => {
    const {product, setProduct, update } = React.useContext(ProductContext) as IProductContextType 

  return (
    <form onSubmit={update} className='d-grid mb-5'>
      <h3 className="display-6 mb-4">EDIT PRODUCT</h3>
      <input value={product.articleNumber} onChange={(e) => setProduct({...product, articleNumber: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter articlenumber...' />
      <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter name...' />
      <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter category...' />
      <input value={product.imageURL} onChange={(e) => setProduct({...product, imageURL: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter imageURL...' />
      <input value={product.title} onChange={(e) => setProduct({...product, title: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter title...' />
      <input value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter description...' />
      <input value={product.price} onChange={(e) => setProduct({...product, price: e.target.valueAsNumber})} type="number" className="form-control py-2 mb-3" placeholder='Enter price...' /> 
      <button type='submit' className='btn btn-success'>EDIT</button>
    </form>
  )
}

export default UpdateForm

