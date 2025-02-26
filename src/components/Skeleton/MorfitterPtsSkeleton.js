import React from 'react';

const MorfitterPtsSkeleton = () => {
    return (

        [...Array(2)].map((_, index) => (
            <div key={index} className="rounded-xl shadow-lg mx-3 px-3 md:px-12 md:mx-0 py-6 flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-6">
                <div className="w-full md:w-[50%] xl:w-[40%] 2xl:w-[20%]">
                    <div className="w-32 h-32 rounded-full bg-gray-200 animate-pulse"></div>
                    <div className="mt-3">
                        <div className="h-6 w-48 bg-gray-200 animate-pulse mb-2"></div>
                        <div className="h-4 w-24 bg-gray-200 animate-pulse"></div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="h-8 w-64 bg-gray-200 animate-pulse mb-4"></div>
                    <div className="h-4 w-full bg-gray-200 animate-pulse mb-2"></div>
                    <div className="h-4 w-3/4 bg-gray-200 animate-pulse mb-6"></div>

                    <div className="h-6 w-72 bg-gray-200 animate-pulse mb-4"></div>
                    <div className="h-6 w-48 bg-gray-200 animate-pulse mb-4"></div>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-4 w-full">
                        {[...Array(3)].map((_, index) => (
                            <div
                                key={index}
                                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[100px] lg:h-[100px] bg-gray-200 animate-pulse rounded"
                            ></div>
                        ))}
                    </div>

                    <div className="mt-6">
                        <div className="h-10 w-48 bg-gray-200 animate-pulse rounded-full"></div>
                    </div>
                </div>
            </div>
        )))
};

export default MorfitterPtsSkeleton;