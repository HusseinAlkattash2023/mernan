import React from "react";

import image1 from "../../assets/images/development.svg";
import image2 from "../../assets/images/development-ar.svg";
import image3 from "../../assets/images/dev_img1.png";
import image4 from "../../assets/images/dev_img2.png";
import image5 from "../../assets/images/dev_img3.png";
import image6 from "../../assets/images/dev_img4.png";
import image7 from "../../assets/images/marketing_consulting.png";
import image8 from "../../assets/images/start-work2.png";
import image9 from "../../assets/images/start-work2-ar.png";
import image10 from "../../assets/images/request2.png";
import image11 from "../../assets/images/request2-ar.png";
import image12 from "../../assets/images/brand_.png";
import logo from "../../assets/images/mernan.png";

//**import icons */
import icon1 from "../../assets/images/dev_icon1.svg";
import icon2 from "../../assets/images/dev_icon2.svg";
import icon3 from "../../assets/images/dev_icon3.svg";
import icon4 from "../../assets/images/dev_icon4.svg";

//**import components */
import Home from "../../components/Home/Home";
import BenefitsOffered from "../../components/BenefitsOffered/BenefitsOffered";
import OurPreviousWork from "../../components/OurPreviousWork/OurPreviousWork";
import SubServices from "../../components/SubServices/SubServices";
import StartWorking from "../../components/StartWorking/StartWorking";
import RequestFreeConsulting from "../../components/RequestFreeConsulting/RequestFreeConsulting";
import FrequentlyAskedQuestions from '../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import PreviousClients from "../../components/PreviousClients/PreviousClients";
import Footer from "../../components/Footer/Footer";

const list = [
  {
    id: 1,
    image: image3,
    title: "website_development",
    text: "whether",
  },
  {
    id: 2,
    image: image4,
    title: "developing_e-commerce",
    text: "the_presence",
  },
  {
    id: 3,
    image: image5,
    title: "mobile_application",
    text: "developing",
  },
  {
    id: 4,
    image: image6,
    title: "website_design",
    text: "website",
  },
  {
    id: 5,
    image: image7,
    title: "development_consulting",
    text: "development_consulting_",
    state: true,
  },
];

const questions = [
  {
    id:1,
    question:"what_is_the_approximate",
    answer:""
  },
  {
    id:2,
    question:"do_you_provide",
    answer:""
  },
  {
    id:3,
    question:"is_it_possible",
    answer:""
  },
]

const Development = () => {
  return (
    <div>
      <Home
        title={"help_your_customer"}
        text={"from_programming"}
        image1={image2}
        image2={image1}
        color1={"#FBD8EB"}
        color2={"#FFB6DD"}
        color3={"#E7A5C8"}
        degree={"272.63deg"}
        degree_ar={"89.52deg"}
        average={"12.87%"}
        average2={"36.39%"}
        average3={"98.44%"}
        average_ar={"11.24%"}
        average2_ar={"35.52%"}
        average3_ar={"99.59%"}
      />
      <BenefitsOffered
        title1={"make_the_website"}
        text1={"ensuring_the_safety"}
        title2={"focus"}
        text2={"ensuring_the_speed"}
        title3={"graphic_design"}
        text3={"work_on_developing"}
        title4={"website_maintenance"}
        text4={"our_services_do"}
        icon1={icon1}
        icon2={icon2}
        icon3={icon3}
        icon4={icon4}
      />
      <SubServices list={list} />
      <OurPreviousWork />
      <StartWorking
        color1={"--color1"}
        color2={"--color2"}
        color3={"--color7"}
        color4={"--color7"}
        image1={image8}
        image2={image9}
      />
      <RequestFreeConsulting
        color1={"--color6"}
        color2={"--color5"}
        color3={"--color5"}
        color4={"--color5"}
        image1={image10}
        image2={image11}
      />
      <FrequentlyAskedQuestions questions={questions}/>
      <PreviousClients color1={"#596773"} color2={"#FDFDFE"} image={image12} />
      <Footer image={logo} color1={"#EDE4E0"} color2={"#312E3A"} />
    </div>
  );
};

export default Development;
