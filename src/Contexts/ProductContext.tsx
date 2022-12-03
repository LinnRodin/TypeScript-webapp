import React, { useContext, useState } from "react"
import { createContext } from "react"
import { Product } from "../Models/Product"


interface IProductProviderType {
  children: any
}


export interface IProductContextType {
    product: Product
    products: Product[]
    featured: Product[]
    get: (articleNumber: string) => void
    getAll: (take: number) => void
    getFeatured: (take: number) => void
   

}



export const ProductContext = createContext<IProductContextType | null>(null); 
export const useProductContext = () => { return useContext (ProductContext)}


export const ProductProvider: React.FC<IProductProviderType> = ({children}) => {
    const baseUrl: string = 'http://localhost:5000/api/products'
    const EMPTY_PRODUCT: Product = { articleNumber: '', name: '', category: '', price: 0, imageName: '' } //Hur produkten skall se ut specifikt och fast

    const [product, setProduct] = useState<Product>(EMPTY_PRODUCT) //En speciell typ av produkt
    const [products, setProducts] = useState<Product[]>([])
    const [featured, setFeatured] = useState<Product[]>([])


    const get = async (articleNumber?: string) => {
        if (articleNumber ! == undefined) {
           const res = await fetch(baseUrl + `/${articleNumber}`)
           setProduct(await res.json())
        }
     }



    const getAll = async (take: number = 0) => {
      let url = baseUrl

      if (take !== 0)
          url = baseUrl + `?take=${take}`

      const res = await fetch(url)
      setProducts(await res.json())
     }


     const getFeatured = async (take: number = 0) => {
      let  url = baseUrl + `?tag=featured`

      if (take !== 0)
          url += `&take=${take}`


      const res = await fetch(url)
      setFeatured(await res.json())
     }


     
   

    return <ProductContext.Provider value={{product, products, featured, get, getAll, getFeatured }}>

        {children}

    </ProductContext.Provider>

}

export default ProductProvider






