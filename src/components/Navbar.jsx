import React, { useState } from 'react';
import logo from "../assets/images/logo.png";
import background from "../assets/images/background.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = ({
    handleClick,
    showAbout,
}) => {
    const [click, setClick] = useState(false);
    return (
        <div>
            <div className='background__image'>
                <img src={background} alt='background' className="background__img" />
            </div>
            <div className='navbar'>
                <img src={logo} alt='logo' className="logo" />
                {
                    click ? <FaTimes className="navbar__icon" onClick={() => setClick(!click)} /> :
                        <GiHamburgerMenu className="navbar__icon" onClick={() => setClick(!click)} />
                }
                {
                    !click ?
                        <div className="bounce"
                            onClick={handleClick}

                        >

                            <MdKeyboardArrowDown className="arrow__icon" />
                        </div> : null

                }

            </div>
            {
                click ? <div className="navbar__menu">
                    <ul className="navbar__list">
                        <Link to="/about" className="navbar__item_la" >
                            LA MIA STORIA
                        </Link>
                        <Link to="/sponsors" className="navbar__item_i">
                            I MIEI SPONSOR
                        </Link>
                        <Link to="/contact" className="navbar__item__i">
                            I MIEI CONTATTI
                        </Link>
                        <Link to="/privacy" className="navbar__item">
                            PRIVACY POLICY
                        </Link>
                    </ul>
                    <p className="navbar__text__p">© Powered by Medya Stack</p>
                </div> : null
            }
        </div>
    );
}

export default Navbar;
