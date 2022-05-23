import React from 'react';

const ManagerOrdersRow = ({ allOrder, refetch, index }) => {
    const { userName, quantity, email, name, price } = allOrder

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
            <td>Pending</td>
        </tr>
    );
};

export default ManagerOrdersRow;