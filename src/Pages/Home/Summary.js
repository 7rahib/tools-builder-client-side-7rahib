import React from 'react';

const Summary = () => {
    return (
        <div className='my-28 '>
            <h3 className='text-3xl text-center text-info font-semibold'>Our Business Summary</h3>
            <div className='flex justify-center'>
                <div className="stats w-full m-16 bg-base-200 pb-28 shadow-2xl">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Revenue</div>
                        <div className="stat-value text-primary">120M+</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">42% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">96%</div>
                        <div className="stat-title">Orders delivered on time</div>
                        <div className="stat-desc text-secondary">2k orders remaining</div>
                    </div>

                </div>

            </div>
            <div className='flex justify-center'>
                <div className="card w-3/4 bg-base-300 text-neutral-content mt-[-150px] shadow-2xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">Do you have any questions ?</h2>
                        <p className='text-xl'>Feel free to ask our support team. We are available 24/7 at your service</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-info">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;