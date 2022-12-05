import React from 'react'

const ShowCase2Section: React.FC = () => {
  return (
    
    <section className="showcase_2">
        <div className="container">
            <div className="showcase-content-2">  
                <div className="imgLeft">
                    <h1>Pamela Reif's<br/>Top Picks</h1>
                    <div className="general_button">
                        <button type= "button" className="btn special_button_dark">SHOP NOW</button>
                    </div> 
                </div>
                <div className="imgRight">
                <h1>Lets Be<br/>Concious</h1>
                    <div className="general_button">
                        <button type= "button" className="btn special_button_white">FLASH SALE</button>
                    </div>        
                </div> 
            </div>
        </div>        
    </section>

  )
}

export default ShowCase2Section