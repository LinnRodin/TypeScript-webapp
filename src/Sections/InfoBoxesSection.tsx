import React from 'react'
import creditcard from '../Assets/Images/creditcard.svg';
import customerservice from '../Assets/Images/customerservice.svg';
import deliverytruck from '../Assets/Images/deliverytruck.svg';

const InfoBoxesSection = () => {
    return (
         <div className="bottom-menu">
            <div className="container">
                <span className="info-menu">
                    <div className="flex-column">
                        <button type="button" className="btn btn-light btn-circle btn-sm">
                            <a href = "#"><img src={customerservice}/></a>
                        </button>
                        <p>Customer Support</p>
                    </div>
                    <div className="flex-column">
                        <button type="button" className="btn btn-light btn-circle btn-sm">
                            <a href = "#"><img src={creditcard}/></a>
                        </button>
                        <p>Secured Payment</p>
                    </div>
                    <div className="flex-column">
                        <button type="button" className="btn btn-light btn-circle btn-sm">
                            <a href = "#"><img src={deliverytruck}/></a>
                        </button>
                        <p>Free Home Delivery</p>
                    </div>
                    <div className="flex-column">
                        <button type="button" className="btn btn-light btn-circle btn-sm">
                            <a href = "#"><img src={deliverytruck}/></a>
                        </button>
                        <p>30 Day Reuters</p>
                    </div>
                </span>    
            </div>
        </div>     
    )
}

export default InfoBoxesSection

