import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { homeObj_1, homeObj_2, homeObj_3 } from '../components/InfoSection/Data';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import RoadmapSection from '../components/RoadmapSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObj_1}/>
        <InfoSection {...homeObj_2}/>
        <InfoSection {...homeObj_3}/>
        <RoadmapSection />
        
        
    </>
  );
;}

export default Home;