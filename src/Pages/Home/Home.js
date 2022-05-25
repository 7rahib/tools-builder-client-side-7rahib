import React from 'react';
import Contact from './Contact';
import Feature from './Feature';
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
            <Feature></Feature>
            <MyReviews></MyReviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;