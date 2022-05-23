import React from 'react';

const ManagerUsersRow = ({ user, refetch, index }) => {
    const { _id, name, email } = user;

    const handleDelete = _id => {
        fetch(`http://localhost:5000/user/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }

    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td><button className='btn btn-sm btn-warning text-accent-content'>Make Admin</button></td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-sm btn-error text-accent-content'>Remove</button></td>
        </tr>
    );
};

export default ManagerUsersRow;