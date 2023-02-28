import React, { useContext } from "react";

import "./Home.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//**import images */
import line from "../../assets/images/line.png";
import lineWhite from "../../assets/images/Vector.svg";

//**import components */
import Button from "../../components/Button/Button.js";
import Button2 from "./Button/Button";

const Home = ({
  state,
  titleAr,
  titleEn,
  descriptionAr,
  descriptionEn,
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
  color_btn1,
  color_btn2,
  color_,
  name
}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const styles = {
    style1: {
      color: `var(${color_})`,
    },
  };

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
          <h2 style={styles.style1}>{changeSide === "ar" ? titleAr : titleEn}</h2>

          {state ? (
            <img
              className={`${changeSide === "ar" && "part_img"}`}
              src={line}
              alt=""
            />
          ) : (
            <img
              className={`${changeSide === "ar" && "part_img_"} line`}
              src={lineWhite}
              alt=""
            />
          )}
        </div>
        <p style={styles.style1}>{changeSide === "ar" ? descriptionAr : descriptionEn}</p>
        <div className={`${changeSide === "ar" ? "buttons_ar" : "buttons"}`}>
          <Button
            color1={color_btn1}
            color2={color_btn2}
            name={name}
            fontSize={22}
          />
          {state && <Button2 name={"pricing_"} />}
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
