
const SessionSkeleton = () => {
    return (
        <div className='mt-10 grid grid-cols-2 lg:grid-cols-4 gap-10'>
            {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className='cursor-pointer'>
                    <div className='w-full h-[450px] bg-gray-200 animate-pulse'></div>
                </div>
            ))}
        </div>
    );
};

export default SessionSkeleton;