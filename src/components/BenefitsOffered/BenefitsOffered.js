import React, { useContext } from "react";

import "./BenefitsOffered.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//**import components */
import Card from "./Card/Card";

//**import icons */
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";

const BenefitsOffered = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div
      className="benefits_offered"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("benefits_offered")}</h2>
      <div className="body">
        <div className="text">
          <p>{t("by_subscribing")}</p>
        </div>
        <div className="cards">
          <div className="section1">
            <Card
              color1={"--color7"}
              color2={"--color5"}
              icon={icon1}
              title={"financial"}
              text={"financial_success"}
              height={"364px"}
            />
            <Card
              color1={"--color3"}
              color2={"--color2"}
              icon={icon4}
              title={"strategy"}
              text={"there_is_no_fixed"}
              height={"407px"}
            />
          </div>
          <div className="section2">
          <Card
              color1={"--color3"}
              color2={"--color2"}
              icon={icon2}
              title={"greater_reach"}
              text={"by_increasing"}
              height={"364px"}
            />
            <Card
              color1={"--color7"}
              color2={"--color5"}
              icon={icon3}
              title={"bonus"}
              text={"with_so_many"}
              height={"407px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOffered;
