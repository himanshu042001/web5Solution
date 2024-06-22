import React from 'react';
import './WhatOffer.css';
import { FiArrowUpRight } from 'react-icons/fi';

const Offer = () => {
    return (
        <div className="offer-component">
            <div className="offer-header">
                <h2>What Do We Offer?</h2>
            </div>
            <div className="offer-subheader">
                <p>Revolutionize Your Digital Odyssey with Web5 Solution</p>
            </div>
            {/* box1 */}
            <div className="offer-content">
                <div className="offer-left">
                    <p className="offer-left-header">01 ICO Launchpad Solution</p>
                </div>
                <div className="offer-right">
                    <h3 className="offer-right-header">ICO Launchpad Solutions</h3>
                    <p className="offer-right-description">
                        Unlock decentralized fundraising with our IDO Launchpad. From strategy to execution, we simplify tokenization for successful venture launches.
                    </p>
                </div>
            </div>

            {/* box2 */}
            <div className="offer-content">
                <div className="offer-left-2">
                    <p className="offer-left-header">Web3 Marketing</p>
                </div>
                <div className="offer-right-2">
                    <h3 className="offer-right-header">Web3 Marketing</h3>
                    <p className="offer-right-description">
                        Elevate your brand online with our Web3 Digital Marketing Services. From expanding your digital presence to navigating cryptocurrency marketing, we’ve got you covered.
                    </p>
                </div>
            </div>

            {/* box3 */}
            <div className="offer-content">
                <div className="offer-left">
                    <p className="offer-left-header">02 ICO Launchpad Solution</p>
                </div>
                <div className="offer-right">
                    <h3 className="offer-right-header">ICO Launchpad Solutions</h3>
                    <p className="offer-right-description">
                        Unlock decentralized fundraising with our IDO Launchpad. From strategy to execution, we simplify tokenization for successful venture launches.
                    </p>
                </div>
            </div>
            {/* Know More Button */}
            <div className="know-more-button">
                <button className="know-more-btn">
                    Know More
                    <FiArrowUpRight className="arrow-icon" />
                </button>
            </div>
        </div>
    );
};

export default Offer;
