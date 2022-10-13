import React from 'react';
import AboutImg from "../assets/images/AboutImg.jpg";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="about__container">
                <div className="about__content">
                    <h1 className="about__content__text">SU DI ME</h1>
                </div>
                <div className="lorem__ipsum__container">
                    <p className="lorem__ipsum__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Eu turpis egestas pretium aenean pheretra. Rhonus matis rhonous urna neque viverra.
                    </p>
                </div>
                <div className="legi__content">
                    <Link to="/mystory" className="leggi__button">LEGGI DI PIÙ</Link>
                </div>
                <div className="about__image">
                    <img src={AboutImg} alt="about" className="about__img" />
                </div>
            </div>
        </div>
    );
}

export default About;
