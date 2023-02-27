import React, { useState, useEffect } from "react";

//**import components*/
import Footer from "../../components/Footer/Footer";
import WhoUs from "../../components/WhoUs/WhoUs";
import Portfolio from "../../components/Portfolio/Portfolio";
import OurServices from "../../components/OurServices/OurServices";
import WhatMakesDifference from "../../components/WhatMakesDifference/WhatMakesDifference";
import PreviousClients from "../../components/PreviousClients/PreviousClients";
import OurWayOfWork from "../../components/OurWayOfWork/OurWayOfWork";
import RequestFreeConsulting from "../../components/RequestFreeConsulting/RequestFreeConsulting";
import FrequentlyAskedQuestions from "../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import OurPartners from "../../components/OurPartners/OurPartners";
import Subscribe from "../../components/Subscribe/Subscribe";
import LatestArticles from "../../components/LatestArticles/LatestArticles";

//** import images */
import logo from "../../assets/images/mernan.png";
import image_en from "../../assets/images/hero.svg";
import image_ar from "../../assets/images/hero_ar.svg";
import image6 from "../../assets/images/request.png";
import image7 from "../../assets/images/request_ar.png";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";

const questions = [
  {
    id: 1,
    question: "what_is_the_approximate",
    answer: "",
    number: "One",
  },
  {
    id: 2,
    question: "do_you_provide",
    answer: "",
    number: "Two",
  },
  {
    id: 3,
    question: "is_it_possible",
    answer: "",
    number: "Three",
  },
];

const LandingPage = () => {
  const [data, setData] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/HomeScreen?page=0&pageSize=12`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  return (
    <div>
      {data.map(
        (item) =>
          item.id === 2 && (
            <div key={item.id}>
              <WhoUs
                title={"we_transfer_your_work"}
                title_={"world_full"}
                image_en={image_en}
                image_ar={image_ar}
                descriptionEn={item.descriptionEn}
                descriptionAr={item.descriptionAr}
                clientNumber={item.clientnumber}
                memberNumber={item.memberNumber}
                designNumber={item.designNumber}
                fundedCampaignNumber={item.fundedCampaignNumber}
                button={"who_is_mernan"}
                state_={true}
              />
            </div>
          )
      )}

      {/* Portfolio */}
      <Portfolio />

      {/* Our Services */}
      <OurServices />

      {/* What makes difference */}
      <WhatMakesDifference />

      {/* Previous Clients */}
      <PreviousClients/>

      {/* our we of work */}
      <OurWayOfWork />

      {/*Request free consulting*/}
      <RequestFreeConsulting
        color1={"--color1"}
        color2={"--color2"}
        color3={"--color2"}
        color4={"--color2"}
        image1={image6}
        image2={image7}
      />

      {/* LatestArticles */}
      <LatestArticles />

      {/* frequently asked questions */}
      <FrequentlyAskedQuestions questions={questions} />

      {/* our partners */}
      <OurPartners color1={"#EDE4E0"} color2={"#312E3A"} />

      {/* Subscribe */}
      <Subscribe />

      {/* Footer */}
      <Footer image={logo} color1={"#EDE4E0"} color2={"#312E3A"} />
    </div>
  );
};

export default LandingPage;
