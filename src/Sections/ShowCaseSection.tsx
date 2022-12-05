import React from 'react'
import showcase1 from '../Assets/Images/showcase-img-1.png';
import showcase2 from '../Assets/Images/showcase-img-2.png';

const ShowCaseSection: React.FC = () => {
  return (
        <section className="showcase">
            <div className="container">
                <div className="showcase-content">  
                    <img src={showcase1} className="_img-left" alt="female"/>
                        <div><h1><strong>Sale Up <br/> To 50% off</strong></h1>
                            <p>Online shopping free home delivery over $100</p>
                            <div className="general_button">
                            <button type="button" className="btn special_button">SHOP NOW</button>
                            </div>
                        </div>
                    <img src={showcase2} className="_img-right" alt="male"/>
                </div>
            </div>        
        </section>
  )
}

export default ShowCaseSection




