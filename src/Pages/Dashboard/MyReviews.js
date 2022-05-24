import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyReviews = () => {
    const navigate = useNavigate()

    const addAReview = () => {
        navigate('/addreview')
    }

    return (
        <div>
            <p>Review</p>
            <div className='flex justify-end'>
                <button onClick={addAReview} className='btn btn-info'>Add a Review</button>
            </div>
        </div>
    );
};

export default MyReviews;