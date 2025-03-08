
const ChatsSkeleton = () => {
    return (
        <div
            className="flex flex-col bg-transparent md:bg-slate-50 p-3 rounded-md mb-2 absolute top-16 bottom-20 right-0 left-0 overflow-auto"
        >
            {/* Skeleton Loader for Messages */}
            {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className={`mt-2 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <span
                        className={`mb-2 p-2 max-w-xs ${index % 2 === 0 ? "bg-primary" : "bg-gray-200"
                            } rounded-md animate-pulse`}
                        style={{ width: `${Math.floor(Math.random() * 200) + 100}px`, height: '20px' }}
                    ></span>
                </div>
            ))}

            {/* Placeholder for the end of messages */}
            <div></div>
        </div>
    );
};

export default ChatsSkeleton;