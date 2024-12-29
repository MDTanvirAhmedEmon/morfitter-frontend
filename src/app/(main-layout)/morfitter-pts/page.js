"use client"
import Image from "next/image";
import profileImage from '../../../assets/p4.png'
import logo1 from '../../../assets/logo1.svg';
import logo2 from '../../../assets/logo2.svg';
import logo3 from '../../../assets/logo3.svg';
import logo4 from '../../../assets/logo4.svg';
import logo5 from '../../../assets/logo5.svg';
import logo6 from '../../../assets/logo6.svg';


const MorfitterPts = () => {

    const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

    return (
        <>
            <div className=" container mx-auto py-8 md:py-16">
                <div className=" rounded-xl shadow-lg mx-3 px-3 md:px-0 md:mx-0 py-6 flex flex-col md:flex-row items-center gap-10">
                    <div className=" w-full md:w-[50%] xl:w-[40%] 2xl:w-[20%]">
                        <Image className=" w-32 rounded-full" src={profileImage} width={0} height={0} alt="profile-trainer-image" />
                        <div className="mt-3">
                            <h2 className=" text-xl font-semibold">Name: Jhon Deo</h2>
                            <p>Trainer</p>
                            <p>Age: 29</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h2 className=" text-2xl font-semibold mb-2">About</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>

                        <div className=" mt-2">
                            <h2 className=" text-lg font-semibold">Providing Sessions Types: Live & Recorded</h2>
                            <h2 className=" text-lg font-semibold mt-4">Specialism:</h2>
                        </div>

                        <div className="mb-10">
                            <div className="flex gap-2 overflow-x-auto mt-4">
                                {/* Use grid for better responsiveness */}
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-0 w-full">
                                    {logos.map((logo, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[110px] lg:h-[110px] p-2 text-center cursor-pointer rounded border-2 border-solid border-transparent transition-all duration-300"
                                            style={{
                                                borderImage:
                                                    'linear-gradient(180deg, rgba(11, 165, 147, 0.05) 0%, #08776a 51%, rgba(11, 165, 147, 0.05) 100%) 1',
                                            }}
                                        >
                                            <Image
                                                src={logo}
                                                alt={`Logo ${index + 1}`}
                                                height={170}
                                                width={170}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default MorfitterPts;