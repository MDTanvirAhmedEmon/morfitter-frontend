import { logout } from '@/redux/features/auth/authSlice';
import { Avatar, ConfigProvider, Drawer } from 'antd';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import profileImage from '../../assets/profile/profile_image.webp'

const MobileNavbar = ({ onClose, open }) => {
    const pathname = usePathname();
    const isActive = (path) => pathname === path;
    const { user, role } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogOut = () => {
        dispatch(logout());
        Cookies.remove("morfitter-token");
        Cookies.remove("refreshToken");
        router.push(`/auth/login`);
        window.location.reload();
    };


    return (
        <ConfigProvider
            theme={{
                components: {
                    "Drawer": {
                        "colorBgElevated": "#0ba593"
                    }
                },
            }}
        >
            <Drawer closable={false} className='' open={open}>
                <div>
                    <RxCross2 onClick={onClose} className=' w-8 h-8 text-white' />
                </div>

                <div className=' w-full h-full flex flex-col pl-6 justify-center gap-8'>
                    <Link onClick={onClose} href="/">
                        <span
                            className={`${isActive("/")
                                ? " rounded-full  bg-primary  text-white"
                                : ""
                                }  text-lg rounded-full py-2 px-4 hover:bg-primary hover:text-white text-white font-semibold`}
                        >
                            Home
                        </span>
                    </Link>

                    <Link onClick={onClose} href="/content">
                        <span
                            className={`${isActive("/content")
                                ? " rounded-full  bg-primary  text-white"
                                : ""
                                }  text-lg rounded-full py-2 px-4 hover:bg-primary  hover:text-white text-white font-semibold`}
                        >
                            Content
                        </span>
                    </Link>

                    <Link onClick={onClose} href="/find-trainers">
                        <span
                            className={`${isActive("/find-trainers")
                                ? " rounded-full  bg-primary  text-white"
                                : ""
                                }  text-lg rounded-full py-2 px-4 hover:bg-primary  hover:text-white text-white font-semibold`}
                        >
                            Get MORfitter
                        </span>
                    </Link>
                    <Link onClick={onClose} href="/morfitter-pts">
                        <span
                            className={`${isActive("/morfitter-pts")
                                ? " rounded-full  bg-primary text-white"
                                : ""
                                }  text-lg rounded-full py-2 px-4 hover:bg-primary  hover:text-white text-white font-semibold`}
                        >
                            MORfitter PTs
                        </span>
                    </Link>
                    <Link onClick={onClose} href="/morfitter-sessions">
                        <span
                            className={`${isActive("/morfitter-sessions")
                                ? " rounded-full  bg-primary text-white"
                                : ""
                                }  text-lg rounded-full py-2 px-4 hover:bg-primary  hover:text-white text-white font-semibold`}
                        >
                            MORfitter Sessions
                        </span>
                    </Link>
                    {role?.role === "trainer" && (
                        <Link onClick={onClose} href="/trainer-profile">
                            <span
                                className={`${isActive("/trainer-profile")
                                    ? " rounded-full  bg-primary text-white"
                                    : ""
                                    }  text-lg rounded-full py-2 px-4 hover:bg-primary  hover:text-white text-white font-semibold`}
                            >
                                PT Profile
                            </span>
                        </Link>
                    )}
                    {role?.role === "trainee" && (
                        <Link onClick={onClose} href="/profile">
                            <span
                                className={`${isActive("/profile")
                                    ? " rounded-full  bg-primary text-white"
                                    : ""
                                    }  text-lg rounded-full py-2 px-4 hover:bg-primary  hover:text-white text-white font-semibold`}
                            >
                                Profile
                            </span>
                        </Link>
                    )}

                    {role?.role === "admin" ||
                        (role?.role === "super_admin" && (
                            <Link onClick={onClose} href="/admin">
                                <span
                                    className={`${isActive("/admin")
                                        ? " rounded-full  bg-primary text-white"
                                        : ""
                                        }  text-lg rounded-full py-2 px-4 hover:bg-primary  hover:text-white text-white font-semibold`}
                                >
                                    Dashboard
                                </span>
                            </Link>
                        ))}
                    {
                        role?.role &&
                        <div className=" ml-3 flex items-center gap-2">
                            <Avatar
                                src={
                                    user?.profileImageUrl
                                        ? `${user?.profileImageUrl}`
                                        : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                                }
                                size={50} className=" " alt="circle" />
                            <div>
                                <p className=' text-white text-lg font-semibold'>{user?.userName}</p>
                            </div>
                        </div>
                    }

                    {role?.role && (
                        <Link onClick={onClose} href="/auth/login">
                            <span
                                onClick={handleLogOut}
                                className={` text-lg rounded-full py-2 px-4 hover:bg-primary  hover:text-white text-white font-semibold`}
                            >
                                Log Out
                            </span>
                        </Link>
                    )}
                    {!role && (
                        <Link onClick={onClose} href="/auth/login">
                            <span
                                className={`${isActive("/auth/login")
                                    ? " rounded-full  bg-primary text-white"
                                    : ""
                                    }  text-lg rounded-full py-2 px-4 hover:bg-primary  hover:text-white text-white font-semibold`}
                            >
                                log In
                            </span>
                        </Link>
                    )}
                    {!role && (
                        <Link onClick={onClose} href="/auth/user-register">
                            <span
                                className={`${isActive("/auth/user-register")
                                    ? " rounded-full  bg-primary text-white"
                                    : ""
                                    }  text-lg rounded-full py-2 px-4 hover:bg-primary  hover:text-white text-white font-semibold`}
                            >
                                Register
                            </span>
                        </Link>
                    )}
                    {/* <Link onClick={onClose} href="/blog">
                        <span
                            className={`${isActive("/blog")
                                ? " rounded-full  bg-primary  text-white"
                                : ""
                                }  text-lg rounded-full py-2 px-4 hover:bg-primary  hover:text-white text-white font-semibold`}
                        >
                            Blogs
                        </span>
                    </Link> */}
                    {/* <div>
                        <Link onClick={onClose} href="/contact-us">
                            <button className="py-2 px-6 text-lg font-thin bg-secondary text-white rounded-full hover:bg-teal-500 transition-all">
                                Contact Us
                            </button>
                        </Link>
                    </div> */}
                </div>
            </Drawer>
        </ConfigProvider >

    );
};

export default MobileNavbar;