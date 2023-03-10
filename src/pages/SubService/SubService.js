import React, { useEffect, useState } from "react";

import logo from "../../assets/images/mernan.png";
import image3 from "../../assets/images/brand_.png";
import image4 from "../../assets/images/start-work2.png";
import image5 from "../../assets/images/start-work2-ar.png";
import image6 from "../../assets/images/request2.png";
import image7 from "../../assets/images/request2-ar.png";

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
import PricingMarketing from "../../components/PricingMarketing/PricingMarketing";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";

const SubService = ({
  pageHeaderAr,
  pageHeaderEn,
  descriptionEn,
  descriptionAr,
  image1,
  image2,
  color1,
  color2,
  color3,
}) => {
  const [dataSubServices, setDataSubServices] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/SubService?page=0&pageSize=12`)
      .then((response) => setDataSubServices(response.data.data))
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  return (
    <div>
      <Home
        titleEn={pageHeaderEn}
        titleAr={pageHeaderAr}
        descriptionEn={descriptionEn}
        descriptionAr={descriptionAr}
        image1={image1}
        image2={image2}
        color1={color1}
        color2={color2}
        color3={color3}
        degree={"272.79deg"}
        degree_ar={"89.52deg"}
        average={"3.8%"}
        average2={"42.32%"}
        average3={"97.86%"}
        average_ar={"2.46%"}
        average2_ar={"42.24%"}
        average3_ar={"99.59%"}
        color_btn1={"#39858E"}
        color_btn2={"#FDFDFE"}
        state={true}
        name={"know_more"}
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
      <SubServices list={dataSubServices} />
      <OurPreviousWork />
      <PricingMarketing />
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

export default SubService;
