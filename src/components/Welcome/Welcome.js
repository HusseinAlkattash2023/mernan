import React , {useContext} from 'react'

import './Welcome.scss';

//** import images */
import image1 from '../../assets/images/heading1.png';
import image2 from '../../assets/images/Highlight_05.png';
import image3 from '../../assets/images/Highlight_ar.png';

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

//** import components */
import Button from '../Button/Button';


const Welcome = () => {

    //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="welcome" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
        <div className="explain">
        <h2 className={`${changeSide === "ar" && "active"}`}>
          {t("who_is_mernan,")} <span>{t("welcome")}</span>
          {changeSide === "ar" ? <img className="radiation_ar" src={image3} alt=""/> : <img className="radiation_en" src={image2} alt=""/>}
        </h2>
        <p>{t("your_access")}</p>
        <Button name={"know_more"} fontSize={22}/>
        </div>
        <div className="image">
          <img src={image1} alt=""/>
        </div>
    </div>
  )
}

export default Welcome