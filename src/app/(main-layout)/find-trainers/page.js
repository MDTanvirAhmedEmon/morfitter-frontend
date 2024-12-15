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


const FindTrainers = () => {
    const [selectedLogos, setSelectedLogos] = useState([]);
    const [interest, setInterest] = useState(null);
    const [formats, setFormats] = useState(null);
    const [online, setOnline] = useState(null);
    const [faceToFace, setFaceToFace] = useState(null);
    const [type, setType] = useState(null);

    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo2];
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
        <div className=' py-16'>
            <div className=' md:container mx-3 md:mx-auto'>
                <div className=' text-xl md:text-3xl bg-greenColor rounded-lg py-4 px-6 font-semibold text-white' >Find a trainer to help you become MorFitter</div>
                <div className='shadow-2xl rounded-lg px-5 py-8 mt-8'>


                    <div className='  flex flex-col lg:flex-row  lg:items-center gap-3 lg:gap-12 mb-6'>
                        I&apos;m interested in:
                        <div className=" grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 items-center">
                            <button onClick={() => setInterest('Feel Filter')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${interest === 'Feel Filter' ? 'bg-greenColor' : 'bg-secondary'}`}>Feel Filter</button>
                            <button onClick={() => setInterest('Look Filter')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${interest === 'Look Filter' ? 'bg-greenColor' : 'bg-secondary'}`}>Look Filter</button>
                            <button onClick={() => setInterest('Filter Living')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${interest === 'Filter Living' ? 'bg-greenColor' : 'bg-secondary'}`}>Filter Living</button>
                            <button onClick={() => setInterest('Filter Weight')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${interest === 'Filter Weight' ? 'bg-greenColor' : 'bg-secondary'}`}>Filter Weight</button>
                        </div>
                    </div>
                    <div>
                        <p>Select specialism (Optional)</p>
                        <div className="flex gap-1 overflow-x-auto mt-4">
                            <div className="flex gap-1 flex-nowrap xl:flex-wrap">
                                {logos.map((logo, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleLogoClick(index)}
                                        className={`flex items-center justify-center w-[120px] lg:w-[145px] h-[120px] lg:h-[145px] px-7 text-center cursor-pointer ${selectedLogos.includes(index)
                                            ? 'border-4 border-greenColor shadow shadow-greenColor'
                                            : 'border-2 border-solid border-transparent'
                                            } rounded transition-all duration-300`}
                                        style={{
                                            borderWidth: '2px',
                                            borderStyle: 'solid',
                                            borderImage: selectedLogos.includes(index)
                                                ? 'none'
                                                : 'linear-gradient(180deg, rgba(11, 165, 147, 0.05) 0%, #08776a 51%, rgba(11, 165, 147, 0.05) 100%) 1', // Gradient for unselected logos
                                        }}
                                    >
                                        <Image src={logo} alt={`Logo ${index + 1}`} height={170} width={170} className="w-full h-full object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className='  flex flex-col lg:flex-row  lg:items-center gap-3 lg:gap-12 mt-14 mb-8'>
                        <p className=' xl:w-[15%]'>Session formats available:</p>
                        <div className=" grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 items-center">
                            <button onClick={() => setFormats('Bespoke')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${formats === 'Bespoke' ? 'bg-greenColor' : 'bg-secondary'}`}>Bespoke</button>
                            <button onClick={() => setFormats('Group')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${formats === 'Group' ? 'bg-greenColor' : 'bg-secondary'}`}>Group</button>
                            <button onClick={() => setFormats('Both')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${formats === 'Both' ? 'bg-greenColor' : 'bg-secondary'}`}>Both</button>
                        </div>
                    </div>

                    <div className='  flex flex-col lg:flex-row  lg:items-center gap-3 lg:gap-12 mb-8'>
                        <p className=' xl:w-[15%]'>I condact online sessions:</p>
                        <div className=" grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 items-center">
                            <button onClick={() => setOnline('Yes')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${online === 'Yes' ? 'bg-greenColor' : 'bg-secondary'}`}>Yes</button>
                            <button onClick={() => setOnline('No')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${online === 'No' ? 'bg-greenColor' : 'bg-secondary'}`}>No</button>
                        </div>
                    </div>

                    <div className='  flex flex-col lg:flex-row  lg:items-center gap-3 lg:gap-12 mb-8'>
                        <p className=' xl:w-[15%]'>I conduct face to face sessions:</p>
                        <div className=" grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 items-center">
                            <button onClick={() => setFaceToFace('Yes')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${faceToFace === 'Yes' ? 'bg-greenColor' : 'bg-secondary'}`}>Yes</button>
                            <button onClick={() => setFaceToFace('No')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${faceToFace === 'No' ? 'bg-greenColor' : 'bg-secondary'}`}>No</button>
                        </div>
                    </div>

                    <div className='  flex flex-col lg:flex-row  lg:items-center gap-3 lg:gap-12 mb-8'>
                        <p className=' xl:w-[15%]'>Consultations I offer are:</p>
                        <div className=" grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 items-center">
                            <button onClick={() => setType('Free')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${type === 'Free' ? 'bg-greenColor' : 'bg-secondary'}`}>Free</button>
                            <button onClick={() => setType('Paid')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${type === 'Paid' ? 'bg-greenColor' : 'bg-secondary'}`}>Paid</button>
                        </div>
                    </div>
                    <div className=' flex justify-center mt-5'>
                        <button className={` text-white rounded-full px-10 py-[8px] bg-secondary hover:bg-greenColor`}>Enter</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FindTrainers;