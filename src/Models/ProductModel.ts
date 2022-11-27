
export interface ProductRequest {
   
    imageURL?: string
    category?: string 
    rating?: string
    title?: string
    description?: string
    price: number
  
}

export interface Product {
   
    imageURL?: string
    articleNumber?: number|string
    category?: string 
    rating?: string
    title?: string
    description?: string
    price: number
    

  }
