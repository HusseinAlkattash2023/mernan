import React from "react";

import logo from "../../assets/images/mernan.png";
import image1 from "../../assets/images/digital marketing(1).png";
import image2 from "../../assets/images/digital marketing(2).png";

//**import components */
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home/Home.js";
import BenefitsOffered from '../../components/BenefitsOffered/BenefitsOffered';
import OurPreviousWork from '../../components/OurPreviousWork/OurPreviousWork';
import SubServices from '../../components/SubServices/SubServices';


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
      <Footer image={logo} color1={"#EDE4E0"} color2={"#312E3A"} />
    </div>
  );
};

export default DigitalMarketing;
