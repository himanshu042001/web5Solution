import React, { useState, useEffect } from 'react';
import './Header.css';
import { FiArrowUpRight } from 'react-icons/fi';

const Header = () => {
    const texts = ["Blockchain Solutions", "Web3 Marketing", "Fundraising Solutions", "DEX Development"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000); // Change text every 2 seconds
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="header-container">
            <div className="header-left">
                <div className="header-title">
                    <h1>Exceeding Outlooks</h1>
                </div>
                <div className="header-highlight">
                    <span className="header-in">In</span>
                    <span className="header-highlight-text">{texts[currentTextIndex]}</span>
                </div>
                <div className="header-description">
                    <p>Web5 Solution: Building the Decentralized Future.</p>
                    <p>Next-Gen Blockchain solution for a connected world.</p>
                </div>
                <button className="contact-btn">
                    Contact
                    <FiArrowUpRight className="arrow-icon" /> 
                </button>
            </div>
        </div>
    );
};

export default Header;
