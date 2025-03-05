"use client"
import { useGetMessageWithOthersQuery } from '@/redux/features/chats/chatsApi';
import { ConfigProvider, Drawer, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

const FindTrainersChats = ({ onClose, open, receiverId }) => {
    const socket = io('http://localhost:5000/live-chats');
    const { user, role } = useSelector((state) => state.auth)
    const { data: messageFromDB } = useGetMessageWithOthersQuery({ sender: user?._id, receiver: receiverId });
    const [message, setMessage] = useState(messageFromDB);
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        if (messageFromDB) {
            setMessage(messageFromDB);
        }
    }, [messageFromDB]);

    useEffect(() => {
        socket.on(`received${user?._id}`, (data) => {
            console.log('from socket', data);
            setMessage((prevsetMessage) => [...prevsetMessage, data]);
        });
        return () => {
            socket.disconnect();
        }
    }, [user?._id, socket]);

    const sendMessage = () => {
        console.log(messageInput);
        if (receiverId && message) {
            socket.emit('sendUser', {
                sender: user?._id,
                receiver: receiverId,
                message: messageInput
            });
        }
        setMessageInput('')
    };

    return (
        <Drawer

            onClose={onClose} open={open} width={400}
        >
            <div className="flex flex-col h-full relative">
                {/* Chat messages */}
                <div className=" flex flex-col bg-transparent md:bg-slate-50 p-3 rounded-md mb-2 absolute top-0 bottom-16 right-0 left-0">
                    {message?.data?.map((msg, index) => (
                        <div key={index} className={`mt-2 flex ${msg?.sender === user?._id ? 'justify-end' : 'justify-start'}`}>
                            <span
                                className={`mb-2 p-2 max-w-xs ${msg?.sender === user?._id
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
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                        // onPressEnter={handleSendMessage}
                        />
                        <button onClick={sendMessage} className=" bg-primary px-4 text-white py-2 rounded-md" >
                            Send
                        </button>
                    </ConfigProvider>
                </div>
            </div>
        </Drawer>
    );
};

export default FindTrainersChats; 