import React from 'react';

const ManagerUsersRow = ({ user, refetch, index }) => {
    const { name, email } = user;

    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{email}</td>
            <td>{email}</td>
        </tr>
    );
};

export default ManagerUsersRow;