import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-hero-pattern">
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">We are leading in Tools Building</h1>
                    <p className="mb-5 text-3xl">Get to know more about our products and services</p>
                    <button className="btn btn-primary">Check out</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;