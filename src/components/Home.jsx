import React from 'react';
import Navbar from './Navbar';

const Home = ({
    showAbout,
    toggleAbout
}) => {
    return (
        <div>
            <Navbar
                handleClick={toggleAbout}
                showAbout={showAbout}

            />
        </div>
    );
}

export default Home;