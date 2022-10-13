import React from 'react';
import Dennis from "../assets/images/Dennis.jpg";
import BrownImg from "../assets/images/BrownImg.jpg";
import ReactPlayer from 'react-player';
import Footer from './Footer';

const MyStory = () => {
    const videoSrc = "https://youtu.be/5rSmZqLPRiE";

    return (
        <div>
            <div className="mystory__container">
                <div className='mystory__content'>
                    <img src={Dennis} alt="dennis-background" className="mystory__header" />
                    <h1 className="mystory__header__text">LA MIA<br></br>STORIA</h1>
                </div>
                <div className="mystory__context">
                    <img src={BrownImg} alt="brown-background" className="mystory__context__img" />
                </div>
                <div className="mystory__text__container">
                    <p className="mystory__text">INSEGUI I TUOI SOGNI, TI RENDE VIVO</p>
                    <p className="mystory__text__content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Eu turpis egestas pretium aenean pheretra. Rhonus matis rhonous urna neque viverra.</p>
                </div>
                <div className="mystory__video__container">
                    <ReactPlayer
                        url={videoSrc}
                        width="380px"
                        height="360px"
                        controls={true}
                    />
                </div>
                <Footer />
            </div>

        </div>
    );
}

export default MyStory;
