import React, { useContext, useState, useEffect } from "react";

import "./Card.scss";

import line from "../../../assets/images/spiral1.png";
import check from "../../../assets/images/check.png";

//**import icons from react-icons */
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

//** state management */
import { StateContext } from "../../StateProvider";

import { useTranslation } from "react-i18next";


const Card = ({ image, nameAr, nameEn, color , ServiceAchivments}) => {

  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext)

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className="card_service"
      style={{
        backgroundColor: hover ? `${color}` : "#FDFDFE",
        color: hover ? "#FDFDFE" : "#312E3A",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="service" style={{ backgroundColor: `${color}` }}>
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h3>{changeSide === "ar" ? nameAr : nameEn}</h3>
        <img src={line} alt="" />
      </div>
      <div className="body">
        {ServiceAchivments &&
          ServiceAchivments.map((item) =>
                  <div key={item.id}>
                    <img src={check} alt="" width="20px" />
                    <p
                      className={
                        changeSide === "ar" ? "service_ar" : "service_en"
                      }
                    >
                      {changeSide === "ar"
                        ? item.descriptionAr
                        : item.descriptionEn}
                    </p>
                  </div>
                )}
        <Button />
      </div>
    </div>
  );
};

export default Card;

const Button = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="button_service">
      <button>
        <span>{t(`view_service`)}</span>
        <span>
          {changeSide === "ar" ? (
            <BsArrowLeft className="arrow" />
          ) : (
            <BsArrowRight className="arrow" />
          )}
        </span>
      </button>
    </div>
  );
};
