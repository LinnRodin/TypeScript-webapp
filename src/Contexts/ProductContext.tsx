import React, { useContext, useState } from "react"
import { createContext } from "react"
import { Product, ProductRequest } from "../Models/ProductModel"


interface IProductProviderType {
  children: any
}


export interface IProductContextType {
    productRequest: ProductRequest
    product: Product
    products: Product[]
    featured: Product[]

    setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
    setFeatured: React.Dispatch<React.SetStateAction<Product[]>>

    create: (e: React.FormEvent) => void
    get: (articleNumber: string) => void
    getAll: (take: number) => void
    getFeatured: (take: number) => void
    update: (e: React.FormEvent) => void
    remove: (articleNumber: string) => void

}


export const ProductContext = createContext<IProductContextType | null>(null); 
export const useProductContext = () => { return useContext (ProductContext)}


export const ProductProvider: React.FC<IProductProviderType> = ({children}) => {
    
    const baseUrl: string = 'http://localhost:5550/api/products'
    const EMPTY_PRODUCT: Product = { tag: '', articleNumber: '', name: '', category: '', price: 0, imageURL: '' } //Hur produkten skall se ut specifikt 
    const EMPTY_PRODUCTREQUEST: ProductRequest = { category: '', imageURL: '', title: '', description: '', price: 0}

    const [productRequest, setProductRequest] = useState<ProductRequest>(EMPTY_PRODUCTREQUEST) //En speciell typ av produkt
    const [product, setProduct] = useState<Product>(EMPTY_PRODUCT) //En speciell typ av produkt
    const [products, setProducts] = useState<Product[]>([])
    const [featured, setFeatured] = useState<Product[]>([])


    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        try  {
            const result = await fetch(`${baseUrl}`, {

                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productRequest)
    
            
            })
    
            if (result.status !== 201) {
                throw new Error(result.statusText)
                
            }
            setProductRequest(EMPTY_PRODUCTREQUEST)
        }
        catch(err) {

            console.log(err)
        }
        
    }

    const get = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
           const res = await fetch(`${baseUrl}/details/${articleNumber}`)   // (http://localhost:5550/api/products/details/$articleNumber)
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
      let  url = `${baseUrl}/featured`

      if (take !== 0)
          url += `/${take}`

      const res = await fetch(url)
      setFeatured(await res.json())
     }

     const update =async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}/${product.articleNumber}`, {

            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)

        
        })

        if (result.status === 200) {
            setProduct(await result.json())
        }
    }

    const remove = async (articleNumber: string) => {
        const result = await fetch(`${baseUrl}/${articleNumber}`, {
            method: 'delete'
        })

        if (result.status === 204) {
            setProduct(EMPTY_PRODUCT)
        }
    }   
     
   

    return <ProductContext.Provider value={{productRequest, product, products, featured, setProductRequest, setProduct, setProducts, setFeatured, create, get, getAll, getFeatured, update, remove }}>
        {children}
    </ProductContext.Provider>

}

export default ProductProvider






