import React, { useContext } from "react";

import "./Card.scss";

import { useTranslation } from "react-i18next";

//** state management */
import { StateContext } from "../../StateProvider";

//**import images */
import spiral from "../../../assets/images/spiral1.png";
import free from "../../../assets/images/free.png";
import free_ar from "../../../assets/images/free_ar.png";

import Button from "../../Button/Button";

const Card = ({ image, title, text, height, state }) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const styles = {
    height: `${height}`,
  };

  return (
    <div className="card_sub_service" style={styles}>
      <div className="head">
        <img className={`${changeSide === "ar" ? "image_ar" : "image"}`} src={image} alt="" />
        {state &&
          (changeSide === "ar" ? (
            <img className="free_ar" src={free_ar} alt="" />
          ) : (
            <img className="free" src={free} alt="" />
          ))}
      </div>
      <div className="body">
        <div className="title">
          <h3>{t(`${title}`)}</h3>
          <img src={spiral} alt="" />
        </div>
        <p>{t(`${text}`)}</p>
      </div>
      <div className="footer_card">
        <Button height={"68px"} fontSize={20} name={state ? "request_free_consulting" : "know_more"} color1={"#2FA4A1"} color2={"#FDFDFE"} />
      </div>
    </div>
  );
};

export default Card;
