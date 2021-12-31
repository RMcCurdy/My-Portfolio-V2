import React from 'react';
import RobertAnimation from './RobertAnimation';
import HomePageMessage from './HomePageMessage';

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <RobertAnimation />
                <HomePageMessage />
            </div>
        </>
    );
};

export default Home;
