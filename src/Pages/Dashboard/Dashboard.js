import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const user = useAuthState(auth)
    return (
        <div>
            <h3 className='text-3xl text-center mt-5 text-info'>Your Dashboard</h3>
            <div className="flex justify-start">
                <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                </label>
            </div>
            <div className="drawer drawer-mobile lg:p-8">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li>{(user[0]) && <>
                            <Link to='/dashboard'>My Orders</Link>
                            <Link to='/dashboard/review'>My Reviews</Link>
                        </>}</li>
                        <li><Link to='/dashboard/profile'>My Profile</Link></li>
                        <li><Link to='/dashboard/manageproduct'>Manage All Products</Link></li>
                        <li><Link to='/dashboard/manageorder'>Manage All Orders</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add New Products</Link></li>
                        <li><Link to='/dashboard/manageuser'>Manage All User</Link></li>
                    </ul>
                </div>
            </div >
        </div>
    );
};

export default Dashboard;