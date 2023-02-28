import React, { useContext, useState, useEffect } from "react";

import "./AboutMernan.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";

const AboutMernan = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const [data, setData] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/AboutVideo?page=0&pageSize=12`)
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  return (
    <div
      className="about_mernan"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("know_more_about_mernan")}</h2>
      {data &&
        data.map((item) => (
          <div className="data">
            <div className="explaining">
              <p>
                {changeSide === "ar" ? item.descriptionAr : item.descriptionEn}
              </p>
            </div>
            <div className="image">
              <video width="320" height="240" controls>
                <source src={`${BASE_API_URL}/${item.youtube}`} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AboutMernan;
