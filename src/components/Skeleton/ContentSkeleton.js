
const ContentSkeleton = () => {
    return (
        <div className="px-3 mx-0 py-5">
            <div className="px-2 md:px-5 py-10 border border-gray-300 shadow-[0px_0px_19px_0px_rgba(0,0,0,0.2)] rounded-2xl flex flex-col md:flex-row gap-5">

                {/* Post Details Section Skeleton */}
                <div className="w-full">
                    <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
                        <div className="flex items-center gap-8">
                            {/* Profile Image Skeleton */}
                            <div className="w-28 h-24 rounded-lg bg-gray-200 animate-pulse"></div>
                            <div className="flex flex-col gap-2">
                                {/* Name Skeleton */}
                                <div className="w-32 h-6 bg-gray-200 animate-pulse rounded"></div>
                                {/* Specialism Skeleton */}
                                <div className="w-24 h-5 bg-gray-200 animate-pulse rounded"></div>
                            </div>
                        </div>
                        {/* Date Skeleton */}
                        <div className="md:pt-3">
                            <div className="w-24 h-5 bg-gray-200 animate-pulse rounded"></div>
                        </div>
                    </div>

                    {/* Post Content Skeleton */}
                    <div className="mt-3 md:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {/* Image Skeleton */}
                        <div className="rounded-2xl w-full overflow-hidden">
                            <div className="w-full h-[450px] bg-gray-200 animate-pulse"></div>
                        </div>
                        {/* Description Skeleton */}
                        <div className="border border-gray-300 p-5 rounded-lg">
                            <div className="hidden md:block w-48 h-6 bg-gray-200 animate-pulse rounded mb-5"></div>
                            <div className="space-y-3">
                                <div className="w-full h-4 bg-gray-200 animate-pulse rounded"></div>
                                <div className="w-full h-4 bg-gray-200 animate-pulse rounded"></div>
                                <div className="w-3/4 h-4 bg-gray-200 animate-pulse rounded"></div>
                            </div>
                        </div>
                    </div>

                    {/* Button Section Skeleton */}
                    <div className="btn-part flex gap-3 md:gap-12 items-center mt-6">
                        {/* Like Button Skeleton */}
                        <div className="w-40 h-11 bg-gray-200 animate-pulse rounded-lg"></div>
                        {/* Comment Button Skeleton */}
                        <div className="w-40 h-11 bg-gray-200 animate-pulse rounded-lg"></div>
                        {/* Share Button Skeleton */}
                        <div className="w-40 h-11 bg-gray-200 animate-pulse rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSkeleton;