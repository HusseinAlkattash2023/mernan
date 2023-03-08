import React, { useContext, useEffect, useState } from "react";

import "./OurServices.scss";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

//** import components */
import Card from "./Card/Card.js";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";


const OurServices = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const [data, setData] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios.get(`${BASE_API_URL}/Services?page=0&pageSize=12`)
      .then(response => setData(response.data.data))
      .catch(error => console.log(error));
  }, [BASE_API_URL]);

  return (
    <div
      className="our_services"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("our_services")}</h2>

      <div className="cards">
        <div className="row">
          {data &&
            data.map((card) => (
              <div className="col-lg-4 my-3" key={card.id}>
                <Card
                  image={`${BASE_API_URL}/${card.icon}`}
                  nameAr={card.nameAr}
                  nameEn={card.nameEn}
                  color={card.colorIcon}
                  ServiceAchivments={data[card.id - 1].ServiceAchivments}
                  route={card.nameEn}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
