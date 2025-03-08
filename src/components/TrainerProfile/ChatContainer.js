"use client";
import { useGetMessageWithOthersQuery } from '@/redux/features/chats/chatsApi';
import { chatsUrl } from '@/utils/Url';
import { Avatar, ConfigProvider, Drawer, Input } from 'antd';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import ChatsSkeleton from '../Skeleton/ChatsSkeleton';

export default function ChatContainer({ selectedUser, setSelectedUser }) {
    const socket = io(chatsUrl);
    const { user, role } = useSelector((state) => state.auth);
    const { data: messageFromDB, isLoading } = useGetMessageWithOthersQuery({ sender: user?._id, receiver: selectedUser?.traineeTrainerId });
    console.log(messageFromDB);
    const [message, setMessage] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const chatContainerRef = useRef(null);
    const messageEndRef = useRef(null); // Dummy div for auto scroll
    const [showScrollButton, setShowScrollButton] = useState(false);


    useEffect(() => {
        if (messageFromDB) {
            setMessage(messageFromDB?.data);
        }
        scrollToBottom();
    }, [messageFromDB]);


    useEffect(() => {
        socket.on(`received${user?._id}`, (data) => {
            console.log('from socket', data);
            setMessage((prevMessages) => [...prevMessages, data]);
            scrollToBottom();
        });
    }, [user?._id, socket]);

    const sendMessage = () => {
        if (selectedUser?.traineeTrainerId && messageInput) {
            socket.emit('sendUser', {
                sender: user?._id,
                receiver: selectedUser?.traineeTrainerId,
                message: messageInput
            });
            setMessage((prevMessages) => [...prevMessages, { sender: user?._id, message: messageInput }]);
            setMessageInput('');
            scrollToBottom();
        }
    };

    const scrollToBottom = () => {
        setTimeout(() => {
            if (messageEndRef.current) {
                messageEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
            }
        }, 100);
    };

    const handleScroll = () => {
        if (chatContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
            setShowScrollButton(scrollHeight - (scrollTop + clientHeight) > 50);
        }
    };

    return (
        <div className="flex flex-col h-full relative">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                    <Avatar size={40} src={selectedUser?.profileImageUrl} />
                    <h3 className=' capitalize'>{selectedUser?.firstName} {selectedUser?.lastName}</h3>
                </div>
                <button
                    onClick={() => setSelectedUser(null)}
                    className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                >
                    Back
                </button>
            </div>

            {/* Chat messages */}
            {
                isLoading ?
                    <ChatsSkeleton></ChatsSkeleton>
                    :
                    <div
                        ref={chatContainerRef}
                        onScroll={handleScroll}
                        className="flex flex-col bg-transparent md:bg-slate-50 p-3 rounded-md mb-2 absolute top-16 bottom-20 right-0 left-0 overflow-auto"
                    >
                        {message?.map((msg, index) => (
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
                        <div ref={messageEndRef}></div>
                    </div>
            }


            {/* Scroll to bottom button */}
            {showScrollButton && (
                <button
                    onClick={scrollToBottom}
                    className="absolute text-[20px] bottom-20 right-4 bg-primary text-white px-2 py-1 rounded-full shadow-md"
                >
                    ↓
                </button>
            )}

            {/* Chat input */}
            <div className="flex items-center gap-2 absolute bottom-3 right-3 left-3">
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
                    />
                    <button onClick={sendMessage} className=" bg-primary px-4 text-white py-2 rounded-md">
                        Send
                    </button>
                </ConfigProvider>
            </div>
        </div>
    );
}
