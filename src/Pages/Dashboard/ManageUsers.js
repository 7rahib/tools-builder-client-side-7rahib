import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManagerUsersRow from './ManagerUsersRow';

const ManageUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <ManagerUsersRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></ManagerUsersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageUsers;