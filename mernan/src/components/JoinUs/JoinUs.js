import React , {useContext} from 'react'

import './JoinUs.scss';

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

//** import components */
import Button from '../Button/Button';

//** import images */
import image1 from '../../assets/images/heading3.png';
import image2 from '../../assets/images/Highlight_06.png';
import image3 from '../../assets/images/Highlight_07.png';

const JoinUs = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="join_us" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <div className="image">
          <img src={image1} alt=""/>
      </div>
      <div className="explaining">
        <h2>
          {t("exiting_to")}
          {" "}
          <span>{t("join_us?")}</span>
          {changeSide === "ar" ? (
            <img className="services_ar" src={image3} alt="" />
          ) : (
            <img className="services_en" src={image2} alt="" />
          )}
        </h2>
        <p>{t("moment")}</p>
        <Button name={"join_the_team"} fontSize={22}/>
      </div>
    </div>
  )
}

export default JoinUs;