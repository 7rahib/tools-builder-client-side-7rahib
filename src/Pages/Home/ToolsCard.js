import React from 'react';

const ToolsCard = ({ tool }) => {
    const { name, about, price, quantity, min_quantity, image } = tool

    return (
        <div className="card lg:card-side bg-base-200 shadow-xl m-5 text-neutral-content">
            <div className='grid lg:grid-cols-2'>
                <div>
                    <img className='h-full w-full' src={image} alt={name} />
                </div>
                <div className="card-body">
                    <h2 className="card-title ">{name}</h2>
                    <p>{about}</p>
                    <p className='text-success'>Price: ${price}</p>
                    <p >Available quantity: {quantity} pieces</p>
                    <p className='text-warning'>{min_quantity} pieces is our minimum order number</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent">Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;