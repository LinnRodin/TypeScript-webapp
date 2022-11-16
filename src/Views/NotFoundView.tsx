import React from 'react'
import FooterSection from '../Sections/FooterSection'
import TopMenuSection from '../Sections/TopMenuSection'
import NotFoundImage from '../Assets/Images/404-img1.gif'

const NotFoundView = () => {
  window.top.document.title = 'NotFound | Fixxo.'

  return (
    
    <>
    <TopMenuSection />
      <div className="container">
      <h1 className="ms-4" style={{ fontSize: "2rem"}}></h1>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <img src={NotFoundImage} alt="404 Page Not Found" style={{ height: "800px" }} />
        </div>
      </div>
    <FooterSection />
    </>  
    
   
    
  )
}

export default NotFoundView