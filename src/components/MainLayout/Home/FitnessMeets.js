import Image from "next/image";
import meetsImage from '../../../assets/fitness-meet.png';
import meetsBg from '../../../assets/meets-bg.png';

const FitnessMeets = () => {
  const imageStyle = {
    backgroundImage: `url(${meetsBg.src})`, // Fixed the typo in backgroundImage syntax
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className=" bg-greenColor">
      <section style={imageStyle} className="px-6 py-16 text-white relative">
        <div className="xxl:w-[1340px] mx-auto flex items-center justify-center relative z-10">
          <div className="flex flex-wrap items-center justify-between w-full">
            {/* Left Column */}
            <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
              <div className="img">
                <Image
                  height={0}
                  width={0}
                  src={meetsImage}
                  alt="Fitness Meet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-7/12">
              <div className="content relative mt-10 lg:mt-0 z-10">
                <div className="title text-3xl lg:text-5xl xl:text-7xl leading-tight mb-8 capitalize font-semibold">
                  Where <span className="relative inline-block">fitness meets</span> you, anytime, anywhere.
                </div>
                <div className="desc text-lg text-white/80 leading-7 mb-8">
                  Struggling to fit fitness into your busy life? Morfitter makes
                  it easy to stay on track by bringing personal training right to
                  your home, on your time. Whether you’re juggling work, family,
                  or life’s unexpected moments, our platform connects you with
                  expert trainers who help you achieve your fitness goals – whenever
                  and wherever it suits you.
                </div>
                <button className="bookBtn text-lg font-medium leading-8 text-white bg-secondary hover:bg-white hover:text-greenColor py-2 md:py-2 px-5 md:px-10 rounded-full capitalize transition-all hover:">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat z-0"></div>
      </section>
    </div>
  );
};

export default FitnessMeets;
