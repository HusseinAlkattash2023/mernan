import React, { useContext } from "react";

import "./SubServices.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//**import components */
import Card from "./Card/Card";

//**import images */
import image1 from "../../assets/images/email_marketing.png";
import image2 from "../../assets/images/google_ads.png";
import image3 from "../../assets/images/marketing_strategy.png";
import image4 from "../../assets/images/content_marketing.png";
import image5 from "../../assets/images/search_engine.png";
import image6 from "../../assets/images/sms_marketing.png";
import image7 from "../../assets/images/marketing_consulting.png";

const SubServices = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div
      className="sub_services"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("sub_services")}</h2>
      <div className="cards row">
        <Card
          image={image1}
          title={"email_marketing"}
          text={"through_email"}
          height={`${changeSide === "ar" ? "461px" : "525px"}`}
        />
        <Card
          image={image2}
          title={"google_ads"}
          text={"through_google"}
          height={`${changeSide === "ar" ? "461px" : "525px"}`}
        />
        <Card
          image={image3}
          title={"marketing_strategy"}
          text={"while_building"}
          height={`${changeSide === "ar" ? "461px" : "525px"}`}
        />
        <Card
          image={image4}
          title={"content_marketing"}
          text={"the_importance"}
          height={`${changeSide === "ar" ? "461px" : "525px"}`}
        />
        <Card
          image={image5}
          title={"search_engine"}
          text={"through_this_service"}
          height={`${changeSide === "ar" ? "461px" : "525px"}`}
        />
        <Card
          image={image6}
          title={"sms_marketing"}
          text={"sms_marketing_"}
          height={`${changeSide === "ar" ? "461px" : "525px"}`}
        />
        <Card
          image={image7}
          title={"marketing_consulting"}
          text={"marketing_consulting_"}
          height={`${changeSide === "ar" ? "461px" : "525px"}`}
          state={true}
        />
      </div>
    </div>
  );
};

export default SubServices;
