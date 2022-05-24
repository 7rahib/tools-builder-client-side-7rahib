import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ReviewsCard from './ReviewsCard';

const MyReviews = () => {
    const user = useAuthState(auth);
    const email = user[0]?.email;

    const { data: reviews, isLoading } = useQuery('reviews', () => fetch(`http://localhost:5000/reviews/${email}`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-5'>
            <h3 className='text-3xl text-center text-info font-semibold mb-7'>All Reviews</h3>
            <div className='flex justify-center'>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 justify-center m-3 gap-4'>
                    {
                        reviews.map(review => <ReviewsCard
                            key={review._id}
                            review={review}
                        ></ReviewsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyReviews;