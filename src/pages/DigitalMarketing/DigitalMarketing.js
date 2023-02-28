import React, { useEffect, useState } from "react";

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
import PricingMarketing from "../../components/PricingMarketing/PricingMarketing";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";


const DigitalMarketing = () => {
  const [data, setData] = useState([]);
  const [dataSubServices , setDataSubServices] = useState([])

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/Services?page=0&pageSize=12`)
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/SubService?page=0&pageSize=12`)
      .then((response) => setDataSubServices(response.data.data))
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  return (
    <div>
      {data &&
        data.map((item) => 
        item.id === 2 && (
          <div key={item.id}>
          <Home
            titleEn={item.pageHeaderEn}
            titleAr={item.pageHeaderAr}
            descriptionEn={item.descriptionEn}
            descriptionAr={item.descriptionAr}
            image1={`${BASE_API_URL}/${item.image}`}
            image2={`${BASE_API_URL}/${item.image}`}
            color1={item.color1}
            color2={item.color2}
            color3={item.color3}
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
        </div>
        )
        )}
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
      <FrequentlyAskedQuestions/>
      <PreviousClients color1={"#596773"} color2={"#FDFDFE"} image={image3} />
      <Footer image={logo} color1={"#EDE4E0"} color2={"#312E3A"} />
    </div>
  );
};

export default DigitalMarketing;
