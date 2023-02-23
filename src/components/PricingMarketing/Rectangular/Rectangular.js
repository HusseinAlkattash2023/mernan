import React, { useContext } from "react";

import "./Rectangular.scss";

//** state management */
import { StateContext } from "../../StateProvider";

import { useTranslation } from "react-i18next";

//**import images */
import image from "../../../assets/images/Vector(4).png";

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
  list
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
      <img className="line" src={image} alt="" />

      <div className="icons">
        {
          list && list.map((item)=>(
            <div key={list.id} className={`icon${item.id}`}>
              <img src={item.image} alt=""/>
              <span>{item.number}{" "}{t(item.text)}</span>
            </div>
          ))
        }
      </div>
      <div className="choose_package">
        {
          state ? (
            <Button1
          name={"choose_package"}
          state={true}
          color1={"#39858E"}
          color2={"#FDFDFE"}
          fontSize={20}
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
