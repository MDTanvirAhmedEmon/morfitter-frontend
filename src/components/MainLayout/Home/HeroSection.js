import Link from "next/link";
import bgHero from '../../../assets/hero-bg.png'
import insta from '../../../assets/insta.svg'
import twt from '../../../assets/twt.svg'
import fb from '../../../assets/fb.svg'
import linkd from '../../../assets/ln.svg'
import hero from '../../../assets/hero.png'
import Image from "next/image";

const HeroSection = () => {

    const imageStyle = {
        backgroundImage: `URL(${bgHero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <section style={imageStyle} className="hero-section w-full ">
            <div className="container mx-auto flex flex-col lg:flex-row items-center py-20 md:py-16 px-6">
                {/* Left Section */}
                <div className="left lg:w-1/2">
                    <div className="content">
                        <Link
                            href="#"
                            className=" text-sm md:text-xl font-semibold tracking-widest px-4 py-2 border border-[#000000a9] text-bluish-color uppercase rounded-full transition-all hover:bg-greenColor hover:text-white hover:border-none"
                        >
                            Welcome to Morfitter.com
                        </Link>
                        <div className="title font-bold text-4xl md:text-7xl leading-[84px] text-left capitalize mt-6">
                            your Morfitter{" "}
                            <span className="inline-block text-white bg-gradient-to-r from-transparent via-greenColor to-transparent">
                                journey
                            </span>{" "}
                            starts here!
                        </div>
                        <div className="desc text-lg font-normal leading-7 text-gray-700 mt-4 mb-6 max-w-md">
                            Welcome to Morfitter.com – your fitness journey starts here!
                            Achieve your goals with expert trainers and personalized plans,
                            anytime, anywhere.
                        </div>
                        <button className="bookBtn text-lg font-medium leading-8 text-white bg-secondary hover:bg-greenColor py-2 md:py-3 px-5 md:px-8 rounded-full capitalize transition-all hover:">
                            Book A Schedule
                        </button>
                        <div className="icon flex gap-4 mt-8">
                            <Link href="#" className="item w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
                                <Image src={fb} alt="Facebook" width={0} height={0} className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="item w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
                                <Image src={insta} alt="Facebook" width={0} height={0} className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="item w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
                                <Image src={twt} alt="Facebook" width={0} height={0} className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="item w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
                                <Image src={linkd} alt="Facebook" width={0} height={0} className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Right Section */}
                <div className="right mt-14 lg:mt-0 lg:w-1/2 flex justify-center">
                    <div className="img">
                        <Image src={hero} alt="Hero" height={0} width={0} className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
