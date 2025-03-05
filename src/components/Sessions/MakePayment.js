
const MakePayment = ({ session }) => {
    return (
        <div className="py-6 text-center">
            {session?.promo_video && (
                <div className="mt-4 mb-6 flex justify-center">
                    <div className="relative w-full max-w-lg rounded-lg overflow-hidden shadow-xl bg-[#e0f7fa] p-1">
                        <video
                            controls
                            className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
                        >
                            <source
                                src={`${session?.promo_video}`}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}

            <h1 className="text-2xl font-semibold text-[#572c57]">
                💰 Paid Session Available!
            </h1>
            <p className="text-[#323e4c] mt-2 text-sm">
                This session requires payment to enroll.
            </p>

            <div className="mt-4 p-4 bg-[#f8f8f8] rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-[#e26972]">
                    Price: ${session?.membership_fee || "N/A"}
                </h2>
            </div>

            <button className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-[#FF7F50] to-[#28A745] text-white font-semibold text-lg shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2">
                Proceed to Payment 💳
            </button>
        </div>
    );
};

export default MakePayment;