import React from 'react';
import logo from "../assets/images/logo.png";
import cropped from "../assets/images/cropped.png";
import fisip from "../assets/images/fisip.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__logo">
                        <img src={cropped} alt="logo" className="footer__logo__img_i" />
                        <img src={logo} alt="cropped" className="footer__logo__img_ii" />
                        <img src={fisip} alt="fisip" className="footer__logo__img_iii" />
                    </div>
                    <hr className="footer__hr"></hr>
                    <div className="footer__icons">
                        <div className="footer__icon">
                            <AiOutlineInstagram className="footer__icon_i" />
                            <FiFacebook className="footer__icon__i" />
                            <AiOutlineTwitter className="footer__icon___i" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
