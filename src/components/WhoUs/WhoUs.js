import React, { useContext} from "react";

import "./WhoUs.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//**animated numbers */
import {useSpring , animated} from 'react-spring';

//**import icons from react-icons */
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

import image1 from '../../assets/images/Highlight_07.png';
import image2 from '../../assets/images/Highlight_06.png';

import Button from '../../components/Button/Button';

const WhoUs = ({ image_en, image_ar, title, title_, text, button , state}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();



  return (
    <div className="who_us" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <div className="text">
        <h2 className={`${changeSide === "ar" && "active"}`}>
          {t(`${title}`)} <span>{t(`${title_}`)}</span>
          {changeSide === "ar" ? <img className="radiation_ar" src={image1} alt=""/> : <img className="radiation_en" src={image2} alt=""/>}
        </h2>
        <p className="mernan">{t(`${text}`)}</p>
        <div
          className={`${
            changeSide === "ar" ? "active_ar" : "active_en"
          } statistics`}
        >
          <div>
            <h3><Number n={11}/></h3>
            <p>{t("customers_no")}</p>
          </div>
          <div>
            <h3><Number n={10}/></h3>
            <p>{t("members_no")}</p>
          </div>
          <div>
            <h3>
              <Number n={500}/>
            </h3>
            <p>{t("designs_no")}</p>
          </div>
          <div>
            <h3 className="d-flex align-items-center"><span className="mx-2">+</span><Number n={200}/></h3>
            <p>{t("number_of_funded_campaigns")}</p>
          </div>
        </div>
        <div className="buttons">
          <Button name={button} fontSize={22} route={"mernan"}/>
          <button
            className="portfolio is-active"
          >
            <span>{t("portfolio")}</span>
            <span className="arrow__">
              {changeSide === "ar" ? (
                <BsArrowLeft/>
              ) : (
                <BsArrowRight/>
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


const Number = ({n})=>{
  const {number} = useSpring({
    from : {number : 0},
    number : n,
    delay:200,
    config: {mass :1 , tension:10 , friction:10},
  });
  return <animated.div>{number.to((n)=> n.toFixed(0))}</animated.div>
}