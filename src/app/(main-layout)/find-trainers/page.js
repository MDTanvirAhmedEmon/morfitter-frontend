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


const FindTrainers = () => {
    const [selectedLogos, setSelectedLogos] = useState([]);
    const [interest, setInterest] = useState(null);

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
        <div className=' py-10'>
            <div className=' container mx-auto'>
                <div className=' text-3xl bg-greenColor rounded-lg py-4 px-6 font-semibold text-white' >Find a trainer to help you become MorFitter</div>

                    <div className='  flex items-center gap-12 px-5 py-8 shadow-2xl rounded-lg mt-8'>
                        I&apos;m interested in:
                        <div className=" flex gap-2 md:gap-4 items-center">
                            <button onClick={() => setInterest('Feel Filter')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${interest === 'Feel Filter' ? 'bg-greenColor' : 'bg-secondary'}`}>Feel Filter</button>
                            <button onClick={() => setInterest('Look Filter')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${interest === 'Look Filter' ? 'bg-greenColor' : 'bg-secondary'}`}>Look Filter</button>
                            <button onClick={() => setInterest('Filter Living')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${interest === 'Filter Living' ? 'bg-greenColor' : 'bg-secondary'}`}>Filter Living</button>
                            <button onClick={() => setInterest('Filter Weight')} className={` text-white rounded-full px-4 py-[6px] hover:bg-greenColor ${interest === 'Filter Weight' ? 'bg-greenColor' : 'bg-secondary'}`}>Filter Weight</button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default FindTrainers;