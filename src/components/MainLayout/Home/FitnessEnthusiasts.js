import React from 'react';
import gymPerson from '../../../assets/gym-person.png';
import line from '../../../assets/line.png';
import fitness2 from '../../../assets/fitness2.png';
import Image from 'next/image';
import Link from 'next/link';

const FitnessEnthusiasts = () => {
    return (
        <section className="bg-white py-16 px-5 md:px-0">
            <div className="container mx-auto flex flex-col xl:flex-row justify-between items-center min-h-[520px] gap-12">
                {/* Left Section */}



                <div className="xl:w-1/2">
                    <div className="text-gradient text-2xl md:text-[54px] font-bold leading-[50px] md:leading-[74px] mb-8">
                        <p className='bg-gradient-to-r from-transparent via-secondary to-transparent text-white'>
                            <span className="text-black ">For</span> Fitness Enthusiasts
                        </p>
                    </div>
                    <div className="text-[18px] font-normal leading-[28.56px] tracking-tight mb-8">
                        Find your perfect personal trainer, follow for free, and unlock the potential of premium membership. Access exclusive workouts, live sessions, and a community of like-minded fitness seekers. Set your fitness goals, track progress, and enjoy content tailored to your lifestyle. Whether you&apos;re after muscle mass, weight loss, or overall fitness, Morfitter connects you with the right trainer to help you achieve success. Join the movement and take control of your fitness!
                    </div>
                    <div className="btn-sec">
                        <Link href={`/auth/user-register`}>
                            <button className="bookBtn text-lg font-medium leading-8 text-white bg-secondary hover:bg-greenColor py-2 md:py-3 px-5 md:px-8 rounded-full capitalize transition-all hover:">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Right Section */}

                <div className="xl:w-1/2 flex justify-end">
                    <div className="img-card relative w-[320px] md:w-[450px] lg:w-[480px] h-[280px] md:h-[440px] rounded-[20px] border-[10px] border-[#0ba59380] overflow-visible">
                        {/* Image positioned on the border, with a larger width */}
                        <div className=' absolute top-0 right-0 bottom-0 w-full md:w-[550px]'>
                            <Image
                                src={fitness2} // Replace with your actual image path
                                alt="Fitness Person"
                                className=" h-full w-full rounded-xl" // Fixed width
                                width={0}
                                height={0}
                            />
                        </div>


                        {/* Sub-card */}
                        <div className="sub-card absolute right-2 md:left-[-150px] bottom-3 md:bottom-[20%] w-[180px] px-3 py-1 bg-white rounded-[15px] shadow-2xl text-left">
                            <div className="ex text-[17.47px]  font-thin leading-[27.95px] capitalize tracking-[0.03em]">
                                Total Ranking
                            </div>
                            <div className="years font-gilory text-[18px] font-semibold leading-[22.61px]">+80.5%</div>

                            <div className="">
                                {/* Icons */}
                                <div className="">
                                    <Image
                                        width={0}
                                        height={0}
                                        src={line}
                                        alt="Experience 1"
                                        className="w-[90%] h-full rounded-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FitnessEnthusiasts;
