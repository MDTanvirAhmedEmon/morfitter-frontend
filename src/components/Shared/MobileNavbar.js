import { ConfigProvider, Drawer } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RxCross2 } from "react-icons/rx";

const MobileNavbar = ({ onClose, open }) => {
    const pathname = usePathname();
    const isActive = (path) => pathname === path;
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
                    
                    <Link onClick={onClose} href="/about">
                        <span
                            className={`${isActive("/about")
                                ? " rounded-full  bg-primary  text-white"
                                : ""
                                }  text-lg rounded-full py-2 px-4 hover:bg-primary  hover:text-white text-white font-semibold`}
                        >
                            About Us
                        </span>
                    </Link>
                    <Link onClick={onClose} href="/personal-trainers">
                        <span
                            className={`${isActive("/personal-trainers")
                                ? " rounded-full  bg-primary text-white"
                                : ""
                                }  text-lg rounded-full py-2 px-4 hover:bg-primary  hover:text-white text-white font-semibold`}
                        >
                            For Personal Trainers
                        </span>
                    </Link>
                    <Link onClick={onClose} href="/fitness-enthusiasts">
                        <span
                            className={`${isActive("/fitness-enthusiasts")
                                ? " rounded-full  bg-primary text-white"
                                : ""
                                }  text-lg rounded-full py-2 px-4 hover:bg-primary  hover:text-white text-white font-semibold`}
                        >
                            For Fitness Enthusiasts
                        </span>
                    </Link>
                    <Link onClick={onClose} href="/blog">
                        <span
                            className={`${isActive("/blog")
                                ? " rounded-full  bg-primary  text-white"
                                : ""
                                }  text-lg rounded-full py-2 px-4 hover:bg-primary  hover:text-white text-white font-semibold`}
                        >
                            Blogs
                        </span>
                    </Link>
                    <div>
                        <button className="py-2 px-6 text-lg font-thin bg-secondary text-white rounded-full hover:bg-teal-500 transition-all">
                            Contact Us
                        </button>
                    </div>
                </div>
            </Drawer>
        </ConfigProvider>

    );
};

export default MobileNavbar;