
const SingleSessionSkeleton = () => {
    return (
        <div className=" container mx-auto py-10">
            <div className="w-full flex flex-col md:flex-row bg-gray-50 shadow-md rounded-lg p-4">
                <div className=" md:w-[30%] md:pr-4 mb-6 md:mb-0">
                    <div className="w-full h-10 bg-gray-200 animate-pulse rounded-md mb-4"></div>
                    <div className="w-full h-10 bg-gray-200 animate-pulse rounded-md"></div>
                </div>
                <div className="w-full h-[450px] md:h-[600px] bg-gray-200 animate-pulse rounded-md shadow-lg mb-4"></div>
            </div>
        </div>
    );
};

export default SingleSessionSkeleton;