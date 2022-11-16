import React from 'react'
import FooterSection from '../Sections/FooterSection'
import TopMenuSection from '../Sections/TopMenuSection'

const CompareView = () => {
  window.top.document.title = 'Compare | Fixxo.'
  return (
    <>
    <TopMenuSection />
    <FooterSection />
    </>  
  )
}

export default CompareView