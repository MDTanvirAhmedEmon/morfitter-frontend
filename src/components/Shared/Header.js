'use client'
import Image from "next/image";
import logo from '../../assets/Morfitter.png'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";



const Header = () => {
    const pathname = usePathname();
    const isActive = (path) => pathname === path;
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-white shadow-lg">
            <div className="container mx-auto px-6 py-5 flex justify-between items-center">
                <Image src={logo} alt="logo" height={0} width={0} className=" w-32" />

                {/* Desktop Menu */}
                <div className="hidden xl:flex space-x-5 items-center">
                    <ul className="flex space-x-5">
                        <Link href="/">
                            <span
                                className={`${isActive("/")
                                    ? " rounded-full  bg-primary  text-white"
                                    : ""
                                    }  text-lg rounded-full font-light py-2 px-4 hover:bg-primary hover:text-white`}
                            >
                                Home
                            </span>
                        </Link>
                        <Link href="/about">
                            <span
                                className={`${isActive("/about")
                                    ? " rounded-full  bg-primary  text-white"
                                    : ""
                                    }  text-lg rounded-full font-light py-2 px-4 hover:bg-primary  hover:text-white`}
                            >
                                About Us
                            </span>
                        </Link>
                        <Link href="/personal-trainers">
                            <span
                                className={`${isActive("/personal-trainers")
                                    ? " rounded-full  bg-primary text-white"
                                    : ""
                                    }  text-lg rounded-full font-light py-2 px-4 hover:bg-primary  hover:text-white`}
                            >
                                For Personal Trainers
                            </span>
                        </Link>
                        <Link href="/fitness-enthusiasts">
                            <span
                                className={`${isActive("/fitness-enthusiasts")
                                    ? " rounded-full  bg-primary text-white"
                                    : ""
                                    }  text-lg rounded-full font-light py-2 px-4 hover:bg-primary  hover:text-white`}
                            >
                                For Fitness Enthusiasts
                            </span>
                        </Link>
                        <Link href="/blog">
                            <span
                                className={`${isActive("/blog")
                                    ? " rounded-full  bg-primary  text-white"
                                    : ""
                                    }  text-lg rounded-full font-light py-2 px-4 hover:bg-primary  hover:text-white`}
                            >
                                Blogs
                            </span>
                        </Link>
                    </ul>

                </div>

                <button className=" hidden xl:block py-3 px-8 text-lg font-medium bg-secondary text-white rounded-full hover:bg-teal-500 transition-all">
                    Contact Us
                </button>
                <GiHamburgerMenu onClick={showDrawer} className=" w-7 h-7 xl:hidden" />
                <MobileNavbar onClose={onClose} open={open}></MobileNavbar>
            </div>
        </nav>
    );
};

export default Header;
