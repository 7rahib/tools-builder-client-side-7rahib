import React from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const user = useAuthState(auth)


    const onSubmit = data => {
        console.log(data, user[0].displayName, user[0].email)
        reset()
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
                                    <input
                                        type="text"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                                    </label>
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
                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: 'Image is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.image?.type === 'required' && <span className="label-text-alt text-error">{errors.image.message}</span>}
                                    </label>
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