import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {


    const user = useAuthState(auth);
    const email = user[0].email;

    const { data: userProfile, isLoading } = useQuery('userProfile', () => fetch(`https://pure-mesa-75303.herokuapp.com/user/${email}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h1 className="text-2xl m-3">My Profile</h1>

            <div class="flex flex-col md:lg:xl:flex-row mt-5">

                <div class="md:lg:xl:w-full bg-base-100 flex justify-center content-center ">

                    <div class="md:lg:xl:w-1/2 bg-neutral-800 flex flex-wrap justify-center content-center ">

                        <div class="bg-base-300 p-8 rounded-xl shadow-xl shadow-neutral-900 w-120">

                            <div class="flex justify-between mb-4">
                                <div>
                                    <p class="text-xl font-semibold text-white">{(user[0]?.displayName)}</p>
                                </div>
                            </div>
                            <span class="text-orange-300 px-3 text-lg py-1.5 bg-red-900 rounded-lg font-semibold">{(user[0]?.email)}</span>


                            <div class="flex items-center justify-between mt-5 border-t border-dashed border-neutral-700 space-y-4">
                                <div class="flex items-center">

                                    <span class="text-neutral-500 text-lg">Education: {userProfile.education}</span>
                                </div>

                            </div>
                            <div class="my-5">

                                <div class="flex justify-between  group cursor-pointer">
                                    <div>
                                        <p class="text-lg text-neutral-400 group-hover:text-red-500 duration-150 ">Institute: {userProfile.institution}</p>
                                    </div>
                                </div>

                                <div class="flex justify-between group  cursor-pointer">
                                    <div>
                                        <p class="text-lg text-neutral-400 group-hover:text-red-500 duration-150">Address: {userProfile.address}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="my-5">

                                <div class="flex justify-between  group cursor-pointer">
                                    <div>
                                        <p class="text-lg text-neutral-400 group-hover:text-red-500 duration-150 ">Phone: {userProfile.phone}</p>
                                    </div>
                                </div>

                                <div class="flex justify-between group  cursor-pointer">
                                    <div>
                                        <p class="text-lg text-neutral-400 group-hover:text-red-500 duration-150">LinkedIn: {userProfile.linkedIn}</p>
                                    </div>
                                </div>
                            </div>
                            <Link to='/dashboard/updateprofile'><button className='btn btn-info w-full max-w-xs text-accent-content mt-2'>Update Profile</button></Link>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;