import React from "react";
import Logo from '../assets/images/logo.png';

const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">

                    {/* LEFT: Logo */}
                    <a className="navbar-brand fw-bold" href="/">
                        <img
                            src={Logo}
                            alt="Logo"
                            height="60"
                            className="me-2"
                        /> 
                    </a>

                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Content */}
                    <div className="collapse navbar-collapse" id="mainNavbar">

                        {/* CENTER: Nav Links */}
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4 text-center">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Manufacturing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sustainability</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Quality & Certifications</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Exports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Carrers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>

                        {/* RIGHT: Login + Language */}
                        <div className="d-flex align-items-center justify-content-center gap-3">

                            {/* Login Icon */}
                            <i className="fa-solid fa-user"></i>
                            <i className="fa-solid fa-magnifying-glass"></i>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;