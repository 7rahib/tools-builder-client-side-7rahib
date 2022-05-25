import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const MyOrdersRow = ({ order, refetch, index }) => {
    const { _id, userName, quantity, email, name, price, total, paid, transactionId } = order


    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "This user will have Admin power!!!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://cryptic-island-51343.herokuapp.com/order/${id}`, {
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
                } else {
                }
            });
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
            <td>${price}</td>
            <td>{quantity} pieces</td>
            <td>Total: {total}</td>
            <td>
                {(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-sm btn-success text-accent-content'>Pay</button></Link>}
                {(price && paid) && <>
                    <p><span className='text-success'>Payment completed</span></p>
                    <p className='text-xs'>Transaction: <span className='text-success'>{transactionId}</span></p>
                </>}
            </td>
            <td>
                {
                    !paid && <button onClick={() => handleDelete(_id)} className='btn btn-xs btn-error text-accent-content'>Cancel</button>
                }
                {
                    paid && <button disabled onClick={() => handleDelete(_id)} className='btn btn-xs btn-error text-accent-content'>Cancel</button>
                }
            </td>
        </tr >
    );
};

export default MyOrdersRow;