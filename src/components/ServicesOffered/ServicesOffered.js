import React, { useContext , useEffect , useState } from "react";

import "./ServicesOffered.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

import Card from "./Card/Card";


//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";


const ServicesOffered = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const [data, setData] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/Services?page=0&pageSize=12`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  return (
    <div
      className="services_offered"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("services_offered")}</h2>
      <div className="row cards">
        {data &&
          data.map((service) => (
            <div key={service.id} className="col-lg-6">
              <Card
                image={`${BASE_API_URL}/${service.image}`}
                color1={service.color1}
                color2={service.color2}
                color3={service.color3}
                nameEn={service.nameEn}
                nameAr={service.nameAr}
                descriptionEn={service.descriptionEn}
                descriptionAr={service.descriptionAr}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServicesOffered;
