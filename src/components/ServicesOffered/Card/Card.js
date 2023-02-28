import React, { useContext } from "react";

import "./Card.scss";

//** state management */
import { StateContext } from "../../StateProvider";

import { useTranslation } from "react-i18next";

import image1 from "../../../assets/images/spiral1.png";

import Button from "../../Button/Button";

const Card = ({
  image,
  color1,
  color2,
  color3,
  nameAr,
  nameEn,
  descriptionAr,
  descriptionEn,
}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div
      className="card_offered mx-3 my-3"
      style={{
        background: `linear-gradient(1.02deg, ${color1} 3.03%, ${color2} 42.43%, ${color3} 99.23%)`,
      }}
    >
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="part2">
        <div className="title">
          <h3>{changeSide === "ar" ? nameAr : nameEn}</h3>
          <img src={image1} alt="" />
        </div>
        <p>{changeSide === "ar" ? descriptionAr : descriptionEn}</p>
      </div>
      <div className="button">
        <Button
          name={"browse_service"}
          color1={"#312E3A"}
          color2={"#FDFDFE"}
          fontSize={20}
        />
      </div>
    </div>
  );
};

export default Card;
