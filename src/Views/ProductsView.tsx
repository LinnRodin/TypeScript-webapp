import React, { useEffect } from 'react'
import TopMenuSection from '../Sections/TopMenuSection'
import BreadCrumbSection from '../Sections/BreadCrumbSection'
import ProductCardsSection from '../Sections/ProductCardsSection'
import FooterSection from '../Sections/FooterSection'
import { useProductContext } from '../Contexts/ProductContext'

const ProductsView = () => {
   document.title = 'Products | Fixxo.'
  
   const {AllProducts, fetchAllProducts} = useProductContext()

   useEffect (()=> {
    fetchAllProducts()
  
   },[]) 

  return (
    <>
      <TopMenuSection />
      <BreadCrumbSection currentPage="Products"/>
      <ProductCardsSection title="Products" products={AllProducts} />
      <FooterSection />
    </>  
  )
}

export default ProductsView

