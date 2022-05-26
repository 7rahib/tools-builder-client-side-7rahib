import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ManagerUsersRow from './ManagerUsersRow';

const ManageUsers = () => {
    const navigate = useNavigate()
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => {
        if (res.status === '401' || res.status === '403') {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/login');
        }
        return res.json()
    }))


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-2xl m-3'>All Users</h3>
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