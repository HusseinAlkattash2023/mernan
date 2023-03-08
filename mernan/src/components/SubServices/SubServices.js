import React, { useContext } from "react";

import "./SubServices.scss";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

//**import components */
import Card from "./Card/Card";

//**import useSelector for base api */
import { useSelector } from "react-redux";

 
const SubServices = ({ list }) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  return (
    <div
      className="sub_services"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("sub_services")}</h2>
      <div className="cards row">
        { list && list.map((item) => (
          <div className="col-lg-3 my-3 item" key={item.id}>
            <Card
              image={`${BASE_API_URL}/${item.icon}`}
              descriptionAr={item.descriptionAr}
              descriptionEn = {item.descriptionEn}
              headerAr={item.headerAr}
              headerEn={item.headerEn}
              state={item.state}
              height={`${changeSide === "ar" ? 461 : 525}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubServices;


