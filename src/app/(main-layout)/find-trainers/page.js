"use client"
import { useState } from 'react';
import logo1 from '../../../assets/logo1.svg';
import logo2 from '../../../assets/logo2.svg';
import logo3 from '../../../assets/logo3.svg';
import logo4 from '../../../assets/logo4.svg';
import logo5 from '../../../assets/logo5.svg';
import logo6 from '../../../assets/logo6.svg';
import logo7 from '../../../assets/logo7.svg';
import logo8 from '../../../assets/logo8.svg';
import logo9 from '../../../assets/logo9.svg';
import Image from 'next/image';
import Link from 'next/link';


const FindTrainers = () => {
    const [selectedLogos, setSelectedLogos] = useState(null);
    const [interest, setInterest] = useState(null);
    const [formats, setFormats] = useState(null);
    const [online, setOnline] = useState(null);
    const [faceToFace, setFaceToFace] = useState(null);
    const [type, setType] = useState(null);


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
    const queryParams = new URLSearchParams();
    if (selectedLogos) queryParams.append("specialism", selectedLogos);
    if (online) queryParams.append("onlineSession", online);
    if (faceToFace) queryParams.append("faceToFace", faceToFace);
    if (type) queryParams.append("consultationType", type);

    const handleLogoClick = (index) => {
        setSelectedLogos((prevSelected) => 
            prevSelected === index ? null : index
        );
    };
    
    return (
        <div className=' py-10 md:py-16'>
            <div className=' xxl:w-[1340px] mx-3 xxl:mx-auto'>
                <div className=' text-xl md:text-3xl bg-greenColor rounded-lg py-4 px-6 font-semibold text-white' >Find a trainer to help you become MorFitter</div>
                <div className='shadow-2xl rounded-lg px-5 py-8 mt-8'>


                    <div className='  flex flex-col lg:flex-row  lg:items-center gap-3 lg:gap-12 mb-6'>
                        <p className=' font-bold'>I&apos;m interested in:</p>
                        <div className=" grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 items-center">
                            <button onClick={() => setInterest('Feel Filter')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${interest === 'Feel Filter' ? 'bg-greenColor' : 'bg-secondary'}`}>Feel Filter</button>
                            <button onClick={() => setInterest('Look Filter')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${interest === 'Look Filter' ? 'bg-greenColor' : 'bg-secondary'}`}>Look Filter</button>
                            <button onClick={() => setInterest('Filter Living')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${interest === 'Filter Living' ? 'bg-greenColor' : 'bg-secondary'}`}>Filter Living</button>
                            <button onClick={() => setInterest('Filter Weight')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${interest === 'Filter Weight' ? 'bg-greenColor' : 'bg-secondary'}`}>Filter Weight</button>
                        </div>
                    </div>
                    <div>
                        <p className=' font-bold'>Select specialism (Optional)</p>
                        <div className="flex gap-1 overflow-x-auto mt-4">
                            <div className="flex gap-3 flex-nowrap xl:flex-wrap">
                                {interests.map((logo, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleLogoClick(logo?.name)}
                                        className={`flex items-center justify-center w-[120px] xxl:w-[133px] h-[120px] xxl:h-[133px] px-7 text-center cursor-pointer ${selectedLogos?.includes(logo?.name)
                                            ? 'border-4 border-greenColor shadow shadow-greenColor'
                                            : 'border-2 border-solid border-transparent'
                                            } rounded transition-all duration-300`}
                                        style={{
                                            borderWidth: '2px',
                                            borderStyle: 'solid',
                                            borderImage: selectedLogos?.includes(logo?.name)
                                                ? 'none'
                                                : 'linear-gradient(180deg, rgba(11, 165, 147, 0.05) 0%, #08776a 51%, rgba(11, 165, 147, 0.05) 100%) 1', // Gradient for unselected logos
                                        }}
                                    >
                                        <Image
                                            src={logo?.icon}
                                            alt={`Logo ${logo?.name}`}
                                            height={170}
                                            width={170}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className='  flex flex-col lg:flex-row  lg:items-center gap-3 lg:gap-12 mt-14 mb-8'>
                        <p className=' xl:w-[16%]  font-bold'>Session formats available:</p>
                        <div className=" grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 items-center">
                            <button onClick={() => setFormats('bespoke')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${formats === 'bespoke' ? 'bg-greenColor' : 'bg-secondary'}`}>Bespoke</button>
                            <button onClick={() => setFormats('group')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${formats === 'group' ? 'bg-greenColor' : 'bg-secondary'}`}>Group</button>
                            <button onClick={() => setFormats('both')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${formats === 'both' ? 'bg-greenColor' : 'bg-secondary'}`}>Both</button>
                        </div>
                    </div>

                    <div className='  flex flex-col lg:flex-row  lg:items-center gap-3 lg:gap-12 mb-8'>
                        <p className=' xl:w-[16%]  font-bold'>I condact online sessions:</p>
                        <div className=" flex gap-3 lg:gap-5 items-center">
                            <button onClick={() => setOnline('yes')} className={` text-white rounded-full px-4 py-[6px] w-[65px] hover:bg-greenColor ${online === 'yes' ? 'bg-greenColor' : 'bg-secondary'}`}>Yes</button>
                            <button onClick={() => setOnline('no')} className={` text-white rounded-full px-4 py-[6px] w-[65px] hover:bg-greenColor ${online === 'no' ? 'bg-greenColor' : 'bg-secondary'}`}>No</button>
                        </div>
                    </div>

                    <div className='  flex flex-col lg:flex-row  lg:items-center gap-3 lg:gap-12 mb-8'>
                        <p className=' xl:w-[16%]  font-bold'>I conduct face to face sessions:</p>
                        <div className=" flex gap-3 lg:gap-5 items-center">
                            <button onClick={() => setFaceToFace('yes')} className={` text-white rounded-full px-4 py-[6px] w-[65px] hover:bg-greenColor ${faceToFace === 'yes' ? 'bg-greenColor' : 'bg-secondary'}`}>Yes</button>
                            <button onClick={() => setFaceToFace('no')} className={` text-white rounded-full px-4 py-[6px] w-[65px] hover:bg-greenColor ${faceToFace === 'no' ? 'bg-greenColor' : 'bg-secondary'}`}>No</button>
                        </div>
                    </div>

                    <div className='  flex flex-col lg:flex-row  lg:items-center gap-3 lg:gap-12 mb-8'>
                        <p className=' xl:w-[16%]  font-bold'>Consultations I offer are:</p>
                        <div className=" flex gap-3 lg:gap-5 items-center">
                            <button onClick={() => setType('free')} className={` text-white rounded-full px-4 py-[6px] w-[65px] hover:bg-greenColor ${type === 'free' ? 'bg-greenColor' : 'bg-secondary'}`}>Free</button>
                            <button onClick={() => setType('paid')} className={` text-white rounded-full px-4 py-[6px] w-[65px] hover:bg-greenColor ${type === 'paid' ? 'bg-greenColor' : 'bg-secondary'}`}>Paid</button>
                        </div>
                    </div>
                    <div className=' flex justify-center mt-5'>
                        <Link href={`/find-trainers/consultation-result?${queryParams.toString()}`}><button className={` text-white rounded-full px-10 py-[8px] bg-secondary hover:bg-greenColor`}>Enter</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FindTrainers;