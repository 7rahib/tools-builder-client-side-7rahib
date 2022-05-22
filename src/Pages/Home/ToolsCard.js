import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolsCard = ({ tool }) => {
    const { _id, name, about, price, quantity, min_quantity, image } = tool;
    const navigate = useNavigate();

    const handleCheckout = _id => {
        navigate(`/tools/${_id}`)
    }

    return (
        <div className="card lg:card-side bg-base-200 shadow-xl m-5 text-neutral-content">
            <div className='grid lg:grid-cols-2'>
                <div>
                    <img className='h-full w-full' src={image} alt={name} />
                </div>
                <div className="card-body">
                    <h2 className="card-title ">{name}</h2>
                    <p>{about}</p>

                    <p className='mt-4'>Available quantity: {quantity} pieces</p>
                    <p><span className='text-warning'>{min_quantity} pieces</span> is our minimum order limit</p>
                    <p className='text-success font-semibold text-xl'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleCheckout(_id)} className="btn btn-accent">Order</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ToolsCard;