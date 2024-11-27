import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="hero-section min-h-[732px] w-full bg-gray-100">
            <div className="container mx-auto flex items-center pt-20 px-6">
                {/* Left Section */}
                <div className="left w-1/2">
                    <div className="content">
                        <Link
                            href="#"
                            className="web-link text-xl font-semibold tracking-widest px-4 py-2 border border-[#000000a9] text-bluish-color uppercase rounded-full transition-all hover:bg-greenColor hover:text-white hover:border-none"
                        >
                            Welcome to Morfitter.com
                        </Link>
                        <div className="title font-bold text-7xl leading-[84px] text-left capitalize mt-6">
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
                        <button className="bookBtn text-lg font-medium leading-8 text-white bg-violet-500 py-3 px-6 rounded-full capitalize transition-all hover:bg-green-500">
                            Book A Schedule
                        </button>
                        <div className="icon flex gap-4 my-4">
                            <a href="#" className="item w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
                                <img src="./assets/fb.svg" alt="Facebook" className="w-5 h-5" />
                            </a>
                            <a href="#" className="item w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
                                <img src="./assets/insta.svg" alt="Instagram" className="w-5 h-5" />
                            </a>
                            <a href="#" className="item w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
                                <img src="./assets/twt.svg" alt="Twitter" className="w-5 h-5" />
                            </a>
                            <a href="#" className="item w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
                                <img src="./assets/ln.svg" alt="LinkedIn" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Right Section */}
                <div className="right w-1/2 flex justify-center">
                    <div className="img">
                        <img src="./assets/hero.png" alt="Hero" className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
