import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
//import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        We at Nutriio, are dedicated to rivive and spread awareness of the long lost- traditional
                        ingridents through our wide range of products. We take pride in reintroducing our traditional
                        'Superfoods' with a promise of quality. The new age touch will ensure the taste & daily nutrient needs of your whole family.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                        Bengaluru, Karnataka, India
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +91 7259232905</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: hello@nutriio.in</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Superfoods</span>
                    <span className="text">Sprouted Flours</span>
                    <span className="text">Ready to Cook</span>
                    
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                    Copyright ©2023 All rights reserved | Made by Nutriio
                    </span>
                    {/* <img src={Payment} /> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;
