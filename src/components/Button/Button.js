import React, { useContext } from "react";

import './Button.scss';

//**import icons from react-icons */
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";


const Button = ({name , color1 , color2 , fontSize , height , state}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const styles={
    style1:{
      background:`${color1}`,
      height:`${height}`
    },
    style2:{
      color:`${color2}`,
      fontSize:`${fontSize}`
    },
  }

  return (
    <div className="button_component">
      <button style={styles.style1}>
        <span style={styles.style2}>{t(`${name}`)}</span>
        <span style={styles.style2}>
          { !state && (changeSide === "ar" ? (
            <BsArrowLeft/>
          ) : (
            <BsArrowRight/>
          ))}
        </span>
      </button>
    </div>
  );
};

export default Button;
