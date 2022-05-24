import React from 'react';
import { toast } from 'react-toastify';

const ManagerUsersRow = ({ user, refetch, index }) => {
    const { _id, name, email, role } = user;

    const handleDelete = email => {
        fetch(`http://localhost:5000/user/${email}`, {
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

    const makeAdmin = _id => {
        fetch(`http://localhost:5000/user/admin/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Only an admin make make another admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{role === 'admin' ? <button className="btn btn-xs btn-success" disabled="disabled">Already Admin</button> : <button onClick={() => makeAdmin(email)} className="btn btn-warning btn-sm">Make Admin</button>}</td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-sm btn-error text-accent-content'>Remove</button></td>
        </tr>
    );
};

export default ManagerUsersRow;