"use client"
import Image from 'next/image';
import logo1 from '../../../../assets/logo1.svg';
import logo2 from '../../../../assets/logo2.svg';
import logo3 from '../../../../assets/logo3.svg';
import logo4 from '../../../../assets/logo4.svg';
import logo5 from '../../../../assets/logo5.svg';
import logo6 from '../../../../assets/logo6.svg';
import logo7 from '../../../../assets/logo7.svg';
import logo8 from '../../../../assets/logo8.svg';
import logo9 from '../../../../assets/logo9.svg';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaUsers } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import FindTrainersChats from './FindTrainersChats';
import profileImage from '../../../../assets/profile/profile_image.webp'

const TrainerItem = ({ trainer }) => {
    const [selectedLogos, setSelectedLogos] = useState([]);
    const [open, setOpen] = useState(false);

    const logos = [logo1, logo2, logo3, logo4];

    const interests = [
        { name: "boxercise", icon: logo1 },
        { name: "calisthenics", icon: logo2 },
        { name: "circuit training", icon: logo3 },
        { name: "core strength", icon: logo4 },
        { name: "fat burners", icon: logo5 },
        { name: "flexibility & mobility", icon: logo6 },
        { name: "zumba", icon: logo7 },
        { name: "hitt", icon: logo8 },
        { name: "pilates", icon: logo9 }
    ];

    const handleLogoClick = (index) => {
        setSelectedLogos((prevSelected) => {
            if (prevSelected.includes(index)) {
                return prevSelected.filter((item) => item !== index);
            } else {
                return [...prevSelected, index];
            }
        });
    };

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className=" border-2 border-secondary p-2 md:p-3 rounded-lg md:flex items-center justify-between mb-5">
            <div className=' md:flex items-center gap-4'>
                <div className=' flex items-center gap-3 shadow-[2px_8px_8px_2px_rgba(0,0,0,0.1)] py-4 px-4 lg:px-10 rounded-xl mb-5 md:mb-0'>
                    <Image
                        src={trainer?.profileImageUrl
                            ? `${trainer?.profileImageUrl}`
                            : profileImage}
                        alt='profile' width={300} height={300} className=' w-16 border-4 border-secondary rounded-lg' />
                    <div>
                        <h2 className=' text-lg mb-1'>{trainer?.firstName} {trainer?.lastName}</h2>
                        <p className=' text-gray-500'>PTs</p>
                    </div>
                </div>
                <div className=" flex gap-1 overflow-x-auto  mb-5 md:mb-0">
                    <div className="flex gap-1 flex-nowrap xl:flex-wrap">
                        {trainer?.allSpecialism?.map((spec, index) => {
                            const matchedInterest = interests?.find(interest =>
                                interest?.name?.toLowerCase() === spec?.specialism?.toLowerCase()
                            );

                            return matchedInterest ? (
                                <div
                                    key={index}
                                    className="flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[100px] lg:h-[100px] p-2 text-center rounded border-2 border-solid border-transparent transition-all duration-300"
                                    style={{
                                        borderImage:
                                            'linear-gradient(180deg, rgba(11, 165, 147, 0.05) 0%, #08776a 51%, rgba(11, 165, 147, 0.05) 100%) 1',
                                    }}
                                >
                                    <Image
                                        src={matchedInterest?.icon}
                                        alt={spec?.specialism}
                                        height={170}
                                        width={170}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ) : null;
                        })}
                    </div>
                </div>
            </div>


            <div className=' flex items-center justify-between xl:gap-16'>
                <div className=' flex flex-col gap-2'>
                    <div className=' flex items-center gap-2'>
                        <div className='right-part'>
                            <p className=' text-white'>5</p>
                            <MdOutlineStarPurple500 className=' w-5 h-5 text-white' />
                        </div>
                        <h3>120 reviews</h3>
                    </div>
                    <div className=' text-lg'>
                        <span className=' font-semibold mt-2 ml-3'>0.5 </span>miles away
                    </div>
                </div>

                <div className=' flex flex-col justify-center items-center'>
                    <button onClick={showDrawer} className={` mb-3 text-white rounded-full px-4 py-[5px] bg-secondary hover:bg-greenColor`}>Contact</button>
                    <div className=' flex gap-4 items-center'>
                        <div className=' flex flex-col items-center'>
                            <FaUser className=' text-greenColor w-5 h-5' />
                            <p className=' text-primary font-semibold'>Bespoke</p>
                        </div>
                        <div className=' flex flex-col items-center'>
                            <FaUsers className=' text-greenColor w-5 h-5' />
                            <p className=' text-primary font-semibold'>Group</p>
                        </div>
                    </div>
                </div>
            </div>
            <FindTrainersChats onClose={onClose} open={open}></FindTrainersChats>
        </div>
    );
};

export default TrainerItem;