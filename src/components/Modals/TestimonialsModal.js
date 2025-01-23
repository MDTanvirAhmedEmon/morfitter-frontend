import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { IoCloseSharp } from "react-icons/io5";

function TestimonialsModal({ setTestimonialsVisible }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white rounded shadow-lg w-[500px]">
        <div className="px-10 py-16">
          <div className="flex justify-end w-full">
            <input
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
          <div className="mt-5 flex justify-between items-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <Avatar size={35} src="https://avatar.iran.liara.run/public/12" />
              <p className="text-lg">Shah Aman</p>
            </div>
            <div>
              <button className="px-2 py-1 bg-[#0ba593] text-white rounded hover:bg-[#088577] transition">
                Send Invite
              </button>
            </div>
          </div>
          <div className="mt-5 flex justify-between items-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <Avatar size={35} src="https://avatar.iran.liara.run/public/12" />
              <p className="text-lg">Shah Aman</p>
            </div>
            <div>
              <button className="px-2 py-1 bg-[#0ba593] text-white rounded hover:bg-[#088577] transition">
                Send Invite
              </button>
            </div>
          </div>
          <div className="mt-5 flex justify-between items-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <Avatar size={35} src="https://avatar.iran.liara.run/public/34" />
              <p className="text-lg">Shah Aman</p>
            </div>
            <div>
              <button className="px-2 py-1 bg-[#0ba593] text-white rounded hover:bg-[#088577] transition">
                Send Invite
              </button>
            </div>
          </div>
          <div className="mt-5 flex justify-between items-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <Avatar size={35} src="https://avatar.iran.liara.run/public/14" />
              <p className="text-lg">Shah Aman</p>
            </div>
            <div>
              <button className="px-2 py-1 bg-[#0ba593] text-white rounded hover:bg-[#088577] transition">
                Send Invite
              </button>
            </div>
          </div>
          <div className="mt-5 flex justify-between items-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <Avatar size={35} src="https://avatar.iran.liara.run/public/36" />
              <p className="text-lg">Shah Aman</p>
            </div>
            <div>
              <button className="px-2 py-1 bg-[#0ba593] text-white rounded hover:bg-[#088577] transition">
                Send Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsModal;
