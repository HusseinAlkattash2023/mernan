import React, { useContext, useEffect, useState } from "react";

import "./OurServices.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//** import components */
import Card from "./Card/Card.js";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";

//** import images */
import image1 from "../../assets/images/service1.png";
import image2 from "../../assets/images/service2.png";
import image3 from "../../assets/images/service3.png";
import image4 from "../../assets/images/service4.png";
import image5 from "../../assets/images/service5.png";

const OurServices = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const [data, setData] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios.get(`${BASE_API_URL}/Services?page=0&pageSize=12`)
      .then(response => setData(response.data.data))
      .catch(error => console.log(error));
  }, [BASE_API_URL]);

  const cards = [
    {
      id: 1,
      image: image3,
      title: "digital_marketing_",
      item1: "achieve_financial_success",
      item2: "good_targeting_of_customers",
      item3: "increase",
      color: "#fcd833",
    },
    {
      id: 2,
      image: image2,
      title: "development",
      item1: "make_the_website",
      item2: "unique_graphic_design",
      item3: "focus",
      color: "#ec92c4",
    },
    {
      id: 3,
      image: image1,
      title: "branding",
      item1: "build_a_distinctive",
      item2: "brand_connection",
      item3: "recognize_your_brand",
      color: "#16a8a3",
    },
    {
      id: 4,
      image: image5,
      title: "design",
      item1: "effective_communication",
      item2: "create_a_strong",
      item3: "take_your_brand",
      color: "#7a00ca",
    },
    {
      id: 5,
      image: image4,
      title: "social_media_marketing",
      item1: "strengthening",
      item2: "gain_the_trust",
      item3: "increase_sales",
      color: "#f89600",
    },
  ];

  return (
    <div
      className="our_services"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("our_services")}</h2>

      <div className="cards">
        <div className="row">
          {data &&
            data.map((card) => (
              <div className="col-lg-4 my-3" key={card.id}>
                <Card
                  image={`${BASE_API_URL}/${card.icon}`}
                  nameAr={card.nameAr}
                  nameEn={card.nameEn}
                  color={card.colorIcon}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
