import React from 'react';

const ManagerOrdersRow = ({ allOrder, refetch, index }) => {
    const { _id, userName, quantity, email, name, price, total, paid, shipped } = allOrder

    const handleSubmit = id => {

        fetch(`https://pure-mesa-75303.herokuapp.com/order/shipped/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
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
            <td>Total: {total}</td>
            <td>
                {
                    paid && !shipped ? < button onClick={() => handleSubmit(_id)} className='btn btn-xs btn-warning'>Pending</button> : ''
                }
                {
                    !paid && < button className='btn btn-xs btn-ghost'>Unpaid</button>
                }
                {
                    shipped && < button className='btn btn-xs btn-success'>Shipped</button>
                }
            </td>
        </tr >
    );
};

export default ManagerOrdersRow;