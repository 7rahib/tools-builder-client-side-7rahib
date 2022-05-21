import React from 'react';

const ToolsCard = ({ tool }) => {
    const { name, about, price, quantity, min_quantity, image } = tool

    return (
        <div className="card lg:card-side bg-base-200 shadow-xl m-5">
            <div className='grid lg:grid-cols-2'>
                <div>
                    <img className='h-full w-full' src={image} alt={name} />
                </div>
                <div className="card-body">
                    <h2 className="card-title text-info">{name}</h2>
                    <p className='text-info'>{about}</p>
                    <p className='text-info'>Price: ${price}</p>
                    <p className='text-info'>Available quantity: {quantity} pieces</p>
                    <p className='text-error'>{min_quantity} pieces is our minimum order number</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning">Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;