import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const MakePayment = ({ session }) => {
    const createOrder = async () => {
        const response = await fetch("/api/paypal/create-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ trainerPaypalEmail, sessionPrice }),
        });
        const data = await response.json();
        return data.approvalUrl; // Return approval URL to redirect user to PayPal
    };

    const onApprove = async (data) => {
        // After approval, capture payment and transfer 90% to the trainer
        await fetch(`/api/paypal/execute-payment?paymentId=${data.paymentID}&PayerID=${data.payerID}&trainerPaypalEmail=${trainerPaypalEmail}&sessionPrice=${sessionPrice}`, {
            method: "POST",
        });
        alert("Payment successful!");
    };

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
            <PayPalScriptProvider options={{ "client-id": process.env.PAYPAL_CLIENT_ID }}>
                <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
            </PayPalScriptProvider>

        </div>
    );
};

export default MakePayment;