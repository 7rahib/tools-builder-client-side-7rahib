import React from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const user = useAuthState(auth)

    const { data: toolsName, isLoading } = useQuery('toolsname', () => fetch('http://localhost:5000/tools', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        const review = {
            toolName: data.name,
            userName: user[0].displayName,
            email: user[0].email,
            userReview: data.review,
            rating: data.rating,
            image: data.image
        };
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                reset();
            })
    }



    return (
        <div>
            <div className='flex justify-center mt-10'>
                <div className="card lg:w-lg bg-base-200 shadow-2xl text-neutral-content">
                    <div className="card-body">
                        <h2 className="card-title">Welcome <span className='text-warning'>{(user[0]?.displayName)}</span>,</h2>
                        <p>You have logged in with <span className='text-warning'>{(user[0]?.email)}</span>. We will contact you there if needed.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-center items-center my-12'>
                    <div className="card w-96 bg-base-200 shadow-xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Tool Name</span>
                                    </label>
                                    <select {...register("name")} className="select w-full input-bordered max-w-xs">
                                        {
                                            toolsName.map(toolName => <option
                                                key={toolName._id}
                                                value={toolName.name}
                                            >{toolName.name}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Review</span>
                                    </label>
                                    <textarea
                                        className="textarea textarea-bordered w-full max-w-xs"
                                        {...register("review", {
                                            required: {
                                                value: true,
                                                message: 'Review is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.review?.type === 'required' && <span className="label-text-alt text-error">{errors.review.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("image")}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("rating", {
                                            required: {
                                                value: true,
                                                message: 'Rating is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.rating?.type === 'required' && <span className="label-text-alt text-error">{errors.rating.message}</span>}
                                    </label>
                                </div>
                                <input className='btn btn-info w-full max-w-xs text-accent-content mt-2' type="submit" value="Post Your Review" />
                            </form>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default AddReview;