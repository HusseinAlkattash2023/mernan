import React from "react";

import "./Card.scss";

import { useTranslation } from "react-i18next";

import spiral from "../../../assets/images/spiral1.png";

import Button from '../../Button/Button';

const Card = ({ image, title , text , height}) => {
  const { t } = useTranslation();

  const styles = {
    height:`${height}`
  }

  return (
    <div className="card_sub_service col-lg-3 mx-3 my-3" style={styles}>
      <div className="head">
        <img src={image} alt="" />
      </div>
      <div className="body">
        <div className="title">
          <h3>{t(`${title}`)}</h3>
          <img src={spiral} alt="" />
        </div>
        <p>{t(`${text}`)}</p>
      </div>
      <div className="footer_card">
        <Button name={"know_more"} color1={"#39858E"} color2={"#FDFDFE"}/>
      </div>
    </div>
  );
};

export default Card;
