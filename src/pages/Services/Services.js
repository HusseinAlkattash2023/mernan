import React from "react";

//** import images */
import image from "../../assets/images/heading3.png";
import logo from "../../assets/images/mernan.png";
import image2 from '../../assets/images/brand_.png';

//** import components */
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WhoUs from "../../components/WhoUs/WhoUs";
import ServicesOffered from '../../components/ServicesOffered/ServicesOffered';
import Portfolio from '../../components/Portfolio/Portfolio';
import StartWorking from '../../components/StartWorking/StartWorking';
import RequestFreeConsulting from '../../components/RequestFreeConsulting/RequestFreeConsulting';
import PreviousClients from "../../components/PreviousClients/PreviousClients";



const Services = () => {
  return (
    <div>
      <Header />
      <WhoUs
        image_en={image}
        image_ar={image}
        title={"do_you_have"}
        title_={"to_implement_it"}
        text={"you_have_reached"}
        button={"our_services_"}
        state={true}
      />
      <ServicesOffered/>
      <Portfolio/>
      <StartWorking/>
      <RequestFreeConsulting/>
      <PreviousClients color1={"#596773"} color2={"#FDFDFE"} image={image2}/>
      <Footer image={logo} color1={"#EDE4E0"} color2={"#312E3A"} />
    </div>
  );
};

export default Services;
