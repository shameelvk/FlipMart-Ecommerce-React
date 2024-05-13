import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'
const Card = ({ pdData }) => {
  const truncatedTitle = pdData.title.length > 20 ? pdData.title.slice(0, 20) + '..' : pdData.title;
  const truncatedDescription = pdData.description.length > 100 ? pdData.description.slice(0, 100) + '..' : pdData.description;
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="bi bi-star-fill text-warning me-1"></span>);
      } else {
        stars.push(<span key={i} className="bi bi-star text-warning me-1"></span>);
      }
    }
    return stars;
  };

  return (
    <div className="card pd-card">
      <img src={pdData.image} className="card-img-top pd-image p-2" alt={pdData.title} />
      <div className="card-body">
        <h5 className="card-title">{truncatedTitle}</h5>
        <p className="card-text card-description">{truncatedDescription}</p>
        <div className="mb-2">
          {renderStars(pdData.rating.rate)}({pdData.rating.count})
        </div>
        <p className="card-text">MRP:₹{pdData.price}<del className="text-danger ms-2">${(pdData.price * 1.2).toFixed(2)}</del></p>
        <p className='deliver'><strong>Free Delivery By FlipMart</strong></p>
        <Link to={'/products/'+pdData.id} className="btn btn-warning">View Product</Link>
      </div>
    </div>
  );
}

export default Card;
