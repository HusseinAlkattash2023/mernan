import React, { useEffect, useState } from "react";

//** import images */
import image from "../../assets/images/heading3.png";
import logo from "../../assets/images/mernan.png";
import image2 from "../../assets/images/brand_.png";
import image4 from "../../assets/images/start-work.png";
import image5 from "../../assets/images/start-work-ar.png";
import image6 from "../../assets/images/request.png";
import image7 from "../../assets/images/request_ar.png";

//** import components */
import Footer from "../../components/Footer/Footer";
import WhoUs from "../../components/WhoUs/WhoUs";
import ServicesOffered from "../../components/ServicesOffered/ServicesOffered";
import Portfolio from "../../components/Portfolio/Portfolio";
import StartWorking from "../../components/StartWorking/StartWorking";
import RequestFreeConsulting from "../../components/RequestFreeConsulting/RequestFreeConsulting";
import PreviousClients from "../../components/PreviousClients/PreviousClients";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";

const Services = () => {
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
                image_en={image}
                image_ar={image}
                title={"do_you_have"}
                title_={"to_implement_it"}
                descriptionEn={item.descriptionEn}
                descriptionAr={item.descriptionAr}
                clientNumber={item.clientnumber}
                memberNumber={item.memberNumber}
                designNumber={item.designNumber}
                fundedCampaignNumber={item.fundedCampaignNumber}
                button={"our_services_"}
                state={true}
                state_={false}
              />
              {/* <WhoUs
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
              /> */}
            </div>
          )
      )}
      <ServicesOffered />
      <Portfolio />
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
      <PreviousClients color1={"#596773"} color2={"#FDFDFE"} image={image2} />
      <Footer image={logo} color1={"#EDE4E0"} color2={"#312E3A"} />
    </div>
  );
};

export default Services;
