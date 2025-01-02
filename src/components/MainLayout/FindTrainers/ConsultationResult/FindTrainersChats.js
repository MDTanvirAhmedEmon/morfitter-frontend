import { useState } from 'react';
import { Button, ConfigProvider, Drawer, Input } from 'antd';

const FindTrainersChats = ({ onClose, open }) => {
    const myId = "67540e5778ae7939cbc3d2da";
    // const [messageInput, setMessageInput] = useState(""); // State for input value
    const data = {
        data: [
            {
                _id: "6754236635df8546e0419520",
                sender: "6750485a2e391899dda58e19",
                receiver: "67540e5778ae7939cbc3d2da",
                message: "Hello",
                createdAt: "2024-12-07T10:28:54.194Z",
                updatedAt: "2024-12-07T10:28:54.194Z",
                __v: 0
            },
            {
                _id: "6754250bf7af973834fdaf08",
                sender: "67540e5778ae7939cbc3d2da",
                receiver: "6750485a2e391899dda58e19",
                message: "Hello World",
                createdAt: "2024-12-07T10:35:55.850Z",
                updatedAt: "2024-12-07T10:35:55.850Z",
                __v: 0
            },
            {
                _id: "67542528f7af973834fdaf0c",
                sender: "6750485a2e391899dda58e19",
                receiver: "67540e5778ae7939cbc3d2da",
                message: "Hello",
                createdAt: "2024-12-07T10:36:24.100Z",
                updatedAt: "2024-12-07T10:36:24.100Z",
                __v: 0
            },
            {
                _id: "67542530f7af973834fdaf10",
                sender: "6750485a2e391899dda58e19",
                receiver: "67540e5778ae7939cbc3d2da",
                message: "Hello",
                createdAt: "2024-12-07T10:36:32.269Z",
                updatedAt: "2024-12-07T10:36:32.269Z",
                __v: 0
            },
            {
                _id: "6754250bf7af973834fdaf08",
                sender: "67540e5778ae7939cbc3d2da",
                receiver: "6750485a2e391899dda58e19",
                message: "Hello World",
                createdAt: "2024-12-07T10:35:55.850Z",
                updatedAt: "2024-12-07T10:35:55.850Z",
                __v: 0
            },
            {
                _id: "675426605332b95b48f55553",
                sender: "6750485a2e391899dda58e19",
                receiver: "67540e5778ae7939cbc3d2da",
                message: "Hello",
                createdAt: "2024-12-07T10:41:36.698Z",
                updatedAt: "2024-12-07T10:41:36.698Z",
                __v: 0
            },
        ]
    };

    // const handleSendMessage = () => {
    //     if (messageInput.trim()) {
    //         console.log("Message sent:", messageInput);
    //         setMessageInput(""); // Clear input after sending
    //     }
    // };

    return (
        <Drawer

            onClose={onClose} open={open} width={400}
        >
            <div className="flex flex-col h-full relative">
                {/* Chat messages */}
                <div className=" flex flex-col bg-transparent md:bg-slate-50 p-3 rounded-md mb-2 absolute top-0 bottom-16 right-0 left-0">
                    {data?.data?.map((msg, index) => (
                        <div key={index} className={`mt-2 flex ${msg?.sender === myId ? 'justify-end' : 'justify-start'}`}>
                            <span
                                className={`mb-2 p-2 max-w-xs ${msg?.sender === myId
                                    ? "bg-primary text-white"
                                    : "bg-gray-200 text-black"
                                    } rounded-md`}
                            >
                                {msg?.message}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Chat input */}
                <div className="flex items-center gap-2 absolute bottom-4 right-3 left-3">
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: "#1ABC9C",
                                    colorPrimaryActive: "#1ABC9C",
                                    colorPrimaryHover: "#1ABC9C"
                                },
                                Input: {
                                    activeBorderColor: "rgb(0,0,0)",
                                    hoverBorderColor: "rgb(0,0,0)",
                                    activeBg: "rgb(255,255,255)",
                                    activeBorderColor: "rgba(0,0,0,0)",
                                    hoverBg: "rgb(255,255,255)"
                                }
                            },
                        }}
                    >
                        <Input
                            placeholder="Type message here"
                        // value={messageInput}
                        // onChange={(e) => setMessageInput(e.target.value)}
                        // onPressEnter={handleSendMessage}
                        />
                        <button className=" bg-primary px-4 text-white py-2 rounded-md" >
                            Send
                        </button>
                    </ConfigProvider>
                </div>
            </div>
        </Drawer>
    );
};

export default FindTrainersChats; 