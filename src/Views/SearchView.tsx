import React from 'react'
import FooterSection from '../Sections/FooterSection'
import TopMenuSection from '../Sections/TopMenuSection'


const SearchView: React.FC = () => {
  document.title = 'Search | Fixxo.'
  return (
    <>
     <TopMenuSection />
     <FooterSection />
    </>  
  )
}

export default SearchView