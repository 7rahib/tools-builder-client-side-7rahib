import React from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const ManagerUsersRow = ({ user, refetch, index }) => {
    const { _id, name, email, role } = user;

    const handleDelete = email => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://cryptic-island-51343.herokuapp.com/user/${email}`, {
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

    const makeAdmin = _id => {

        swal({
            title: "Are you sure?",
            text: "This user will have Admin power!!!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://cryptic-island-51343.herokuapp.com/user/admin/${_id}`, {
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
                } else {
                }
            });
    }

    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{role === 'admin' ? <button className="btn btn-xs btn-success" disabled="disabled">Already Admin</button> : <button onClick={() => makeAdmin(email)} className="btn btn-warning btn-sm">Make Admin</button>}</td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-xs btn-error text-accent-content'>Remove</button></td>
        </tr>
    );
};

export default ManagerUsersRow;