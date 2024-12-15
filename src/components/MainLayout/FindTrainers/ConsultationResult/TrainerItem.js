"use client"
import Image from 'next/image';
import logo1 from '../../../../assets/logo1.svg';
import logo2 from '../../../../assets/logo2.svg';
import logo3 from '../../../../assets/logo3.svg';
import logo4 from '../../../../assets/logo4.svg';
import { useState } from 'react';
import profile from '../../../../assets/p2.png'
import { FaUser } from 'react-icons/fa';
import { FaUsers } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";

const TrainerItem = () => {
    const [selectedLogos, setSelectedLogos] = useState([]);

    const logos = [logo1, logo2, logo3, logo4];

    const handleLogoClick = (index) => {
        setSelectedLogos((prevSelected) => {
            if (prevSelected.includes(index)) {
                return prevSelected.filter((item) => item !== index);
            } else {
                return [...prevSelected, index];
            }
        });
    };
    return (
        <div className=" border border-secondary p-2 md:p-4 rounded-lg md:flex items-center justify-between">
            <div className=' md:flex items-center gap-4'>
                <div className=' flex items-center gap-3 shadow-[2px_8px_8px_2px_rgba(0,0,0,0.1)] py-4 px-4 lg:px-10 rounded-xl mb-5 md:mb-0'>
                    <Image src={profile} alt='profile' width={0} height={0} className=' w-16 border-4 border-secondary rounded-lg' />
                    <div>
                        <h2 className=' text-lg mb-1'>MIra bator</h2>
                        <p className=' text-gray-500'>Trainer</p>
                    </div>
                </div>
                <div className=" flex gap-1 overflow-x-auto  mb-5 md:mb-0">
                    <div className="flex gap-1 flex-nowrap xl:flex-wrap">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                onClick={() => handleLogoClick(index)}
                                className={`flex items-center justify-center w-[90px] lg:w-[100px] h-[90px] lg:h-[100px] px-7 text-center cursor-pointer ${selectedLogos.includes(index)
                                    ? 'border-4 border-greenColor shadow shadow-greenColor'
                                    : 'border-2 border-solid border-transparent'
                                    } rounded transition-all duration-300`}
                                style={{
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                    borderImage: selectedLogos.includes(index)
                                        ? 'none'
                                        : 'linear-gradient(180deg, rgba(11, 165, 147, 0.05) 0%, #08776a 51%, rgba(11, 165, 147, 0.05) 100%) 1',
                                }}
                            >
                                <Image src={logo} alt={`Logo ${index + 1}`} height={170} width={170} className="w-full h-full object-contain" />
                            </div>
                        ))}
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
                    <button className={` mb-3 text-white rounded-full px-4 py-[5px] bg-secondary hover:bg-greenColor`}>Contact</button>
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
        </div>
    );
};

export default TrainerItem;