import Image from 'next/image';
import logo1 from '../../../assets/logo1.svg';
import logo2 from '../../../assets/logo2.svg';
import logo3 from '../../../assets/logo3.svg';
import logo4 from '../../../assets/logo4.svg';
import logo5 from '../../../assets/logo5.svg';
import logo6 from '../../../assets/logo6.svg';
import logo7 from '../../../assets/logo7.svg';
import logo8 from '../../../assets/logo8.svg';
import logo9 from '../../../assets/logo9.svg';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

const LogoSlider = () => {
  return (
    <section className="min-h-[120px] px-5 flex items-center overflow-hidden border-t-[5px] border-primary border-b-2 border-b-[#0ba5934f]">
      <div className="overflow-hidden relative flex">
        {/* Main container with group class */}
        <div className="flex animate-scroll group">
          {/* Loop through the logos array */}
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[170px] h-[170px] px-7 text-center"
              style={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderImage: 'linear-gradient(180deg, rgba(11, 165, 147, 0.05) 0%, #08776a 51%, rgba(11, 165, 147, 0.05) 100%) 1',
                borderRadius: '8px', // optional: to add rounded corners
              }}
            >
              <Image src={logo} alt={`Logo ${index + 1}`} height={170} width={170} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
