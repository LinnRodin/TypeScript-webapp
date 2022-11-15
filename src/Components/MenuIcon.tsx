import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuIcon = ({link, icon, quantity}) => {
    return (
  
      <button className="btn btn-light btn-circle btn-sm">
      <NavLink className="menu-icon" to={link} end>
      <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
        <i className={icon}></i></NavLink>
      </button>
    )
  }

export default MenuIcon