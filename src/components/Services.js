import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const Services = () => {
    return (
        <div className="services">
            <h2>Select Our Services</h2>
            <div className="service-buttons">
                <button className="arrow-button"><FaArrowLeft /></button>
                <button>All</button>
                <button>AI Services</button>
                <button>DAPPS/DAX Development</button>
                <button>3D Modeling</button>
                <button>Private Blockchain</button>
                <button>ICO Launchpad Solution</button>
                <button className="arrow-button"><FaArrowRight /></button>
            </div>
        </div>
    );
};

export default Services;
