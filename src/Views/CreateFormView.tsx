import React from 'react'
import CreateForm from '../Components/CreateForm'
import ProductList from '../Components/ProductList'

const CreateFormView: React.FC = () => {
  return (
    <div className="container mt-5">
        <CreateForm />
        <hr className="my-5" />
        <ProductList />
    </div>
  )
}

export default CreateFormView