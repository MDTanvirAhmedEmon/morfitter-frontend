import { Avatar, message, Spin } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useCreateInvitationMutation, useGetTraineeForSentInvitationQuery } from "@/redux/features/invitation/invitationApi";
import Image from "next/image";
import { useState } from "react";
import InvitationSkeleton from "../Skeleton/InvitationSkeleton";

function TestimonialsModal({ setTestimonialsVisible }) {

  const { user } = useSelector((state) => state.auth)
  const [search, setSearch] = useState('');
  const { data, isLoading } = useGetTraineeForSentInvitationQuery({ id: user?._id, searchTerm: search });
  console.log(data);

  const [createInvitation, { isLoading: sentLoading }] = useCreateInvitationMutation()
  const handleSentInvitation = (id) => {
    const data = {
      trainer_id: user?._id,
      trainee_id: id
    }
    console.log(data);
    createInvitation(data).unwrap()
      .then(() => {
        message.success(`Invitation sent successfully`)
        setTestimonialsVisible(false)
      })
      .catch((error) => {
        message.error(error?.data?.message)
      })

  }


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white rounded shadow-lg w-[500px]">
        <div className="px-10 py-16">
          <div className="flex justify-end w-full">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search..."
              className="border border-[#0ba593] py-1.5 pl-4 pr-[65px] outline-none w-full rounded-md mt-5"
            />
            <button
              onClick={() => setTestimonialsVisible(false)}
              className="absolute top-2 right-2 text-white bg-[#0ba593] focus:outline-none p-2 rounded-full"
            >
              <IoCloseSharp />
            </button>
          </div>
          {
            isLoading &&
            <div>
              <InvitationSkeleton></InvitationSkeleton>
              <InvitationSkeleton></InvitationSkeleton>
              <InvitationSkeleton></InvitationSkeleton>
            </div>
          }
          {
            data?.data?.data?.map((user) => (
              <div key={user?._id} className="mt-5 flex justify-between items-center gap-2">
                <div className="flex items-center justify-center gap-2">
                  <Image src={`http://192.168.0.118:5000${user?.profileImageUrl}`} width={100} className="w-10 rounded-full" height={100} alt="profile-image" />
                  <p className="text-lg">{user?.firstName} {user?.lastName}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleSentInvitation(user?._id)}
                    disabled={sentLoading}
                    className="px-2 py-1 bg-[#0ba593] text-white rounded hover:bg-[#088577] transition"
                  >
                    Send Invite {sentLoading && <Spin />}
                  </button>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  );
}

export default TestimonialsModal;
