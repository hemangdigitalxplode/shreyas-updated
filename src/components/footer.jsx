import React from "react";
import logo from '../assets/images/logo.png'
import mapImg from '../assets/images/logo.png'


const Footer = () => {

    return (
        <>
            <footer className="footer">

                {/* TOP FOOTER */}
                <div className="container footer-top">
                    <div className="row gy-4">

                        {/* LOGO + SOCIAL + MAP */}
                        <div className="col-lg-4 col-md-6">
                            <img src={logo} alt="Shreyas Group" className="footer-logo" />

                            <div className="social-icons">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-x-twitter"></i>
                                <i className="fab fa-youtube"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-linkedin-in"></i>
                            </div>

                            {/* Google Map Iframe */}
                            <div className="footer-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.61401954845!2d77.0688997!3d28.527582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05f4d15b7f01%3A0x8f2b5c7c62cbd8b6!2sDelhi!5e0!3m2!1sen!2sin!4v1710000000000"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                    title="Location Map"
                                ></iframe>
                            </div>
                        </div>


                        {/* QUICK LINKS */}
                        <div className="col-lg-2 col-md-6">
                            <h6>Quick Links</h6>
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Businesses</li>
                                <li>Manufacturing</li>
                                <li>Sustainability</li>
                                <li>Quality & Certifications</li>
                                <li>Gallery</li>
                                <li>Exports</li>
                                <li>Careers</li>
                            </ul>
                        </div>

                        {/* BUSINESSES */}
                        <div className="col-lg-3 col-md-6">
                            <h6>Businesses</h6>
                            <ul>
                                <li>Shreyas Sortex Industries Private Limited</li>
                                <li>Kisan Distilleries Private Limited</li>
                                <li>Shreyas Distilleries & Energy Private Limited</li>
                            </ul>
                        </div>

                        {/* ABOUT */}
                        <div className="col-lg-3 col-md-6">
                            <h6>About Us</h6>
                            <ul>
                                <li>Sustainability</li>
                                <li>Newsroom</li>
                                <li>Careers</li>
                                <li>Downloads</li>
                                <li>Contact Us</li>
                                <li>Locate us</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="footer-bottom">
                    <div className="container d-flex justify-content-between flex-wrap">
                        <p>Copyright © Shreyas Group of Companies</p>

                        <div className="footer-links">
                            <span>Legal Disclaimer</span>
                            <span>Privacy Notice</span>
                            <span>Terms & Conditions</span>
                            <span>Cookie Policy</span>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;