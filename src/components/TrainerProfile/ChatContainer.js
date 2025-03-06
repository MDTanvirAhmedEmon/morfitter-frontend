"use client"
import { useGetMessageWithOthersQuery } from '@/redux/features/chats/chatsApi';
import { Avatar, ConfigProvider, Drawer, Input } from 'antd';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

export default function ChatContainer({ selectedUser, setSelectedUser, messageEndRef }) {
    const socket = io('http://localhost:5000/live-chats');
    const { user, role } = useSelector((state) => state.auth)
    const { data: messageFromDB } = useGetMessageWithOthersQuery({ sender: user?._id, receiver: selectedUser?.traineeTrainerId });
    const [message, setMessage] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    const chatContainerRef = useRef(null);  // Reference for the chat container

    // Scroll to the top when new messages are received or when chat container is loaded
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = 0;  // Scroll to top
        }
        if (messageFromDB) {
            setMessage(messageFromDB?.data);
        }
    }, [messageFromDB]);  // Trigger when new messages are fetched

    const goBackToUserList = () => {
        setSelectedUser(null);
    };
    useEffect(() => {
        socket.on(`received${user?._id}`, (data) => {
            console.log('from socket', data);
            setMessage((prevsetMessage) => [...prevsetMessage, data]);
        });
        // return () => {
        //     socket.disconnect();
        // }
    }, [user?._id, socket]);

    const sendMessage = () => {
        console.log(messageInput);
        if (selectedUser?.traineeTrainerId && message) {
            socket.emit('sendUser', {
                sender: user?._id,
                receiver: selectedUser?.traineeTrainerId,
                message: messageInput
            });
        }
        setMessageInput('')
    };

    return (
        <div className="flex flex-col h-full relative">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                    <Avatar size={40} src={selectedUser?.profileImageUrl} />
                    <h3>{selectedUser?.firstName} {selectedUser?.lastName}</h3>
                </div>
                <button
                    onClick={goBackToUserList}
                    className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                >
                    Back
                </button>
            </div>

            {/* Chat messages */}
            <div
                ref={chatContainerRef}  // Set ref here
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
                <div ref={messageEndRef}></div> {/* Dummy div for smooth scrolling */}
            </div>

            {/* Chat input */}
            <div className="flex items-center gap-2 absolute bottom-3 right-3 left-3">
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
                        />
                        <button onClick={sendMessage} className=" bg-primary px-4 text-white py-2 rounded-md" >
                            Send
                        </button>
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
}
