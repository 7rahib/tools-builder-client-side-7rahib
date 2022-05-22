import React from 'react';
import { useParams } from 'react-router-dom';

const CheckoutPage = () => {
    const { _id } = useParams();
    return (
        <div>
            {_id}
        </div>
    );
};

export default CheckoutPage;