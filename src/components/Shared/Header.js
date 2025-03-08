"use client";
import Image from "next/image";
import logo from "../../assets/Morfitter.png";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/features/auth/authSlice";
import Cookies from "js-cookie";
import { Avatar } from "antd";
import profileImage from '../../assets/profile/profile_image.webp'

const Header = () => {
  const { user, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (path) => pathname === path;
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    dispatch(logout());
    Cookies.remove("morfitter-token");
    Cookies.remove("refreshToken");
    router.push(`/auth/login`);
    window.location.reload();
  };

  return (
    <nav className=" sticky top-0 bg-white z-50 shadow-lg">
      <div className="xxl:w-[1340px] mx-auto px-6 py-5 flex justify-between items-center">
        <Link href={`/`}>
          <Image src={logo} alt="logo" height={0} width={0} className=" w-32" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex space-x-5 items-center">
          <ul className="flex items-center space-x-5">
            <Link href="/">
              <span
                className={`${isActive("/") ? " rounded-full  bg-primary  text-white" : ""
                  }  text-lg rounded-full font-light py-2 px-4 hover:bg-primary hover:text-white`}
              >
                Home
              </span>
            </Link>
            <Link href="/content">
              <span
                className={`${isActive("/content")
                  ? " rounded-full  bg-primary  text-white"
                  : ""
                  }  text-lg rounded-full font-light py-2 px-4 hover:bg-primary  hover:text-white`}
              >
                Content
              </span>
            </Link>
            {/* <Link href="/about">
                            <span
                                className={`${isActive("/about")
                                    ? " rounded-full  bg-primary  text-white"
                                    : ""
                                    }  text-lg rounded-full font-light py-2 px-4 hover:bg-primary  hover:text-white`}
                            >
                                About Us
                            </span>
                        </Link>  */}
            <Link href="/find-trainers">
              <span
                className={`${isActive("/find-trainers")
                  ? " rounded-full  bg-primary  text-white"
                  : ""
                  }  text-lg rounded-full font-light py-2 px-4 hover:bg-primary  hover:text-white`}
              >
                Get MORfitter
              </span>
            </Link>
            <Link href="/morfitter-pts">
              <span
                className={`${isActive("/morfitter-pts")
                  ? " rounded-full  bg-primary  text-white"
                  : ""
                  }  text-lg rounded-full font-light py-2 px-4 hover:bg-primary  hover:text-white`}
              >
                MORfitter Trainer
              </span>
            </Link>
            <Link href="/morfitter-sessions">
              <span
                className={`${isActive("/morfitter-sessions")
                  ? " rounded-full  bg-primary  text-white"
                  : ""
                  }  text-lg rounded-full font-light py-2 px-4 hover:bg-primary  hover:text-white`}
              >
                MORfitter Sessions
              </span>
            </Link>
            {role?.role === "trainer" && (
              <Link href="/trainer-profile">
                <span
                  className={`${isActive("/trainer-profile")
                    ? " rounded-full  bg-primary text-white"
                    : ""
                    }  text-lg rounded-full font-light py-2 px-4 hover:bg-primary  hover:text-white`}
                >
                  PT Profile
                </span>
              </Link>
            )}

            {role?.role === "trainee" && (
              <Link href="/profile">
                <span
                  className={`${isActive("/profile")
                    ? " rounded-full  bg-primary text-white"
                    : ""
                    }  text-lg rounded-full font-light py-2 px-4 hover:bg-primary  hover:text-white`}
                >
                  Profile
                </span>
              </Link>
            )}

            {role?.role === "admin" ||
              (role?.role === "super_admin" && (
                <Link href="/admin">
                  <span
                    className={`  text-lg rounded-full font-light py-2 px-4 hover:bg-primary  hover:text-white`}
                  >
                    Dashboard
                  </span>
                </Link>
              ))}



            {/* <Link href="/blog">
                            <span
                                className={`${isActive("/blog")
                                    ? " rounded-full  bg-primary  text-white"
                                    : ""
                                    }  text-lg rounded-full font-light py-2 px-4 hover:bg-primary  hover:text-white`}
                            >
                                Blogs
                            </span>
                </Link> */}
          </ul>
        </div>
        {/* <Link href="/contact-us">
          <button className=" hidden xl:block py-3 px-8 text-lg font-medium bg-secondary text-white rounded-full hover:bg-teal-500 transition-all">
            Contact Us
          </button>
        </Link> */}
        <div className=" hidden xl:flex items-center">
          {
            role?.role &&
            <div className=" mr-3 flex items-center gap-2">
              <Avatar
                src={
                  user?.profileImageUrl
                    ? `${user?.profileImageUrl}`
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
                size={50} className=" " alt="circle" />
              <div>
                <p>{user?.userName}</p>
              </div>
            </div>
          }
          {role?.role === "trainee" && (
            <span
              onClick={handleLogOut}
              className={`  text-lg rounded-full font-light py-2 px-4 hover:bg-red-600 cursor-pointer hover:text-white`}
            >
              Log Out
            </span>
          )}

          {role?.role === "trainer" && (
            <span
              onClick={handleLogOut}
              className={`  text-lg rounded-full font-light py-2 px-4 hover:bg-red-600 cursor-pointer hover:text-white`}
            >
              Log Out
            </span>
          )}

          {!role && (
            <Link href="/auth/login">
              <span
                className={`${isActive("/auth/login")
                  ? " rounded-full  bg-primary text-white"
                  : ""
                  }  text-lg rounded-full font-light py-2 px-4 hover:bg-primary  hover:text-white`}
              >
                log In
              </span>
            </Link>
          )}

          {!role && (
            <Link className=" ml-3" href="/auth/user-register">
              <span
                className={`${isActive("/auth/user-register")
                  ? " rounded-full  bg-primary text-white"
                  : ""
                  }  text-lg rounded-full font-light py-2 px-4 hover:bg-primary  hover:text-white`}
              >
                Register
              </span>
            </Link>
          )}
        </div>
        <GiHamburgerMenu onClick={showDrawer} className=" w-7 h-7 xl:hidden" />
        <MobileNavbar onClose={onClose} open={open}></MobileNavbar>
      </div>
    </nav>
  );
};

export default Header;
