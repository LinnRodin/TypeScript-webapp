import React, { useContext, useState } from "react"
import { createContext } from "react"
import { Product } from "../Models/Product"


export interface IProductContext {
    AllProducts: Product[]
    FeaturedProducts: Product[]
    FlashProducts: Product[]
    SaleProducts: Product[]
    fetchAllProducts: ()=> void
    fetchFeaturedProducts: ()=> void
    fetchFlashProducts: ()=> void
    fetchSaleProducts: ()=> void

}

interface IProductContextProviderProps {
    children: any
}


export const ProductContext = createContext<IProductContext | any>(null); 

export const useProductContext = () => {
    return useContext (ProductContext)
}


export const ProductProvider: React.FC<IProductContextProviderProps> = ({children}) => {

    const [AllProducts, setAllProducts] = useState([])
    const [FeaturedProducts,setFeaturedProducts] = useState([])
    const [FlashProducts, setFlashProducts] = useState([])
    const [SaleProducts, setSaleProducts] = useState([])
     

      
        const fetchAllProducts = async () => {
          let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=12')
          setAllProducts(await result.json())
        }
        
    
        const fetchFeaturedProducts = async () => {
          let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
          setFeaturedProducts(await result.json())
        }
        
    
        const fetchFlashProducts = async () => {
          let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
          setFlashProducts(await result.json())
        }
        
    
        const fetchSaleProducts = async () => {
          let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
          setSaleProducts(await result.json())
        }
      
    
    return <ProductContext.Provider value={{AllProducts, FeaturedProducts, FlashProducts, SaleProducts, fetchAllProducts, fetchFeaturedProducts, fetchFlashProducts, fetchSaleProducts }}>

        {children}

    </ProductContext.Provider>

}






