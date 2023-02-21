import React, { useContext } from "react";

import "./Card.scss";

import { useTranslation } from "react-i18next";

//** import images */
import image from "../../../assets/images/one-star.svg";

//** state management */
import { StateContext } from "../../StateProvider";

const Card = () => {
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="card_client" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <div className="head">
        <div className="avatar"></div>
        <h3 className={`${changeSide === "ar" ? "name_ar" : "name_en"}`}>
          {t("salim_saleh_company_name")}
        </h3>
      </div>
      <div className="rating">
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
      </div>
      <div className="body">
        <p>{t("i_dealt_with")}</p>
      </div>
    </div>
  );
};

export default Card;
