import React, { useContext } from "react";

import "./Subscribe.scss";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

import image from "../../assets/images/subscripe.svg";

const Subscribe = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="subscribe" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <div className="part1">
        <p>
          {t("subscribe")} 
        </p>
        <span>{t("world_of_marketing")}</span>
      </div>
      <div className={`${changeSide === "ar" ? "part2_ar" : "part2_en"} part2`}>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="container">
          <div className="row height-100">
            <div className="col-md-8">
              <div className="search position-relative">
                <input className="form-control" placeholder={t("your_email")} />
                <button className="btn btn-primary position-absolute">
                    {t("subscribe_now")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
