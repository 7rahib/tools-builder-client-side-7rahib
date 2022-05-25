import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const { data: orderData, isLoading } = useQuery(['orderData', id], () => fetch(`http://localhost:5000/order/${id}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-2xl text-info'>Payment Process</h3>
            <div className='flex justify-center items-center'>
                <div>
                    <div class="card w-full max-w-lg bg-base-300 shadow-xl my-12">
                        <div class="card-body">
                            <p className="font-bold">Hello, {orderData.userName}</p>
                            <p class="text-xl">Confirm your order of <span className='font-bold'>{orderData.name}</span></p>
                            <p>Your have ordered <span className='text-warning'>{orderData.quantity}</span> pieces. Per unit price is <span className='text-success'>${orderData.price}</span></p>
                            <p>You have to pay <span className='text-success'>${orderData.total}</span> in total</p>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-300">
                        <div class="card-body">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;