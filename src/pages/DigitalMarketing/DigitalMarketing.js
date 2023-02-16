import React from "react";

//**import icons */
import logo from "../../assets/images/mernan.png";
import image1 from "../../assets/images/digital marketing(1).png";
import image2 from "../../assets/images/digital marketing(2).png";
import image3 from "../../assets/images/brand_.png";
import image4 from "../../assets/images/start-work2.png";
import image5 from "../../assets/images/start-work2-ar.png";
import image6 from "../../assets/images/request2.png";
import image7 from "../../assets/images/request2-ar.png";

//**import images */
import image8 from "../../assets/images/email_marketing.png";
import image9 from "../../assets/images/google_ads.png";
import image10 from "../../assets/images/marketing_strategy.png";
import image11 from "../../assets/images/content_marketing.png";
import image12 from "../../assets/images/search_engine.png";
import image13 from "../../assets/images/sms_marketing.png";
import image14 from "../../assets/images/marketing_consulting.png";

//**import icons */
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";

//**import components */
import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home/Home.js";
import BenefitsOffered from "../../components/BenefitsOffered/BenefitsOffered";
import OurPreviousWork from "../../components/OurPreviousWork/OurPreviousWork";
import SubServices from "../../components/SubServices/SubServices";
import StartWorking from "../../components/StartWorking/StartWorking";
import RequestFreeConsulting from "../../components/RequestFreeConsulting/RequestFreeConsulting";
import FrequentlyAskedQuestions from "../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import PreviousClients from "../../components/PreviousClients/PreviousClients";
import Pricing from "../../components/Pricing/Pricing";

const list =[
  {
    id:1,
    image :image8,
    title:"email_marketing",
    text:"through_email"
  },
  {
    id:2,
    image :image9,
    title:"google_ads",
    text:"through_google"
  },
  {
    id:3,
    image :image10,
    title:"marketing_strategy",
    text:"while_building"
  },
  {
    id:4,
    image :image11,
    title:"content_marketing",
    text:"the_importance"
  },
  {
    id:5,
    image :image12,
    title:"search_engine",
    text:"through_this_service"
  },
  {
    id:6,
    image :image13,
    title:"sms_marketing",
    text:"sms_marketing_"
  },
  {
    id:7,
    image :image14,
    title:"marketing_consulting",
    text:"marketing_consulting_",
    state:true
  },
]

const DigitalMarketing = () => {
  return (
    <div>
      <Home
        title={"ready_to_grow"}
        text={"a_way_to_promote"}
        image1={image2}
        image2={image1}
        color1={"#FFF2D8"}
        color2={"#FFD261"}
        color3={"#FFCA3D"}
        degree={"272.79deg"}
        degree_ar={"89.52deg"}
        average={"3.8%"}
        average2={"42.32%"}
        average3={"97.86%"}
        average_ar={"2.46%"}
        average2_ar={"42.24%"}
        average3_ar={"99.59%"}
      />
      <BenefitsOffered
        title1={"financial"}
        text1={"financial_success"}
        title2={"strategy"}
        text2={"there_is_no_fixed"}
        title3={"greater_reach"}
        text3={"by_increasing"}
        title4={"bonus"}
        text4={"with_so_many"}
        icon1={icon1}
        icon2={icon2}
        icon3={icon3}
        icon4={icon4}
      />
      <SubServices list = {list}/>
      <OurPreviousWork />
      <Pricing />
      <StartWorking
        color1={"--color1"}
        color2={"--color2"}
        color3={"--color7"}
        color4={"--color7"}
        image1={image4}
        image2={image5}
      />
      <RequestFreeConsulting
        color1={"--color6"}
        color2={"--color5"}
        color3={"--color5"}
        color4={"--color5"}
        image1={image6}
        image2={image7}
      />
      <FrequentlyAskedQuestions />
      <PreviousClients color1={"#596773"} color2={"#FDFDFE"} image={image3} />
      <Footer image={logo} color1={"#EDE4E0"} color2={"#312E3A"} />
    </div>
  );
};

export default DigitalMarketing;
