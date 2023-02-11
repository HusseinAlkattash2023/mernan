import React, { useContext} from "react";

import "./WhoUs.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//**import icons from react-icons */
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

//**import useNavigate from react-router-don */
import { useNavigate } from "react-router-dom";

const WhoUs = ({ image_en, image_ar, title, title_, text, button , state}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const navigate = useNavigate();


  const ChangeRoute = () => {
    navigate("/mernan");
  };

  return (
    <div className="who_us" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <div className="text">
        <h2 className={`${changeSide === "ar" && "active"}`}>
          {t(`${title}`)} <span>{t(`${title_}`)}</span>
        </h2>
        <p className="mernan">{t(`${text}`)}</p>
        <div
          className={`${
            changeSide === "ar" ? "active_ar" : "active_en"
          } statistics`}
        >
          <div>
            <h3>11</h3>
            <p>{t("customers_no")}</p>
          </div>
          <div>
            <h3>10</h3>
            <p>{t("members_no")}</p>
          </div>
          <div>
            <h3>500</h3>
            <p>{t("designs_no")}</p>
          </div>
          <div>
            <h3>200+</h3>
            <p>{t("number_of_funded_campaigns")}</p>
          </div>
        </div>
        <div className="buttons">
          <button
            onClick={ChangeRoute}
            className={`${changeSide === "ar" && "who_ar"} who_mernan`}
          >
            <span>{t(`${button}`)}</span>
            <span>
              {changeSide === "ar" ? (
                <BsArrowLeft className="arrow" />
              ) : (
                <BsArrowRight className="arrow" />
              )}
            </span>
          </button>
          <button
            className={`${changeSide === "ar" && "portfolio_ar"} portfolio is-active`}
          >
            <span>{t("portfolio")}</span>
            <span className="arrow">
              {changeSide === "ar" ? (
                <BsArrowLeft className="arrow" />
              ) : (
                <BsArrowRight className="arrow" />
              )}
            </span>
          </button>
        </div>
      </div>
      <div
        className={`${changeSide === "ar" ? "image_ar" : "image_en"} image_`}
      >
        {changeSide === "ar" ? (
          <img className={`${state && "active_image"}`} src={`${image_ar}`} alt="" />
        ) : (
          <img src={`${image_en}`} alt="" />
        )}
      </div>
    </div>
  );
};

export default WhoUs;
