import React from 'react';

const ManagerUsersRow = ({ user, refetch, index }) => {
    const { name, email } = user;

    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td><button className='btn btn-sm btn-warning text-accent-content'>Make Admin</button></td>
            <td><button className='btn btn-sm btn-error text-accent-content'>Remove</button></td>
        </tr>
    );
};

export default ManagerUsersRow;