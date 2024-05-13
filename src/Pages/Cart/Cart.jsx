import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './Cart.css'

const Cart = () => {
    const {productData,cartItems,removeFromCart,getTotalCartAmount,addToCart,removeProductFromCart,clearAllCart}=useContext(ShopContext)
 

    return (
        <div className='container p-2'>
            <div className='row m-2'>
                <div className='col-12  table-responsive'>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col text-center">Actions</th>
                                <th scope="col">Total</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productData.map((product) => {
                                if(cartItems[product.id]>0){
                                    return(<tr key={product.id}>
                                        <td><img src={product.image} alt={product.name} style={{ width: '100px' }} /></td>
                                        <td className='p-2'>{product.title}</td>
                                        <td>${product.price}</td>
                                        <td>{cartItems[product.id]}</td>
                                       <td> 
                                        <button className="btn btn-dark mx-2" onClick={() => addToCart(product.id)}>+</button>
                                        <button className="btn btn-dark" onClick={() => removeFromCart(product.id)}>-</button>
                                       </td>
                                        <td>${product.price * cartItems[product.id]}</td>
                                        <td><button className="btn btn-danger" onClick={() => removeProductFromCart(product.id)}>Remove</button></td>
                                    </tr>)
                                }

                            }
                                
                            )}
                        </tbody>
                    </table>
                </div>
                <div className='row align-items-center mt-3'>
                    <div className="col-md-6 col-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title mb-2 ">Cart Total Details</h5>
                                <hr />
                                <p className=''>Subtotal: ${getTotalCartAmount()}</p>
                                <hr />
                                <p>Shipping Fee: Free</p>
                                <hr />
                                <p>Total: ${getTotalCartAmount()}</p>
                                <hr />
                                <button className="btn btn-warning btn-block pay-btn">Proceed to Pay</button>
                                <button className="btn btn-danger btn-block pay-btn mx-2" onClick={()=>clearAllCart()}>Clear All</button>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="input-group">
                            <input type="text" className="form-control promocode-input" placeholder="Enter Promo Code" />
                            <button className="btn btn-secondary promocode-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
