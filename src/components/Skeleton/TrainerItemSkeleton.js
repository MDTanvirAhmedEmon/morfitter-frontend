
const TrainerItemSkeleton = () => {
  return (
    <div className="border-2 border-secondary p-2 md:p-3 rounded-lg md:flex items-center justify-between mb-5 animate-pulse">
      <div className="md:flex items-center gap-4 w-full">
        {/* Profile & Name */}
        <div className="flex items-center gap-3 shadow-[2px_8px_8px_2px_rgba(0,0,0,0.1)] py-4 px-4 lg:px-10 rounded-xl mb-5 md:mb-0">
          <div className="w-16 h-16 border-4 border-secondary rounded-lg bg-gray-300"></div>
          <div>
            <div className="h-4 w-24 bg-gray-300 rounded mb-1"></div>
            <div className="h-3 w-16 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Specialism Icons */}
        <div className="flex gap-1 overflow-x-auto mb-5 md:mb-0">
          <div className="flex gap-1 flex-nowrap xl:flex-wrap">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[100px] lg:h-[100px] p-2 text-center rounded border-2 border-solid border-transparent bg-gray-300"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Ratings & Distance */}
      <div className="flex items-center justify-end xl:gap-16 w-full">
        {/* Contact & Session Formats */}
        <div className="flex flex-col justify-center items-center">
          <div className="mb-3 h-8 w-24 bg-gray-300 rounded-full"></div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              <div className="h-3 w-16 bg-gray-300 rounded mt-1"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              <div className="h-3 w-16 bg-gray-300 rounded mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerItemSkeleton;
