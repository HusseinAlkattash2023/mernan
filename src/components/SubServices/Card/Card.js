import React from "react";

import "./Card.scss";

import { useTranslation } from "react-i18next";

import spiral from "../../../assets/images/spiral1.png";

import Button from '../../Button/Button';

const Card = ({ image, title , text}) => {
  const { t } = useTranslation();

  return (
    <div className="card_sub_service">
      <div className="head">
        <img src={image} alt="" />
      </div>
      <div className="body">
        <div>
          <h3>{t(`${title}`)}</h3>
          <img src={spiral} alt="" />
        </div>
        <p>{t(`${text}`)}</p>
      </div>
      <div>
        <Button name={"know_more"}/>
      </div>
    </div>
  );
};

export default Card;
