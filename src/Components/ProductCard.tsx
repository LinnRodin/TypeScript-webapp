import React from 'react'
import { NavLink } from 'react-router-dom'
import { Product } from '../Models/Product'

interface IProductCardProps {

  product: Product

}

const ProductCard: React.FC<IProductCardProps> = ({product = {} as Product}) => {

  // const addToWishlist = (e) =>  void{
  //   console.log(`${e} added to wish list`)
  // }

  // const addToCompare = (e) => void{
  //   console.log(`${e} added to compare`)
  // }

  //  const addToCart = (e) => void{
  //    console.log(`${e} added to shopping cart`)
  //  }

  return (
          <section className="new-arrivals">
                <div className="container">
                    <div className="grid">
                        <div className="card">
                              <img className="card-img" src={product.imageName} alt={product.name} />
                                <ul className="card-menu">
                                    <li><button onClick={addToWishlist} type="button" className="btn btn-light btn-circle btn-sm"><a href = "#"><i className="fa-regular fa-heart"></i></a></button></li> 
                                    <li><button onClick={addToCompare} type="button" className="btn btn-light btn-circle btn-sm"><a href = "#"><i className="fa-solid fa-code-compare fa-flip-horizontal"></i></a></button></li> 
                                    <li><button onClick={addToCart} type="button" className="btn btn-light btn-circle btn-sm"><a href = "#"><i className="fa-solid fa-bag-shopping"></i></a></button></li> 
                                </ul>
                                <div className="card-general">
                                    <NavLink to={`/products/${product.articleNumber}`}>
                                      <button type= "button" className="btn special_button">
                                        QUICK VIEW</button>
                                    </NavLink>
                                    <div className="card-info">
                                        <p className="card-category">{product.category}</p>
                                        <h6 className="card-title">{product.name}</h6>
                                        <div className="card-rating">
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                        </div>
                                      <p className="card-new-price">${product.price}</p>
                                    </div>
                                </div> 
                        </div>
                         <div className="card-background"></div>
                    </div>      
                </div>  
          </section>

  )       
}

export default ProductCard