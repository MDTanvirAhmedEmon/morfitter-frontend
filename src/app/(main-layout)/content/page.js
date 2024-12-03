import Image from 'next/image';
import gymbg from '../../../assets/content/gym1.png';
import fitnessTeam from '../../../assets/content/fitnessTeam.png';

const Content = () => {
    return (
        <div className="container mx-auto py-20">
            <div className="relative">
                <Image src={gymbg} className="w-full" width={0} height={0} alt="gym" />
                
                <Image 
                    src={fitnessTeam} 
                    className="absolute md:left-5 bottom-[4px] md:bottom-[8px] lg:bottom-[12px] xl:bottom-[18px] lg:left-14 xl:left-44 w-[120px] md:w-[300px] lg:w-[400px] xl:w-[550px] "
                    width={0} 
                    height={0} 
                    alt="person" 
                />
            </div>
        </div>
    );
};

export default Content;
