import React, { useContext } from "react";

import './SubServices.scss';

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";


//**import components */
import Card from './Card/Card';

//**import images */
import image1 from '../../assets/images/email_marketing.png';

const SubServices = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="sub_services"  dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
        <h2>{t("sub_services")}</h2>
        <div className="cards">
            <Card image={image1}/>
        </div>
    </div>
  );
};

export default SubServices;
