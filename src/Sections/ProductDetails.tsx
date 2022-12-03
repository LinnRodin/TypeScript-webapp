import React from 'react'

export interface  ProductDetails {
    articleNumber: string
    name: string
    category: string 
    price: number 
    imageName: string 

}


// const ProductDetails: React.FC<ProductDetails> = ({product}) => {
//   return (
//      <section className="product-details">
//         <div className="container">
//             <div>
//                 <div>{product.name}</div>
//                 <img src={product.imageName} />
//             </div>
//         </div>
//      </section>
//   )
// }

// export default ProductDetails