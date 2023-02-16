import React, { useContext } from "react";

import "./BenefitsOffered.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//**import components */
import Card from "./Card/Card";

const BenefitsOffered = ({
  title1,
  text1,
  title2,
  text2,
  title3,
  text3,
  title4,
  text4,
  icon1,
  icon2,
  icon3,
  icon4,
  height1,
  height2,
  height3,
  height4,
  height5,
  height6,
}) => {
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
          <div
            className={`${changeSide === "ar" ? "section1_ar" : "section1"}`}
          >
            <Card
              color1={"--color7"}
              color2={"--color5"}
              icon={icon1}
              title={title1}
              text={text1}
            />
            <Card
              color1={"--color3"}
              color2={"--color2"}
              icon={icon4}
              title={title2}
              text={text2}
            />
          </div>
          <div className="section2">
            <Card
              color1={"--color3"}
              color2={"--color2"}
              icon={icon2}
              title={title3}
              text={text3}
            />
            <Card
              color1={"--color7"}
              color2={"--color5"}
              icon={icon3}
              title={title4}
              text={text4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOffered;
