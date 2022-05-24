import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrdersRow from './MyOrdersRow';

const MyOrders = () => {
    const user = useAuthState(auth);
    const email = user[0]?.email;
    const navigate = useNavigate()
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/order/${email}`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === '401' || res.status === '403') {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/login');
        }
        refetch()
        return res.json()
    }))


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-2xl m-3'>My Orders</h3>
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
                            <th>Payment</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <MyOrdersRow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                            ></MyOrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;