import React, { useContext } from "react";

import "./Rectangular.scss";

//** state management */
import { StateContext } from "../../StateProvider";

import { useTranslation } from "react-i18next";

//**import images */
import image from "../../../assets/images/Vector(4).png";
import image1 from "../../../assets/images/close.png";
import image2 from "../../../assets/images/check-circle.png";

//**import components */
import Button1 from "../../Button/Button";
import Button2 from "../../Home/Button/Button";

const Rectangular = ({
  height,
  title,
  text,
  price,
  color,
  state,
  state1,
  state2,
  state3,
}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const styles = {
    background: `var(${color})`,
    border: `${state ? "5px solid #312E3A" : "none"}`,
    height:`${height}`
  };

  return (
    <div style={styles} className="rectangular mx-3">
      <h4>{t(`${title}`)}</h4>
      <span>{t(`${text}`)}</span>
      {changeSide === "ar" ? <p>{price} ر.س</p> : <p>{price} SAR</p>}
      <img src={image} alt="" />
      <div className="choose_package">
        {
          state3 ? (
            <Button1
          name={"choose_package"}
          state={true}
          color1={"#39858E"}
          color2={"#FDFDFE"}
          fontSize={22}
        />
          ):(
            <Button2 name={"choose_package"} state={true}/>
          )
        }
      </div>
    </div>
  );
};

export default Rectangular;
