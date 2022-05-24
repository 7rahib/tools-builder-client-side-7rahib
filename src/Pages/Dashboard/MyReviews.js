import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ReviewsCard from './ReviewsCard';

const MyReviews = () => {
    const navigate = useNavigate();
    const user = useAuthState(auth);
    const email = user[0]?.email;

    const { data: reviews, isLoading } = useQuery('reviews', () => fetch(`http://localhost:5000/reviews/${email}`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    const addAReview = () => {
        navigate('/addreview')
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-2xl m-3'>All Orders</h3>
            <div className='flex justify-end'>
                <button onClick={addAReview} className='btn btn-info text-neutral-content'>Add a Review</button>
            </div>
            <div>
                {
                    reviews.map(review => <ReviewsCard
                        key={review._id}
                        review={review}
                    ></ReviewsCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;