import React from 'react'
import CreateForm from '../Components/CreateForm'
import ProductList from '../Components/ProductList'
import ProductRequestList from '../Components/ProductRequestList'
import UpdateForm from '../Components/UpdateForm'

const CreateFormView: React.FC = () => {
  return (
    <div className="container mt-5">
        <CreateForm />
        <UpdateForm />
        <hr className="my-5" />
        <ProductList />
        {/* <ProductRequestList /> */}
    </div>
  )
}

export default CreateFormView