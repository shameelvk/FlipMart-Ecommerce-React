import React from 'react'
import './OfferCard.css'
import offer from './images/offer.png'
import { Link } from 'react-router-dom'

const OfferCard = ({ offerData }) => {
    const truncatedTitle = offerData.title.length > 20 ? offerData.title.slice(0, 20) + '..' : offerData.title;
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
        <div className="card  offpd-card">
            <img src={offer} alt="ss" className='offer-banner' />
            <img src={offerData.image} className="card-img-top offpd-img py-2" alt="Product 1" />
            <div className="card-body">
                <h5 className="card-title">{truncatedTitle}</h5>
                <div className="mb-2">
                    {renderStars(offerData.rating.rate)}({offerData.rating.count})
                </div>

                <p className="card-text">
                    Offer Price: <strong>${offerData.price.toFixed(2)}</strong>
                    <del className="text-danger ms-2">${(offerData.price * 1.2).toFixed(2)}</del>
                </p>
                <p className='deliver'>Free Dalivary By FlipMart</p>
                <Link to={'/products/' + offerData.id} className="btn btn-warning">View Product</Link>
            </div>
        </div>
    )
}

export default OfferCard