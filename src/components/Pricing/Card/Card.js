import React, { useContext } from "react";

import "./Card.scss";

//** state management */
import { StateContext } from "../../StateProvider";

import { useTranslation } from "react-i18next";

import image1 from "../../../assets/images/Vector(4).png";
import image2 from "../../../assets/images/check-mark.png";
import image3 from '../../../assets/images/free.png';
import image4 from '../../../assets/images/free_ar.png';

import Button from "../../Button/Button";

const Card = ({
  image,
  state,
  text,
  title,
  name,
  benefit1,
  benefit2,
  benefit3,
  benefit4,
}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const benefits = [benefit1, benefit2, benefit3, benefit4];

  return (
    <div className="card_component">
      <div className={`${changeSide === "ar" ? "image-ar" : "image"}`}>
        <img src={image} alt="" />
      </div>
      <div className={`${changeSide === "ar" ? "free-ar" : "free"}`}>
        {
          !state && (
            changeSide === "ar" ? <img src={image4} alt=""/> : <img src={image3} alt=""/>
          )
        }
      </div>
      <div className="title">
        <h3>{t(`${title}`)}</h3>
        <img src={image1} alt="" />
      </div>
      <div className="text">
        <p>{t(`${text}`)}</p>
      </div>
      {state ? (
        <div className="list">
          <h4>{t("offered_benefits")}</h4>
          <div className="benefits">
            {benefits.map((item) => (
              <div className={`${changeSide === "ar" && "benefit-ar"} benefit`}>
                <img src={image2} alt="" />
                <p>{t(`${item}`)}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="section2">
          <p>{t("you_can_book")}</p>
        </div>
      )}
      <div className="button">
        <Button name={`${name}`} fontSize={"25px"}/>
      </div>
    </div>
  );
};

export default Card;
