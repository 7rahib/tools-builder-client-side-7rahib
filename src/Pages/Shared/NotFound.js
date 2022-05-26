import React from 'react';

const NotFound = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div>
                <h1 className='text-center bg-base-300 text-error text-7xl p-5 mask mask-circle'>!</h1>
                <h1 className='text-error text-4xl font-semibold text-center my-3'>Error</h1>
                <p className='text-warning text-2xl'>The Page you are looking is not found</p>
            </div>
        </div>
    );
};

export default NotFound;