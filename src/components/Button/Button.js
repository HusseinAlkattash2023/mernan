import React, { useContext, useState, useEffect } from "react";

import "./Button.scss";

//**import icons from react-icons */
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";


const Button = ({ name, color1, color2, fontSize, height, state , route , type}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();


  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const FontSizeButton = (value) => {
    if ( windowSize >= 1750) {
      return value + 6;
    }
    if (windowSize <= 1100) {
      return value - 4;
    } else {
      return value;
    }
  };
  const HeightButton = (value) =>{
    if(windowSize >= 1900){
      return value + 11
    }else{
      return value;
    }
  }

  const styles = {
    style1: {
      background: `${color1}`,
      height: `${HeightButton(height)}px`,
    },
    style2: {
      color: `${color2}`,
      fontSize: `${FontSizeButton(fontSize)}px`,
    },
  };

  return (
    <div className="button_component">
      <button style={styles.style1} type={type}>
        <span style={styles.style2}>{t(`${name}`)}</span>
        <span style={styles.style2}>
          {!state && (changeSide === "ar" ? <BsArrowLeft /> : <BsArrowRight />)}
        </span>
      </button>
    </div>
  );
};

export default Button;
