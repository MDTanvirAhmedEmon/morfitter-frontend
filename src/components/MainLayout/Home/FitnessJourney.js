import Image from "next/image";
import decorationImage1 from '../../../assets/decoration-1.png';
import decorationImage2 from '../../../assets/decoration-2.png';
import fitness from '../../../assets/fitness.png';
import Link from "next/link";

const FitnessJourney = () => {
    const imageStyle = {
        backgroundImage: `URL(${decorationImage1.src})`,
        backgroundSize: "cover",
    };
    const imageStyle2 = {
        backgroundImage: `URL(${decorationImage2.src})`,
        backgroundSize: "cover",
    };
    return (
        <section className="signup-section py-16 md:py-40 px-6">
            <div className="xxl:w-[1340px] mx-auto">
                <div style={imageStyle2} className="bg-decoration rounded-[20px] flex items-center -rotate-1 justify-center w-full h-[420px] md:h-[360px]">
                    <div style={imageStyle} className="content relative w-full flex justify-between items-center  h-[400px] md:h-[340px] bg-cover  rounded-[20px] md:p-[60px] px-5 lg:px-16">

                        {/* Left Content */}
                        <div className="left w-full lg:w-1/2 text-white ">
                            <div className="title text-4xl lg:text-5xl font-normal leading-8 md:leading-[55px] text-shadow-md">
                                Your Fitness Journey
                            </div>
                            <div className="title text-4xl lg:text-5xl font-normal leading-10 md:leading-[55px] text-shadow-md">
                                Starts Here!
                            </div>
                            <div className="desc text-lg font-normal leading-[28px] mt-4">
                                Don’t let a busy life keep you from your fitness goals. Join
                                Morfitter today, and make fitness work for you.
                            </div>
                            <Link href={`/auth/user-register`}>
                                <button className="mt-6 px-6 md:px-8 py-2 md:py-3 text-lg font-medium bg-white text-greenColor border-2 border-none rounded-full transition-colors duration-300 hover:bg-[#0ba593] hover:text-white">
                                    Sign up now
                                </button>
                            </Link>
                            <div className="desc-sub mt-4 text-sm text-white/80">
                                & take the first step toward a fitter, healthier you!
                            </div>
                        </div>

                        {/* Right Content (Image) */}
                        <div className="hidden lg:block right w-full lg:w-1/2">
                            <Image
                                src={fitness}
                                alt="Fitness"
                                width={0}  // Adjust the width as per your design
                                height={0} // Adjust the height as per your design
                                className="w-auto h-auto absolute right-5 xl:right-28 bottom-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FitnessJourney;
