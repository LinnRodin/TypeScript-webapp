import React from 'react'
import { NavLink } from 'react-router-dom'

interface IcurrentPage{

    currentPage: string
    
}

const BreadCrumbSection: React.FC<IcurrentPage> = ({currentPage}) => {
  return (

        <section className="breadcrumb">
            <div className="container">
                <ul className="breadcrumb-list">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li> 
                    <li>{currentPage}</li>
                </ul>
            </div>
        </section>

  )
}

export default BreadCrumbSection

