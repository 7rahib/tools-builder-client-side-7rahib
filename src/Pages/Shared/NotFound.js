import React from 'react';

const NotFound = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className=''>
                <img src="https://i.ibb.co/nrvR1sd/404-pages.jpg" alt="" />
                <h1 className='text-error text-4xl font-semibold text-center my-3'>Error</h1>
                <p className='text-warning text-2xl text-center'>The Page you are looking is not found</p>
            </div>
        </div>
    );
};

export default NotFound;