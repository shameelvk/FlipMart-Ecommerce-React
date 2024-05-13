import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className="container my-4  " style={{height:"95vh"}}>
            <div className="row d-flex align-items-center justify-content-center h-100">
                
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img src="https://static.vecteezy.com/system/resources/previews/007/814/278/non_2x/discounts-sale-illustration-online-store-in-the-mobile-application-of-the-smartphone-tiny-people-choose-goods-at-low-prices-in-their-gadgets-free-vector.jpg" alt="Login" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <div className="login-form">
                        <div>
                            <h2>Welcome To FlipMart</h2>
                            <p>Enter your credentials to log in</p>
                        </div>
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="username" placeholder="Username" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className=" d-flex justify-conten-end align-items.center ">
                            <div className="col">
                                <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                               
                        
                                </div>
                            </div>
                            <div className="col d-flex justify-content-end">
                            <a href="#" className='text-decoration-none text-dark-emphasis'>Forgot Password?</a>
                            </div>
                            </div>
                           
                            
                            <button type="submit" className="btn btn-warning btn-block w-100">Login</button>
                        </form>
                        <div className="mt-3 text-center">
                        <Link to={'/signup'} className='text-decoration-none text-dark-emphasis'>I don't have have an account? <strong className='text-danger'>Sign up</strong></Link>
                        
                         </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login