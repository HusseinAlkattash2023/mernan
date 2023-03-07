import React, { useContext } from "react";

import "./WhatMakesMernan.scss";

//** import images */
import image1 from "../../assets/images/heading2.png";
import image2 from "../../assets/images/heading2_ar.png";
import image3 from "../../assets/images/Highlight_05.png";
import image4 from "../../assets/images/Highlight_ar.png";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

//** import components */
import Button from "../Button/Button";

const WhatMakesMernan = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="what_make" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <div className={`${changeSide !== "ar" && "explaining_en"} explaining`}>
        <h2>
          {t("what_makes")} <span>{t("us_special")}</span>
          {changeSide === "ar" ? (
            <img className="services_ar" src={image4} alt="" />
          ) : (
            <img className="services_en" src={image3} alt="" />
          )}
        </h2>
        <p>{t("we_gathered_for")}</p>
        <Button name={"pricing_services"} fontSize={22}/>
      </div>
      <div className="image">
        {changeSide === "ar" ? (
          <img src={image2} alt="" />
        ) : (
          <img src={image1} alt="" />
        )}
      </div>
    </div>
  );
};

export default WhatMakesMernan;
