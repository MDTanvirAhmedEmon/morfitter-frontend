import React from 'react';

const InvitationSkeleton = () => {
    return (
        <div className="mt-5 flex justify-between items-center gap-2 animate-pulse">
            {/* Left Side: Profile Image and Name */}
            <div className="flex items-center justify-center gap-2">
                {/* Profile Image Skeleton */}
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                {/* Name Skeleton */}
                <div className="space-y-2">
                    <div className="w-24 h-4 bg-gray-200 rounded"></div>
                    <div className="w-20 h-4 bg-gray-200 rounded"></div>
                </div>
            </div>

            {/* Right Side: Button Skeleton */}
            <div>
                <div className="w-20 h-8 bg-gray-200 rounded"></div>
            </div>
        </div>

    );
};

export default InvitationSkeleton;