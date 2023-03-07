import React, { useContext } from "react";

import "./Card.scss";

import { useTranslation } from "react-i18next";

//** import images */
import image from "../../../assets/images/one-star.svg";

//** state management */
import { StateContext } from "../../context/StateProvider";

const Card = ({nameAr , nameEn , imageAvatar , descriptionAr , descriptionEn}) => {
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="card_client" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <div className="head">
        <img src={imageAvatar} alt=""/>
        <h3 className={`${changeSide === "ar" ? "name_ar" : "name_en"}`}>
          {changeSide === "ar" ? nameAr : nameEn}
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
        <p>{changeSide === "ar" ? descriptionAr : descriptionEn}</p>
      </div>
    </div>
  );
};

export default Card;
