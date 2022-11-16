import React from 'react'
import FooterSection from '../Sections/FooterSection'
import TopMenuSection from '../Sections/TopMenuSection'
import UnderConstruction from '../Assets/Images/UnderConstruction.jpg'

const CategoriesView = () => {
  window.top.document.title = 'Categories | Fixxo.'
  return (
    <>
     <TopMenuSection />
        <div className="container">
          <h1 className="ms-4" style={{ fontSize: "2rem"}}></h1>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <img src={UnderConstruction} alt="under construction" style={{ height: "700px" }} />
          </div>
        </div>
     <FooterSection />
    </>  
  )
}

export default CategoriesView