import React from 'react'
import CreateForm from '../Components/CreateForm'
import UserList from '../Components/UserList'

const CreateFormView = () => {
  return (
    <div className="container mt-5">
        <CreateForm />
        <hr className="my-5" />
        <UserList />
    </div>
  )
}

export default CreateFormView