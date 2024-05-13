import React from 'react'
import './ContactUs.css'

function ContactUs() {
    return (
        <div className="container mt-3">
            <div className="row w-100 text-center">
                <div className="col-12 align-items-center justify-content center">
                    <h2>Contact Us</h2>
                    <p>
                        We're here to help. If you have any questions or inquiries, feel free to contact us using the form below.
                    </p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">

                    <img src="https://static.vecteezy.com/system/resources/previews/007/620/779/non_2x/male-customer-support-phone-operator-with-headset-working-in-call-center-concept-illustration-free-vector.jpg" alt="Contact" className="contact-image" />
                </div>
                <div className="col-md-6">

                    <div className="contact-form">

                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Your Email</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-warning">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs