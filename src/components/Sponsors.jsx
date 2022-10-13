import React from 'react';
import Logo1 from "../assets/images/Logo1.png";
import Logo2 from "../assets/images/Logo2.png";
import Logo3 from "../assets/images/Logo3.gif";
import Def from "../assets/images/Def.png";
import Ribero from "../assets/images/Ribero.webp";
import Carousel from 'react-elastic-carousel';

const Sponsors = () => {
    return (
        <div>
            <div className="sponsors__container">
                <div className="sponsors__content">
                    <hr className="sponsors__hr"></hr>
                    <h1 className="sponsors__title">I MIEI SPONSOR</h1>
                    <p className="sponsors__text">Un grazie a chi mi sta supportando in questo viaggio</p>
                </div>
                <div className="sponsors__logos">
                    <Carousel itemsToShow={1} >
                        <div className="sponsors__logo_1">
                            <img src={Logo1} alt="logo1" className="sponsors__logo" />
                        </div>
                        <div className="sponsors__logo_1">
                            <img src={Logo2} alt="logo2" className="sponsors__logo" />
                        </div>
                        <div className="sponsors__logo_1">
                            <img src={Logo3} alt="logo3" className="sponsors__logo_i" />
                        </div>
                        <div className="sponsors__logo_1">
                            <img src={Def} alt="logo4" className="sponsors__logo_i" />
                        </div>
                        <div className="sponsors__logo_1">
                            <img src={Ribero} alt="logo5" className="sponsors__logo_i" />
                        </div>
                    </Carousel>
                </div>

                <div className="devi__content">
                    <button className="devi__button">DIVENTA SPONSOR!</button>
                </div>

            </div>

        </div>
    );
}

export default Sponsors;
