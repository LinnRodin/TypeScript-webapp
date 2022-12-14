import React, { useEffect } from 'react'
import TopMenuSection from '../Sections/TopMenuSection'
import BreadCrumbSection from '../Sections/BreadCrumbSection'
import ProductCardsSection from '../Sections/ProductCardsSection'
import FooterSection from '../Sections/FooterSection'
import { IProductContextType, useProductContext } from '../Contexts/ProductContext'

const ProductsView: React.FC = () => {
   document.title = 'Products | Fixxo.'
  
   const {products, getAll} = useProductContext() as IProductContextType

   useEffect (()=> {
    getAll(12)

  
  
   },[]) 

  return (
    <>
      <TopMenuSection />
      <BreadCrumbSection currentPage="Products"/>
      <ProductCardsSection title="Products" products={products} />
      <FooterSection />
    </>  
  )
}

export default ProductsView

