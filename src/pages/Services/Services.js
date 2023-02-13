import React from "react";

//** import images */
import image from "../../assets/images/heading3.png";
import logo from "../../assets/images/mernan.png";
import image2 from '../../assets/images/brand_.png';
import image4 from "../../assets/images/start-work.png";
import image5 from "../../assets/images/start-work-ar.png";
import image6 from "../../assets/images/request.png";
import image7 from "../../assets/images/request_ar.png";

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
      <StartWorking
        color1={"--color6"}
        color2={"--color5"}
        color3={"--color3"}
        image1={image4}
        image2={image5}
      />
      <RequestFreeConsulting
        color1={"--color1"}
        color2={"--color2"}
        color3={"--color2"}
        color4={"--color2"}
        image1={image6}
        image2={image7}
      />
      <PreviousClients color1={"#596773"} color2={"#FDFDFE"} image={image2}/>
      <Footer image={logo} color1={"#EDE4E0"} color2={"#312E3A"} />
    </div>
  );
};

export default Services;
