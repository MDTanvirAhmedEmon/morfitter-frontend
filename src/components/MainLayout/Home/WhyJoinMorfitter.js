import Image from "next/image";
import curveBorder from '../../../assets/curve-border.png';
import gymIcon1 from '../../../assets/gym-icon-1.png';
import gymIcon2 from '../../../assets/gym-icon-4.png';
import gymIcon3 from '../../../assets/gym-icon-3.png';

const WhyJoinMorfitter = () => {
    return (
        <section className="join-section py-16">
            <div className="container mx-auto text-center">
                {/* Header Section */}
                <div className="head-title flex justify-center mb-10 md:mb-20">
                    <div className="title-box w-[620px]">
                        <div className="  title text-4xl lg:text-6xl font-extrabold leading-[50px] md:leading-[74px]">
                            Why <span className="text-greenColor font-bold">Join Morfitter?</span>
                        </div>
                        <div className=" flex justify-center md:hidden mt-3">
                            <Image
                                src={curveBorder}
                                alt="Curve Border"
                                className=" w-[200px] mx-auto"
                                width={0} // Set an appropriate width
                                height={0} // Set an appropriate height
                            />
                        </div>

                        <Image
                            src={curveBorder}
                            alt="Curve Border"
                            className="relative hidden md:block w-[200px] md:w-[300px] lg:w-[420px] left-44 lg:left-40 top-0 lg:top-2"
                            width={0} // Set an appropriate width
                            height={0} // Set an appropriate height
                        />
                    </div>
                </div>

                {/* Card Section */}
                <div className="card-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-5 md:px-0">
                    {/* Card 1 */}
                    <div className="join-card bg-white rounded-lg shadow-2xl p-5 cursor-pointer transition-all hover:bg-secondary hover:text-white">
                        <div className="card-head flex justify-start mb-4">
                            <div className="join-card-circle-border border-part w-[88px] h-[88px] border border-greenColor flex justify-center items-center rounded-full overflow-hidden transition-all ">
                                <div className="join-card-circle bg-part w-[79px] h-[79px] bg-primary rounded-full flex items-center justify-center">
                                    <Image src={gymIcon1} alt="Icon 1" width={60} height={40} />
                                </div>
                            </div>
                        </div>
                        <div className=" text-lg join-card-text font-semibold text-left leading-[22px]">Find Your Perfect Trainer</div>
                        <div className=" text-left join-card-text text-md text-gray-700 mt-2">
                            Search and connect with personal trainers who specialize in the fitness goals you care about – from fat burning to strength training, and everything in between.
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="join-card bg-white rounded-lg shadow-2xl p-5 cursor-pointer transition-all hover:bg-secondary hover:text-white">
                        <div className="card-head flex justify-start mb-4">
                            <div className="join-card-circle-border border-part w-[88px] h-[88px] border border-greenColor flex justify-center items-center rounded-full overflow-hidden transition-all ">
                                <div className="join-card-circle bg-part w-[79px] h-[79px] bg-primary rounded-full flex items-center justify-center">
                                    <Image src={gymIcon2} alt="Icon 1" width={60} height={40} />
                                </div>
                            </div>
                        </div>
                        <div className=" text-lg join-card-text font-semibold text-left leading-[22px]">Work Out Anytime, Anywhere</div>
                        <div className=" text-left join-card-text text-md text-gray-700 mt-2">
                            Access personalized workout plans, recorded sessions, and live content that fit your busy schedule.
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="join-card bg-white rounded-lg shadow-2xl p-5 cursor-pointer transition-all hover:bg-secondary hover:text-white">
                        <div className="card-head flex justify-start mb-4">
                            <div className="join-card-circle-border border-part w-[88px] h-[88px] border border-greenColor flex justify-center items-center rounded-full overflow-hidden transition-all ">
                                <div className="join-card-circle bg-part w-[79px] h-[79px] bg-primary rounded-full flex items-center justify-center">
                                    <Image src={gymIcon3} alt="Icon 1" width={60} height={40} />
                                </div>
                            </div>
                        </div>
                        <div className=" text-lg join-card-text font-semibold text-left leading-[22px]">Motivation & Community</div>
                        <div className=" text-left join-card-text text-md text-gray-700 mt-2">
                            Follow your favorite trainers, join groups, and interact with others who share your goals. Stay motivated with a fitness community tailored to you.
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="join-card bg-white rounded-lg shadow-2xl p-5 cursor-pointer transition-all hover:bg-secondary hover:text-white">
                        <div className="card-head flex justify-start mb-4">
                            <div className="join-card-circle-border border-part w-[88px] h-[88px] border border-greenColor flex justify-center items-center rounded-full overflow-hidden transition-all ">
                                <div className="join-card-circle bg-part w-[79px] h-[79px] bg-primary rounded-full flex items-center justify-center">
                                    <Image src={gymIcon2} alt="Icon 1" width={60} height={40} />
                                </div>
                            </div>
                        </div>
                        <div className=" text-lg join-card-text font-semibold text-left leading-[22px]">Exclusive Premium Content</div>
                        <div className=" text-left join-card-text text-md text-gray-700 mt-2">
                            Get more with a premium membership– unlock advanced training programs, live sessions, and one-on-one engagement with your trainer.
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default WhyJoinMorfitter;
