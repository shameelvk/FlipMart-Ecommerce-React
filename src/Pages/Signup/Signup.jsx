import React from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {
    return (
        <div className="container my-4" >
            <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img src="https://static.vecteezy.com/system/resources/previews/009/473/196/non_2x/online-shopping-application-illustration-concept-on-white-background-vector.jpg" alt="Signup" className="img-fluid" />
                </div>
                
                <div className="col-md-6">
                    <div className="signup-form">
                        <div>
                            <h2>Welcome To FlipMart</h2>
                            <p>Create your account to get started</p>
                        </div>
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="fullName" placeholder="Full Name" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Email" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                            </div>
                            <div className="mb-3">
                                <input type="tel" className="form-control" id="phoneNumber" placeholder="Phone Number" />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="agreeTerms" />
                                    <label className="form-check-label" htmlFor="agreeTerms">I agree to the terms</label>
                                </div>
                                <a href="#" className="text-decoration-none text-dark-emphasis">Forgot Password?</a>
                            </div>
                            <button type="submit" className="btn btn-warning btn-block mt-3 w-100">Signup</button>
                        </form>
                        <div className="mt-3 text-center">
                        <div className="mt-3 text-center">
                        
                         </div>
                            <p>Already have an account?  <Link to={'/login'} className="text-decoration-none text-dark-emphasis"><strong className='text-danger'>Login</strong></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
