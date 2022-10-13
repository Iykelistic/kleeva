import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import Footer from './Footer';

const Contact = () => {
    return (
        <div>
            <div className="contact__container">
                <div className="contact__content">
                    <hr className="contact__hr"></hr>
                    <h1 className="contact__title">CONTATTAMI</h1>

                    <div className="contact__icons">
                        <div className="contact__icon">
                            <BsWhatsapp className="contact__icon__i" />
                        </div>
                        <p className="contact__text">WHATSAPP</p>
                        <div className="contact__icon">
                            <BiPhoneCall className="contact__icon__i" />
                        </div>
                        <p className="contact__text">CHIAMATA</p>
                        <div className="contact__icon">
                            <AiOutlineMail className="contact__icon__i" />
                        </div>
                        <p className="contact__text">E-MAIL</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
