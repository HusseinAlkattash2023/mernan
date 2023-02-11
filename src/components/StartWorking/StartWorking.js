import React, { useContext } from "react";

import "./StartWorking.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

import image1 from '../../assets/images/start-work.png';
import image2 from '../../assets/images/start-work-ar.png';

const StartWorking = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();
  return (
    <div
      className="start_working"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("how_to_start")}</h2>
      <div className="part2">
        <div dir="ltr" className={`${changeSide === "ar" && "image_ar"} image`}>
            {/* <img src={image1} alt=""/> */}
            {changeSide === "ar" ? <img src={image2} alt=""/> : <img src={image1} alt=""/>}
        </div>
        <div className={`${changeSide === "ar" && "list_ar"} list`}>
            <div className="text_1">
                <span className="number">1</span>
                <span className="text">{t("choose_the_package")}</span>
            </div>
            <div className="text_2">
                <span className="number">2</span>
                <span className="text">{t("fill_out")}</span>
            </div>
            <div className="text_3">
                <span className="number">3</span>
                <span className="text">{t("you_will_be_contacted")}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StartWorking;
