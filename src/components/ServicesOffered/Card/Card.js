import React from "react";

import "./Card.scss";

import { useTranslation } from "react-i18next";

import image1 from "../../../assets/images/spiral1.png";

import Button from "../../Button/Button";

const Card = ({ image , color1 , color2 , color3 , title , text}) => {
  const { t } = useTranslation();

  return (
    <div
      className="card_offered mx-3 my-3"
      style={{
        background:
          `linear-gradient(1.02deg, ${color1} 3.03%, ${color2} 42.43%, ${color3} 99.23%)`,
      }}
    >
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="part2">
        <div className="title">
            <h3>{t(`${title}`)}</h3>
            <img src={image1} alt="" />
        </div>
        <p>{t(`${text}`)}</p>
      </div>
      <div className="button">
        <Button name={"browse_service"} color1={"#312E3A"} color2={"#FDFDFE"} fontSize={20}/>
      </div>
    </div>
  );
};

export default Card;
