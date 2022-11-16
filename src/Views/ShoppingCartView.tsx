import React from 'react'
import FooterSection from '../Sections/FooterSection'
import TopMenuSection from '../Sections/TopMenuSection'

const ShoppingCartView = () => {
  window.top.document.title = 'ShoppingCart | Fixxo.'
  return (
    <>
     <TopMenuSection />
     <FooterSection />
    </>  
  )
}

export default ShoppingCartView