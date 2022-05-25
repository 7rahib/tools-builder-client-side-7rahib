import React from 'react';

const ManagerOrdersRow = ({ allOrder, refetch, index }) => {
    const { userName, quantity, email, name, price, total } = allOrder

    const totalPrice = (parseInt(quantity) * parseInt(price))
    return (
        <tr className='hover'>
            <td>{index + 1}</td>
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
            <td>Total: {total}</td>
            <td>Pending</td>
        </tr>
    );
};

export default ManagerOrdersRow;