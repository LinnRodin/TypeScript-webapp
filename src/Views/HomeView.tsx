import React, { useEffect } from 'react'
import TopMenuSection from '../Sections/TopMenuSection'
import ShowCaseSection from '../Sections/ShowCaseSection'
import ProductCardsSection from '../Sections/ProductCardsSection'
import ShowCase2Section from '../Sections/ShowCase2Section'
import FooterSection from '../Sections/FooterSection'
import FlashSaleCards from '../Sections/FlashSaleCards'
import FlashSale2Cards from '../Sections/FlashSale2Cards'
import InfoBoxesSection from '../Sections/InfoBoxesSection'
import { useProductContext } from '../Contexts/ProductContext'

const HomeView = () => {
    document.title = 'Fixxo.'

    const {FeaturedProducts, fetchFeaturedProducts} = useProductContext()
    const {FlashProducts, fetchFlashProducts} = useProductContext()
    const {SaleProducts, fetchSaleProducts} = useProductContext()

    useEffect (()=> {
    fetchFeaturedProducts()

  
   },[]) 


  return (
    <>
      <header style={{backgroundColor : "#F5F5F5" }} >
        <TopMenuSection />
      </header>
      <ShowCaseSection />
      <ProductCardsSection title="Featured Products" products={FeaturedProducts} />
      <ShowCase2Section />
      <FlashSaleCards products={FlashProducts} /> 
      <FlashSale2Cards products={SaleProducts} /> 
      <InfoBoxesSection />
      <FooterSection />
    </>  
  
  )
}

export default HomeView

