import FitnessEnthusiasts from '@/components/MainLayout/Home/FitnessEnthusiasts';
import HeroSection from '@/components/MainLayout/Home/HeroSection';
import LogoSlider from '@/components/MainLayout/Home/LogoSlider';
import PersonalTrainers from '@/components/MainLayout/Home/PersonalTrainers';
import React from 'react';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <LogoSlider></LogoSlider>
            <PersonalTrainers></PersonalTrainers>
            <FitnessEnthusiasts></FitnessEnthusiasts>
        </div>
    );
};

export default Home;