import React from 'react';
import swal from 'sweetalert';

const ManagerProductRow = ({ product, refetch, index }) => {
    const { _id, name, quantity, price, image } = product;

    const handleDelete = _id => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://cryptic-island-51343.herokuapp.com/tools/${_id}`, {
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
            <td><button onClick={() => handleDelete(_id)} className='btn btn-sm btn-error text-accent-content'>Remove</button></td>
        </tr>
    );
};

export default ManagerProductRow;