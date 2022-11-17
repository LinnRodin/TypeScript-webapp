import React, { useContext } from 'react'
import TopMenuSection from '../Sections/TopMenuSection'
import BreadCrumbSection from '../Sections/BreadCrumbSection'
import ProductCardsSection from '../Sections/ProductCardsSection'
import FooterSection from '../Sections/FooterSection'
import {ProductContext} from '../Contexts/contexts'

const ProductsView = () => {
   document.title = 'Products | Fixxo.'
  const productContext = useContext(ProductContext)

  return (
    <>
      <TopMenuSection />
      <BreadCrumbSection currentPage="Products"/>
      <ProductCardsSection title="Products" products={productContext.allProducts} />
      <FooterSection />
    </>  
  )
}

export default ProductsView

