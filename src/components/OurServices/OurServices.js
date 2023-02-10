import React, { useContext } from "react";

import "./OurServices.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//** import components */
import Card from "./Card/Card.js";

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

  return (
    <div
      className="our_services"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("our_services")}</h2>

      <div className="cards">
        <div className="row">
          <Card
            image={image3}
            title={"digital_marketing_"}
            item1={"achieve_financial_success"}
            item2={"good_targeting_of_customers"}
            item3={"increase"}
            color={"#fcd833"}
          />
          <Card
            image={image2}
            title={"development"}
            item1={"make_the_website"}
            item2={"unique_graphic_design"}
            item3={"focus"}
            color={"#ec92c4"}
          />
          <Card
            image={image1}
            title={"branding"}
            item1={"build_a_distinctive"}
            item2={"brand_connection"}
            item3={"recognize_your_brand"}
            color={"#16a8a3"}
          />
          <Card
            image={image5}
            title={"design"}
            item1={"effective_communication"}
            item2={"create_a_strong"}
            item3={"take_your_brand"}
            color={"#7a00ca"}
          />
          <Card
            image={image4}
            title={"social_media_marketing"}
            item1={"strengthening"}
            item2={"gain_the_trust"}
            item3={"increase_sales"}
            color={"#f89600"}
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
