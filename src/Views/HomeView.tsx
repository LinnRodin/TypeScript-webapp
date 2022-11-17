import React, { useContext } from 'react'
import TopMenuSection from '../Sections/TopMenuSection'
import ShowCaseSection from '../Sections/ShowCaseSection'
import ProductCardsSection from '../Sections/ProductCardsSection'
import ShowCase2Section from '../Sections/ShowCase2Section'
import FooterSection from '../Sections/FooterSection'
import {ProductContext} from '../Contexts/contexts'
import FlashSaleCards from '../Sections/FlashSaleCards'
import FlashSale2Cards from '../Sections/FlashSale2Cards'
import InfoBoxesSection from '../Sections/InfoBoxesSection'

const HomeView = () => {
    document.title = 'Fixxo.'
  
  const productContext = useContext(ProductContext)

  return (
    <>
      <header style={{backgroundColor : "#F5F5F5" }} >
        <TopMenuSection />
      </header>
      <ShowCaseSection />
      <ProductCardsSection title="Featured Products" products={productContext.featuredProducts} />
      <ShowCase2Section />
      <FlashSaleCards products={productContext.flashProducts} />
      <FlashSale2Cards products={productContext.saleProducts} />
      <InfoBoxesSection />
      <FooterSection />
    </>  
  
  )
}

export default HomeView
