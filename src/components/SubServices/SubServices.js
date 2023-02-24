import React, { useContext } from "react";

import "./SubServices.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//**import components */
import Card from "./Card/Card";


 
const SubServices = ({ list }) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

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
              image={item.image}
              title={item.title}
              text={item.text}
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


