import React from 'react';
import Hero from './Hero';
import MyReviews from './MyReviews';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Tools></Tools>
            <Summary></Summary>
            {/* <MyReviews></MyReviews> */}
        </div>
    );
};

export default Home;