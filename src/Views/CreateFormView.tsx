import React from 'react'
import CreateForm from '../Components/CreateForm'
import FormList from '../Components/Formlist'

const CreateFormView = () => {
  return (
    <div className="container mt-5">
        <CreateForm />
        <hr className="my-5" />
        <FormList />
    </div>
  )
}

export default CreateFormView