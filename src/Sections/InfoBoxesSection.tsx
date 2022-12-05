import React from 'react'
import creditcard from '../Assets/Images/creditcard.svg';
import customerservice from '../Assets/Images/customerservice.svg';
import deliverytruck from '../Assets/Images/deliverytruck.svg';

const InfoBoxesSection: React.FC = () => {
    return (
         <div className="bottom-menu">
            <div className="container">
                <span className="info-menu">
                    <div className="flex-column">
                        <button type="button" className="btn btn-light btn-circle btn-sm">
                            <img src={customerservice} alt=""/>
                        </button>
                        <p>Customer Support</p>
                    </div>
                    <div className="flex-column">
                        <button type="button" className="btn btn-light btn-circle btn-sm">
                            <img src={creditcard}  alt=""/>
                        </button>
                        <p>Secured Payment</p>
                    </div>
                    <div className="flex-column">
                        <button type="button" className="btn btn-light btn-circle btn-sm">
                            <img src={deliverytruck} alt="" />
                        </button>
                        <p>Free Home Delivery</p>
                    </div>
                    <div className="flex-column">
                        <button type="button" className="btn btn-light btn-circle btn-sm">
                            <img src={deliverytruck} alt="" />
                        </button>
                        <p>30 Day Reuters</p>
                    </div>
                </span>    
            </div>
        </div>     
    )
}

export default InfoBoxesSection

