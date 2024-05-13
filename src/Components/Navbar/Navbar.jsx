import React from 'react';
import { useState,useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cartIcon from '../../assets/cart_icon.png'
import './Navbar.css'
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {
  
    const [searchText, setSearchText] = useState("")
    const {getTotalCartItem} = useContext(ShopContext)
   
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">FlipMart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                        <NavLink to={'/'} className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to={'/Products'} className="nav-link">Products</NavLink>
                         </li>
                        <li className="nav-item">
                            <NavLink to={'/about-us'} className="nav-link">About Us</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex mx-auto my-2 my-lg-0 nav-search">
                        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" onChange={($e)=>{
                            setSearchText($e.target.value)
                        }}/>
                         <NavLink to={'/products?search='+searchText} className="btn btn-outline-success">Search</NavLink>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink to={'/contact-us'} className="nav-link">Contact Us</NavLink>
                         </li>
                        <li className="nav-item">
                            <NavLink to={'/login'} className="nav-link">Login / Signup</NavLink>
                         
                        </li>
                        <li className="nav-item">
                        <NavLink to={'/cart'} className="nav-link cart-nav" >
                                <img src={cartIcon} alt="" style={{width:"2vw"}} className='cart-img' />
                                <div className="cart-count">
                                    {getTotalCartItem()}
                                </div>
                                </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
