import React from 'react';
import './LoveWeb5.css';
import { AiFillStar } from 'react-icons/ai';
import { FaBuilding, FaTrophy, FaUsers } from 'react-icons/fa';

const LoveWeb5 = () => {
    return (
        <div className="love-web5-container">
            <div className="header-content">
                <h1>More Reasons to Love Web5 Solutions</h1>
            </div>
            <div className="stars">
                {[...Array(5)].map((_, index) => (
                    <AiFillStar key={index} className="star" />
                ))}
            </div>
            <div className="icons">
                <div className="icon">
                    <FaBuilding className="icon-svg" />
                    <span>3+</span>
                    <p>Worldwide Offices</p>
                </div>
                <div className="icon">
                    <FaTrophy className="icon-svg" />
                    <span>5+</span>
                    <p>Award Winning</p>
                </div>
                <div className="icon">
                    <FaUsers className="icon-svg" />
                    <span>100+</span>
                    <p>Clients</p>
                </div>
                <div className="icon">
                    <FaUsers className="icon-svg" />
                    <span>50+</span>
                    <p>Team Members</p>
                </div>
            </div>
        </div>
    );
};

export default LoveWeb5;
