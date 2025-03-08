/* eslint-disable react/prop-types */
// import { useGetChatActorQuery } from "@/redux/features/chat/chatActor";
import { Avatar, Drawer, Input, Button, ConfigProvider } from "antd";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetUserIChatsWithQuery } from "@/redux/features/chats/chatsApi";
import ChatContainer from "./ChatContainer";
// import { useGetProfileInfoQuery } from "@/redux/features/profile/profileApi";


const MyChatsDrawer = ({ onClose, open }) => {
    const { user, role } = useSelector((state) => state.auth);
    const [selectedUser, setSelectedUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const messageEndRef = useRef(null);
    // const { data: userData } = useGetProfileInfoQuery();
    const { data } = useGetUserIChatsWithQuery(user?._id, {
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true
    });

    // const { data } = useGetChatActorQuery(profileId)
    // console.log('Raw data', data)

    // Scroll to bottom when new messages are added
    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleUserClick = (user) => {
        setSelectedUser(user);
        setMessages([]);  // Reset messages for new user
    };

    return (
        <Drawer title="Live Chats" onClose={onClose} open={open} width={400}>
  
            {!selectedUser ? (
                <div className="w-full">
                    {data?.data?.map((user) => (
                        <div
                            key={user?._id}
                            onClick={() => handleUserClick(user)}
                            className="cursor-pointer bg-slate-100 mb-3 p-3 rounded-md hover:bg-slate-200 w-full flex justify-between items-center"
                        >
                            <div className="flex gap-2 w-full">
                                <Avatar size={40} src={user?.profileImageUrl} />
                                <div className="flex-1">
                                    <p className="font-bold capitalize">{user?.firstName} {user?.lastName}</p>
                                    <p className="-mb-0">{user?.lastMessage}</p>
                                </div>
                            </div>

                            <div className="w-[70px] flex flex-col items-end justify-between">
                                {user?.unreadCount > 0 && (
                                    <span className="bg-primary text-white w-5 h-5 font-bold flex justify-center items-center rounded-full mb-1">
                                        {user?.unreadCount}
                                    </span>
                                )}
                                <span className="text-gray-500 text-xs">
                                    {new Date(user?.lastMessageDate).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser} messageEndRef={messageEndRef} />
            )} 
        </Drawer>

    );
};

export default MyChatsDrawer;
