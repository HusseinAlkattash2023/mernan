import React, { useContext } from "react";

import "./StartWorking.scss";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";


const StartWorking = ({ color1, color2, color3 , image1 , image2}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const styles = {
    style1: {
      background: `var(${color1})`,
      color: `var(${color2})`,
    },
    style2: {
      background: `var(${color3})`,
    },
  };

  return (
    <div
      className="start_working"
      style={styles.style1}
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("how_to_start")}</h2>
      <div className="part2">
        <div dir="ltr" className={`${changeSide === "ar" && "image_ar"} image`}>
          {changeSide === "ar" ? (
            <img src={image2} alt="" />
          ) : (
            <img src={image1} alt="" />
          )}
        </div>
        <div className={`${changeSide === "ar" && "list_ar"} list`}>
          <div className="text_1">
            <span style={styles.style2} className="number">
              1
            </span>
            <span className="text">{t("choose_the_package")}</span>
          </div>
          <div className="text_2">
            <span style={styles.style2} className="number">
              2
            </span>
            <span className="text">{t("fill_out")}</span>
          </div>
          <div className="text_3">
            <span style={styles.style2} className="number">
              3
            </span>
            <span className="text">{t("you_will_be_contacted")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartWorking;
