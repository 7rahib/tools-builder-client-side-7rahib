import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
import MyOrdersRow from './MyOrdersRow';

const MyOrders = () => {
    const user = useAuthState(auth);
    const email = user[0]?.email;
    const navigate = useNavigate();

    const url = `https://pure-mesa-75303.herokuapp.com/order/${email}`;
    const { data: orderInfo, isLoading } = useQuery('orderInfo', () => fetch(url, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
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
            <h3 className='text-2xl m-3'>My Orders</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
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
                            orderInfo?.map((order, index) => <MyOrdersRow
                                key={order._id}
                                order={order}
                                index={index}
                            ></MyOrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;