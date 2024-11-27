'use client'
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
    const pathname = usePathname();
    const isActive = (path) => pathname === path;
    return (
        <footer className="footer-section bg-[#2d2d2d] text-white">
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 py-12 ">
                    {/* First Column */}
                    <div>
                        <div className="logo">
                            <Link
                                href="#"
                                className="text-[57.25px] font-extrabold leading-[55.46px] tracking-[-0.02em]"
                            >
                                Morfitter
                            </Link>
                        </div>
                        <p className="mt-4 text-[15px] leading-[25.3px] max-w-[330px]">
                            Welcome to Morfitter.com – your fitness journey starts here!
                            Achieve your goals with expert trainers and personalized plans,
                            anytime, anywhere.
                        </p>
                        <div className="flex gap-4 mt-5">
                            <Link
                                href="#"
                                className="item h-10 w-10 rounded-full bg-white text-greenColor flex items-center justify-center text-xl hover:bg-greenColor hover:text-white transition duration-300"
                            >
                                <FaFacebookF />
                            </Link>
                            <Link
                                href="#"
                                className="item h-10 w-10 rounded-full bg-white text-greenColor flex items-center justify-center text-xl hover:bg-greenColor hover:text-white transition duration-300"
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                href="#"
                                className="item h-10 w-10 rounded-full bg-white text-greenColor flex items-center justify-center text-xl hover:bg-greenColor hover:text-white transition duration-300"
                            >
                                <FaXTwitter />
                            </Link>
                            <Link
                                href="#"
                                className="item h-10 w-10 rounded-full bg-white text-greenColor flex items-center justify-center text-xl hover:bg-greenColor hover:text-white transition duration-300"
                            >
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4 flex flex-col">
                            <Link href="/">
                                <span
                                    className={`${isActive("/")
                                        ? " rounded-full  text-primary "
                                        : ""
                                        }  text-lg rounded-full py-2 hover:text-primary  text-white`}
                                >
                                    Home
                                </span>
                            </Link>
                            <Link href="/about">
                                <span
                                    className={`${isActive("/about")
                                        ? " rounded-full  text-primary  "
                                        : ""
                                        }  text-lg rounded-full py-2 hover:text-primary  text-white `}
                                >
                                    About Us
                                </span>
                            </Link>
                            <Link href="/personal-trainers">
                                <span
                                    className={`${isActive("/personal-trainers")
                                        ? " rounded-full  text-primary "
                                        : ""
                                        }  text-lg rounded-full py-2 hover:text-primary   text-white `}
                                >
                                    For Personal Trainers
                                </span>
                            </Link>
                            <Link href="/fitness-enthusiasts">
                                <span
                                    className={`${isActive("/fitness-enthusiasts")
                                        ? " rounded-full  text-primary "
                                        : ""
                                        }  text-lg rounded-full py-2 hover:text-primary   text-white `}
                                >
                                    For Fitness Enthusiasts
                                </span>
                            </Link>
                            <Link href="/blog">
                                <span
                                    className={`${isActive("/blog")
                                        ? " rounded-full  text-primary  "
                                        : ""
                                        }  text-lg rounded-full py-2 hover:text-primary  text-white `}
                                >
                                    Blogs
                                </span>
                            </Link>
                        </ul>
                    </div>

                    {/* Third Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Help</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="#"
                                    className="text-white text-[18px] hover:text-primary transition duration-300"
                                >
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-white text-[18px] hover:text-primary transition duration-300"
                                >
                                    Trust and Safety
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-white text-[18px] hover:text-primary transition duration-300"
                                >
                                    Privacy Settings
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Fourth Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Subscribe to our Newsletter</h3>
                        <p className="text-[15px] leading-[25.3px] mb-4">
                            Uses the most advanced AI Powered Grading Gym Track.
                        </p>
                        <div className="flex items-center bg-white rounded-full h-[55px] overflow-hidden px-3 gap-3">
                            <input
                                type="text"
                                placeholder="Email Address..."
                                className="flex-1 text-sm text-gray-700 outline-none border-none placeholder:text-gray-500"
                            />
                            <button className="px-6 py-2 rounded-full text-white bg-secondary hover:bg-greenColor transition duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mt-8 border-t border-gray-700 py-3 md:py-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <p className= "text-sm md:text-lg">© 2024 All rights reserved!</p>
                    <div className="space-x-6 mt-2 md:mt-0">
                        <Link href="#" className="text-white hover:text-gray-300  text-sm md:text-lg">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-300  text-sm md:text-lg">
                            Terms and Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default dynamic(() => Promise.resolve(Footer), {
    ssr: false,
});
