import React, { useContext } from "react";

import "./Rectangular.scss";

//** state management */
import { StateContext } from "../../StateProvider";

import { useTranslation } from "react-i18next";

import image from '../../../assets/images/Vector(4).png';

const Rectangular = ({ title, text, price, color , state}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const styles = {
    background:`var(${color})`,
    border:`${state ? "5px solid #312E3A" : "none"}`
  }

  return (
    <div style={styles} className="rectangular mx-3">
      <h4>{t(`${title}`)}</h4>
      <span>{t(`${text}`)}</span>
      {
        changeSide === "ar" ?  <p>{price} ر.س</p> : <p>{price} SAR</p>
      }
      <img src={image} alt=""/>
    </div>
  );
};

export default Rectangular;
