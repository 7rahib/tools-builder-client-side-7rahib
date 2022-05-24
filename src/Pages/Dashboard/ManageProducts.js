import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManagerProductRow from './ManageProductRow';

const ManageProducts = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/tools').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-2xl m-3'>All Products</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManagerProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                            ></ManagerProductRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;