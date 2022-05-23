import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const user = useAuthState(auth)
    return (
        <div>
            <h1 className="text-2xl m-3">My Profile</h1>
            <div className="hero bg-base-300 rounded-3xl">
                <div className="hero-content text-center">
                    <div className="max-w-md m-3">
                        <div className="form-control w-full max-w-sm my-1 ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" disabled value={user[0].displayName} className="input input-bordered w-full max-w-sm text-lg" />
                        </div>
                        <div className="form-control w-full max-w-sm my-2 ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" disabled value={user[0].email} className="input input-bordered w-full max-w-sm text-lg" />
                        </div>
                        <div className="form-control w-full max-w-sm my-2 ">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" value={user[0].displayName} className="input input-bordered w-full max-w-sm text-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;