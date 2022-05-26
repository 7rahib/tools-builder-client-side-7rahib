import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const UpdateProfile = () => {

    const user = useAuthState(auth);
    const email = user[0].email;
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const updateProfile = {
            address: data.address,
            education: data.education,
            institution: data.institution
        };
        fetch(`https://pure-mesa-75303.herokuapp.com/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updateProfile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                reset();
                navigate('/dashboard/profile');
            })
    }
    return (
        <div>
            <h1 className="text-2xl m-3">My Profile</h1>

            <div className='flex justify-center items-center'>
                <div className="card w-96 bg-base-200 shadow-xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <div className='flex'>
                                    <div className="form-control w-full max-w-xs mr-2">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={(user[0]?.displayName)}
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={(user[0]?.email)}
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Address"
                                    className="textarea textarea-bordered w-full max-w-xs"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Address is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-error">{errors.address.message}</span>}
                                </label>
                            </div>

                            <div className='flex'>
                                <div className="form-control w-full max-w-xs mr-2">
                                    <label className="label">
                                        <span className="label-text">Education</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Education"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("education", {
                                            required: {
                                                value: true,
                                                message: 'Education is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.education?.type === 'required' && <span className="label-text-alt text-error">{errors.education.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Institution</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Institute"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("institution", {
                                            required: {
                                                value: true,
                                                message: 'Institution is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.institution?.type === 'required' && <span className="label-text-alt text-error">{errors.institution.message}</span>}
                                    </label>
                                </div>
                            </div>
                            <input className='btn btn-info w-full max-w-xs text-accent-content mt-2' type="submit" value="Update Profile" />
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default UpdateProfile;