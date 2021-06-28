import React, {useState} from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import PointsFortsSection from "../components/PointsFortsSection/PointsFortsSection";
import WhySection from "../components/WhySection/WhySection";
import RealSection from "../components/RealSection/RealSection";
import SolutionSection from "../components/SolutionSection/SolutionSection";

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection />
            <SolutionSection />
            <PointsFortsSection />
            <WhySection />
            <RealSection />
            <Footer />
        </>
    );
};

export default Home;