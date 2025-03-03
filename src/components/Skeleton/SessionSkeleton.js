
const SessionSkeleton = () => {
    return (
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-10'>
            {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="cursor-pointer h-[400px] shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-md relative">
                    {/* Image Skeleton */}
                    <div className="w-full h-[55%] bg-gray-200 animate-pulse rounded-t-md"></div>

                    <div className='mx-4 py-3'>
                        {/* Avatar and Name Skeleton */}
                        <div className='flex items-center gap-3'>
                            <div className="w-[50px] h-[50px] bg-gray-200 animate-pulse rounded-full"></div>
                            <div className="flex-1">
                                <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
                                <div className="h-3 bg-gray-200 animate-pulse rounded w-1/2 mt-2"></div>
                            </div>
                        </div>

                        {/* Title Skeleton */}
                        <div className="mt-4">
                            <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
                            <div className="h-4 bg-gray-200 animate-pulse rounded w-2/3 mt-2"></div>
                        </div>

                        {/* Rating Skeleton */}
                        <div className="flex items-center gap-2 absolute bottom-4 left-4">
                            <div className="w-6 h-6 bg-gray-200 animate-pulse rounded-full"></div>
                            <div className="h-4 bg-gray-200 animate-pulse rounded w-8"></div>
                        </div>

                        {/* Price Skeleton */}
                        <div className="font-semibold absolute bottom-4 right-4">
                            <div className="h-4 bg-gray-200 animate-pulse rounded w-16"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SessionSkeleton;