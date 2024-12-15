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

const CreatingSession = () => {
    const [fileType, setFileType] = useState('audio');
    const [selectedLogos, setSelectedLogos] = useState([]);

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
        <div className=" py-14">
            <div className=" container mx-auto">

                <div className=" flex gap-4 items-center">
                    <button onClick={() => setFileType('audio')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${fileType === 'audio' ? 'bg-greenColor' : 'bg-secondary'}`}>Audio</button>
                    <button onClick={() => setFileType('video')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${fileType === 'video' ? 'bg-greenColor' : 'bg-secondary'}`}>Video</button>
                    <button onClick={() => setFileType('content')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${fileType === 'content' ? 'bg-greenColor' : 'bg-secondary'}`}>Content</button>
                </div>
                <div className="flex gap-1 mt-8 overflow-y-scroll">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            onClick={() => handleLogoClick(index)}
                            className={`flex items-center justify-center w-[170px] h-[170px] px-7 text-center cursor-pointer ${selectedLogos.includes(index) ? 'border-4 border-greenColor shadow shadow-greenColor' : 'border-2 border-solid border-transparent'
                                } rounded`}
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
    );
};

export default CreatingSession;