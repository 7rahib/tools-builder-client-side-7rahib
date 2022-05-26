import React from 'react';

const Feature = () => {
    return (
        <div class="py-16 bg-base-100 overflow-hidden">
            <div class="container px-6 space-y-8 text-gray-500 md:px-12">
                <div>
                    <span class="text-neutral-content text-3xl font-semibold text-center">Main features</span>
                    <h2 class="mt-4 text-2xl text-neutral-content font-bold md:text-4xl">A technology-first approach to Delivery <br class="lg:block" hidden /> and Tools Production</h2>
                </div>
                <div class="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                    <div class="relative group bg-base-200 transition hover:z-[1] hover:shadow-2xl">
                        <div class="relative p-8 space-y-8">
                            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png" class="w-10" width="512" height="512" alt="burger illustration" />

                            <div class="space-y-2">
                                <h5 class="text-xl text-neutral-content font-medium transition group-hover:text-yellow-600">We are Leading in our Field</h5>
                                <p class="text-sm text-neutral-content">Industry Leading meatures are taken to be on top always</p>
                            </div>
                            <div class="flex justify-between items-center group-hover:text-yellow-600">
                                <span class="text-sm">Read more</span>
                            </div>
                        </div>
                    </div>
                    <div class="relative group bg-base-200 transition hover:z-[1] hover:shadow-2xl">
                        <div class="relative p-8 space-y-8">
                            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png" class="w-10" width="512" height="512" alt="burger illustration" />

                            <div class="space-y-2">
                                <h5 class="text-xl text-neutral-content font-medium transition group-hover:text-yellow-600">Quality Ensured</h5>
                                <p class="text-sm text-neutral-content">Our quality checks are best in the world. End of the story!!</p>
                            </div>
                            <div class="flex justify-between items-center group-hover:text-yellow-600">
                                <span class="text-sm">Read more</span>
                            </div>
                        </div>
                    </div>
                    <div class="relative group bg-base-200 transition hover:z-[1] hover:shadow-2xl">
                        <div class="relative p-8 space-y-8">
                            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png" class="w-10" width="512" height="512" alt="burger illustration" />

                            <div class="space-y-2">
                                <h5 class="text-xl text-neutral-content font-medium transition group-hover:text-yellow-600">Our Product Line</h5>
                                <p class="text-sm text-neutral-content">Very unique product line and reliable product line</p>
                            </div>
                            <div class="flex justify-between items-center group-hover:text-yellow-600">
                                <span class="text-sm">Read more</span>
                            </div>
                        </div>
                    </div>
                    <div class="relative group bg-base-200 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                        <div class="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-base-200 group-hover:border group-hover:scale-90">
                            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png" class="w-10" width="512" height="512" alt="burger illustration" />

                            <div class="space-y-2">
                                <h5 class="text-xl text-neutral-content font-medium transition group-hover:text-yellow-600">Our Services</h5>
                                <p class="text-sm text-neutral-content">Our service system until the product life ends is comparable to none</p>
                            </div>
                            <div class="flex justify-between items-center group-hover:text-yellow-600">
                                <span class="text-sm">Read more</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;