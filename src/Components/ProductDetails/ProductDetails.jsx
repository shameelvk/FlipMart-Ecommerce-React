import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

function ProductDetails() {
    const [productData, setproductData] = useState({})
    const {addToCart} = useContext(ShopContext)
    const pdId=useParams()
        useEffect(() => {
            fetch('https://fakestoreapi.com/products/'+pdId.productId)
            .then(res=>res.json())
            .then(json=>setproductData(json))

        
            
        
        }, [])

        
        const renderStars = (rating) => {
            const stars = [];
            for (let i = 0; i < 5; i++) {
                if (i < rating) {
                    stars.push(<span key={i} className="bi bi-star-fill text-warning me-1"></span>);
                } else {
                    stars.push(<span key={i} className="bi bi-star text-warning"></span>);
                }
            }
            return stars;
        };
       
    
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        
        <div className="col-md-6 d-flex">
          <img src={productData.image} className="img-fluid pd-img m-auto" alt={productData.title} />
        </div>
        
        <div className="col-md-6">
          <h2>{productData.title}</h2>
          <p>{productData.description}</p>
          <p>Price: ₹{productData.price}</p>
          <div className="mb-2">
            Rating:{productData.rating?renderStars(productData.rating.rate) :""} 
           ({productData.rating?productData.rating.count:""})
          </div>
          <button className="btn btn-warning" onClick={()=>addToCart(productData.id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails