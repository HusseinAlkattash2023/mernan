import React, { useContext } from "react";

import "./Home.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//**import images */
import line from "../../assets/images/line.png";

//**import components */
import Button from "../../components/Button/Button.js";
import Button2 from "./Button/Button";

const Home = ({
  title,
  text,
  image1,
  image2,
  color1,
  color2,
  color3,
  degree,
  degree_ar,
  average,
  average_ar,
  average2,
  average2_ar,
  average3,
  average3_ar,
}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div
      className="home"
      style={{
        background: `linear-gradient(${
          changeSide === "ar" ? degree_ar : degree
        }, ${color1} ${changeSide === "ar" ? average_ar : average}, ${color2} ${
          changeSide === "ar" ? average2_ar : average2
        }, ${color3} ${changeSide === "ar" ? average3_ar : average3})`,
      }}
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <div className="part1">
        <div className="title">
          <h2>{t(`${title}`)}</h2>
          <img
            className={`${changeSide === "ar" && "part_img"}`}
            src={line}
            alt=""
          />
        </div>
        <p>{t(`${text}`)}</p>
        <div className={`${changeSide === "ar" ? "buttons_ar" : "buttons"}`}>
          <Button
            color1={"#39858E"}
            color2={"#FDFDFE"}
            name={"know_more"}
            fontSize={22}
          />
          <Button2 name={"pricing_"} />
        </div>
      </div>
      <div className={`${changeSide === "ar" ? "part2_ar" : "part2"}`}>
        {changeSide === "ar" ? (
          <img src={image1} alt="" />
        ) : (
          <img src={image2} alt="" />
        )}
      </div>
    </div>
  );
};

export default Home;
