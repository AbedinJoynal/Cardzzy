import React from 'react';
import './Done.css';
import icon from '../images/icon-complete.svg';
const Done = () => {
    return (
        <div className="done-wrapper">
            <img className="done-img" src={icon} alt="" />
            <h3 className="done-header">Thank You !!</h3>
            <p className="done-text">We have added your cart details</p>
            <a href="/">
                <button className="done-btn">Continue</button>
            </a>
        </div>
    );
};

export default Done;
