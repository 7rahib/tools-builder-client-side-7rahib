import React from 'react';

const Portfolio = () => {
    return (
        <body class="min-h-screen">
            <div class="container mx-auto">
                <div class="flex justify-center px-6 my-12">
                    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div
                            class="w-full h-auto bg-base-100 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg bg-profile"
                        ></div>
                        <div class="w-full lg:w-1/2 bg-base-300 p-5 rounded-lg lg:rounded-l-none">
                            <div class="px-8 mb-4">
                                <h3 class="pt-4 mb-2 text-2xl">Naimur Rashid Rahib</h3>
                                <p class="mb-4 text-sm text-neutral-content">
                                    Address: Mirer Maydan, Sylhet, Bangladesh
                                </p>
                                <p class="mb-4 text-sm text-neutral-content">
                                    Phone number: +8801785766545
                                </p>
                                <p class="mb-4 text-sm text-neutral-content">
                                    Email: naimurrashidrahib@gmail.com
                                </p>
                                <p class="mb-4 text-sm text-neutral-content">
                                    LinkedIn: <a href="https://www.linkedin.com/in/naimur-rahib-82a487176/">Naimur Rahib</a>
                                </p>
                            </div>
                            <hr class="mb-6 border-t" />
                            <div class="px-8 pt-6 pb-8 mb-4 bg-base-100 rounded">
                                <div class="mb-4">
                                    Few Projects:
                                </div>
                                <div class="text-center my-2">
                                    <a className='font-semibold text-lg' href="https://your-inventory-7rahib.web.app/">YourInventory</a><br />
                                    <a href="https://your-inventory-7rahib.web.app/">https://your-inventory-7rahib.web.app/</a><br />
                                </div>
                            </div>
                            <div class="px-8 pt-6 pb-8 mb-4 bg-base-100 rounded">
                                <div class="text-center my-2">
                                    <a className='font-semibold text-lg' href="https://independent-service-prov-7c968.web.app/">StoryMaker</a><br />
                                    <a href="https://independent-service-prov-7c968.web.app/">https://independent-service-prov-7c968.web.app/</a><br />
                                </div>
                            </div>
                            <div class="px-8 pt-6 pb-8 mb-4 bg-base-100 rounded">
                                <div class="text-center my-2">
                                    <a className='font-semibold text-lg' href="https://product-analysis-website-7rahib.netlify.app/">Product Analysis</a><br />
                                    <a href="https://product-analysis-website-7rahib.netlify.app/">https://product-analysis-website-7rahib.netlify.app/</a><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Portfolio;