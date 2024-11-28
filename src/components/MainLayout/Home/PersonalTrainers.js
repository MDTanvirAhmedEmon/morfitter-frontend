import React from 'react';
import gymPerson from '../../../assets/gym-person.png';
import p1 from '../../../assets/p1.png';
import p2 from '../../../assets/p2.png';
import p3 from '../../../assets/p3.png';
import p4 from '../../../assets/p4.png';
import p5 from '../../../assets/p5.png';
import Image from 'next/image';

const PersonalTrainers = () => {
    return (
        <section className="bg-white py-16 px-5 md:px-0">
            <div className="container mx-auto flex flex-col xl:flex-row justify-between items-center min-h-[520px] gap-12">
                {/* Left Section */}
                <div className="xl:w-1/2">
                    <div className="img-card relative w-[320px] md:w-[450px] lg:w-[520px] h-[280px] md:h-[440px] rounded-[20px] border-[10px] border-[#0ba59380] overflow-visible">
                        {/* Image positioned on the border, with a larger width */}
                        <div className=' absolute top-0 left-0 bottom-0 w-full md:w-[550px]'>
                            <Image
                                src={gymPerson} // Replace with your actual image path
                                alt="Fitness Person"
                                className=" h-full w-full" // Fixed width
                                width={0}
                                height={0}
                            />
                        </div>

                        {/* Sub-card */}
                        <div className="sub-card absolute right-2 md:right-[-150px] bottom-3 md:bottom-[20%] w-[180px] px-3 py-2 bg-white rounded-[15px] shadow-2xl text-left">
                            <div className="years font-gilory text-[22.12px] font-bold leading-[32.61px]">20+</div>
                            <div className="ex text-[17.47px]  font-thin leading-[27.95px] capitalize tracking-[0.03em]">
                                Years experience
                            </div>
                            <div className="img-sec flex space-x-[0px] mt-2">
                                {/* Icons */}
                                <div className="w-[25px] h-[25px]">
                                    <Image
                                        width={0}
                                        height={0}
                                        src={p1}
                                        alt="Experience 1"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <div className="w-[25px] h-[25px]">
                                    <Image
                                        width={0}
                                        height={0}
                                        src={p2}
                                        alt="Experience 1"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <div className="w-[25px] h-[25px]">
                                    <Image
                                        width={0}
                                        height={0}
                                        src={p3}
                                        alt="Experience 1"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <div className="w-[25px] h-[25px]">
                                    <Image
                                        width={0}
                                        height={0}
                                        src={p4}
                                        alt="Experience 1"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <div className="w-[25px] h-[25px]">
                                    <Image
                                        width={0}
                                        height={0}
                                        src={p5}
                                        alt="Experience 1"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Section */}
                <div className="xl:w-1/2">
                    <div className="text-gradient text-2xl md:text-[54px] font-bold leading-[50px] md:leading-[74px] mb-8">
                        <p className='bg-gradient-to-r from-transparent via-primary to-transparent text-white'>
                            <span className="text-black ">For</span> Personal Trainers
                        </p>
                    </div>
                    <div className="text-[18px] font-normal leading-[28.56px] tracking-tight mb-8">
                        Ready to take your personal training business to the next level? Create your profile on Morfitter and showcase
                        your expertise! Share videos, tips, and personalized content with a growing community. Offer premium packages,
                        build a following, and connect with clients who are looking for your unique skills. Whether you specialize in
                        cardio, strength training, or fat loss, Morfitter lets you build tailored programs that reach clients right in
                        their homes.
                    </div>
                    <div className="btn-sec">
                        <button className="bookBtn text-lg font-medium leading-8 text-white bg-secondary hover:bg-greenColor py-2 md:py-3 px-5 md:px-8 rounded-full capitalize transition-all hover:">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalTrainers;
