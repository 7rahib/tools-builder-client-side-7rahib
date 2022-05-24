import React from 'react';

const MyOrdersRow = ({ order, refetch, index }) => {
    const { _id, userName, quantity, email, name, price } = order

    const totalPrice = (parseInt(quantity) * parseInt(price))

    const handleDelete = _id => {
        fetch(`http://localhost:5000/order/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
    }

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
            <td>Total: {totalPrice}</td>
            <td><button className='btn btn-sm btn-success'>Payment</button></td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-sm btn-error text-accent-content'>Cancel</button></td>
        </tr>
    );
};

export default MyOrdersRow;