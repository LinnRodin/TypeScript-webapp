import React from 'react'
import FooterSection from '../Sections/FooterSection'
import { TopMenuSection } from '../Sections/TopMenuSection'


const WishListView = () => {
  document.title = 'WishList | Fixxo.'
  return (
    <>
    <TopMenuSection />
    <FooterSection />
    </>  
  )
}

export default WishListView