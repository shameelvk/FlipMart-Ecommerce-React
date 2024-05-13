import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>About</h5>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Our Team</li>
                            <li>Our Mission</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Help</h5>
                        <ul className="list-unstyled">
                            <li>FAQs</li>
                            <li>Support</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-md-3  border-end border-white">
                        <h5>Consumer Policy</h5>
                        <ul className="list-unstyled">
                            <li>Privacy Policy</li>
                            <li>Refund Policy</li>
                            <li>Shipping Policy</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Mail Us</h5>
                        <address>
                            123 Main Street<br />
                            City, State 12345<br />
                            Email: info@example.com
                        </address>
                    </div>
                </div>
                <div className="row border-top border-white mt-4  " style={{height:"8vh"}}>
                    <div className="col text-center d-flex justify-content-center align-items-center my-auto">
                        <p className='m-0'>© 2024 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
