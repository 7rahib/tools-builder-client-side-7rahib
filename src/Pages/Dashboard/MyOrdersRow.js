import React from 'react';

const MyOrdersRow = ({ order, refetch, index }) => {
    const { userName, quantity, email, name, price } = order

    const totalPrice = (parseInt(quantity) * parseInt(price))

    return (
        <tr className='hover'>
            <td>
                <div className="font-bold">{userName}</div>
            </td>
            <td>
                {email}
            </td>
            <td>
                {name}
            </td>
            <td>${price} per pieces</td>
            <td>{quantity} pieces</td>
            <td>Total: {totalPrice}</td>
            <td>Total: {totalPrice}</td>
        </tr>
    );
};

export default MyOrdersRow;