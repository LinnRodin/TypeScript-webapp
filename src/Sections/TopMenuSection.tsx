import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../Components/MenuIcon'


const TopMenuSection: React.FC = () => {

    

    return (
  
      <section>
          <div className="top-menu">
              <div className="container">
                  <NavLink id="brand-logo" to="/" end>Fixxo.</NavLink>
                  <div className="menu-links">
                      <NavLink className="a" to="/" end>Home</NavLink>
                      <NavLink className="a" to="/categories" end>Categories</NavLink>
                      <NavLink className="a" to="/products">Products</NavLink>
                      <NavLink className="a" to="/contacts" end>Contacts</NavLink>
                  </div>
                  <div>
                      <span className="social-media">
                          <MenuIcon link="/search" icon="fa-sharp fa-solid fa-magnifying-glass"/>
                          <MenuIcon link="/compare" icon="fa-solid fa-code-compare fa-flip-horizontal"/>
                          <MenuIcon quantity="3" link="/wishlist" icon="fa-regular fa-heart"/>
                          <MenuIcon quantity="6" link="/shoppingcart" icon="fa-solid fa-bag-shopping"/>
                      </span>    
                  </div>
              </div>
          </div>
      </section> 
    )
  }
  
  export const TopMenuSection

