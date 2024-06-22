import React from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-buttons">
                <a href="/">Home</a>
                <a href="/services">Services</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/about">About</a>
                <a href="/blogs">Blogs</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div className="navbar-talk">
                <FaRegDotCircle className="talk-icon" />
                <span>Let's Talk!</span>
            </div>
        </nav>
    );
};

export default Navbar;
