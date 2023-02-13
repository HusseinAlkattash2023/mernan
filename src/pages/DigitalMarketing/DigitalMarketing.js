import React from "react";

import logo from "../../assets/images/mernan.png";
import image1 from "../../assets/images/digital marketing(1).png";
import image2 from "../../assets/images/digital marketing(2).png";
import image3 from '../../assets/images/brand_.png';

//**import components */
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home/Home.js";
import BenefitsOffered from '../../components/BenefitsOffered/BenefitsOffered';
import OurPreviousWork from '../../components/OurPreviousWork/OurPreviousWork';
import SubServices from '../../components/SubServices/SubServices';
import StartWorking from '../../components/StartWorking/StartWorking';
import RequestFreeConsulting from '../../components/RequestFreeConsulting/RequestFreeConsulting';
import FrequentlyAskedQuestions from '../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import PreviousClients from '../../components/PreviousClients/PreviousClients';


const DigitalMarketing = () => {
  return (
    <div>
      <Header />
      <Home
        title={"ready_to_grow"}
        text={"a_way_to_promote"}
        image1={image2}
        image2={image1}
        color1={"#FFF2D8"}
        color2={"#FFD261"}
        color3={"#FFCA3D"}
      />
      <BenefitsOffered/>
      <SubServices/>
      <OurPreviousWork/>
      <StartWorking/>
      <RequestFreeConsulting/>
      <FrequentlyAskedQuestions/>
      <PreviousClients color1={"#596773"} color2={"#FDFDFE"} image={image3}/>
      <Footer image={logo} color1={"#EDE4E0"} color2={"#312E3A"} />
    </div>
  );
};

export default DigitalMarketing;
