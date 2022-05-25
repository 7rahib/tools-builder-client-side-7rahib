import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewsCard from './ReviewsCard';

const MyReviews = () => {

    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('http://localhost:5000/reviews',).then(res => {
        refetch()
        return res.json()
    }))


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-5 min-h-screen'>
            <h3 className='text-3xl text-center text-info font-semibold mb-7'>All Reviews</h3>
            <div className='flex justify-center'>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 justify-center m-3 gap-4'>
                    {
                        reviews?.map(review => <ReviewsCard
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