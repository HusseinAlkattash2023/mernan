import React, { useContext, useEffect, useState } from "react";

import "./BenefitsOffered.scss";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

//**import components */
import Card from "./Card/Card";

//**import useSelector for base api */
import { useSelector } from "react-redux";
import axios from "axios";

const BenefitsOffered = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const [data, setData] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/ServiceBenifites?page=0&pageSize=12`)
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  return (
    <div
      className="benefits_offered"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("benefits_offered")}</h2>
      <div className="body">
        <div className="text">
          <p>{t("by_subscribing")}</p>
        </div>
        <div className="cards">
          {data &&
            data.map((benefite) => (
              <div>
                <Card
                  headerEn={benefite.headerEn}
                  headerAr={benefite.headerAr}
                  descriptionEn={benefite.descriptionEn}
                  descriptionAr={benefite.descriptionAr}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsOffered;
