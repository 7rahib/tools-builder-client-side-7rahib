import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
import ManagerOrdersRow from './ManagerOrdersRow';

const ManageOrders = () => {
    const user = useAuthState(auth)
    const navigate = useNavigate()
    const { data: allOrders, isLoading, refetch } = useQuery('allOrders', () => fetch('http://localhost:5000/order', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    const [token] = useToken(user)



    if (token) {
        navigate('/login')
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-2xl m-3'>All Orders</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders?.map((allOrder, index) => <ManagerOrdersRow
                                key={allOrder._id}
                                allOrder={allOrder}
                                index={index}
                                refetch={refetch}
                            ></ManagerOrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;