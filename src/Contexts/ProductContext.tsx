import { useContext, useState } from "react"
import { createContext } from "react"


export interface IProductContext {
    : string
    todos: []
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e:React.FormEvent) => void
}

interface IProductContextProviderProps {
    children: unknown
}



const ProductContext = createContext()

export const useProductContext = () => {
    return useContext (ProductContext)
}

export const ProductProvider = ({children}) => {

    


}





return <ProductContext.provider value={{}}>

    {children}

</ProductContext.provider>
