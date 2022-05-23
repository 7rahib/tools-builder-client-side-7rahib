import React from 'react';

const ManagerProductRow = ({ product, refetch, index }) => {
    const { name, quantity, price, image } = product;

    return (
        <tr className='hover'>
            <td>
                <div className="flex justify-start items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt={name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                ${price} per unit
            </td>
            <td>{quantity} pieces</td>
            <td><button className='btn btn-sm btn-error text-accent-content'>Remove</button></td>
        </tr>
    );
};

export default ManagerProductRow;