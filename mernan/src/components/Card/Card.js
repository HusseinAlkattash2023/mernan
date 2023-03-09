import React, { useContext, useEffect, useState } from "react";

import "./Card.scss";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

import image1 from "../../assets/images/Vector(4).png";
import image2 from "../../assets/images/check-mark.png";
import image3 from "../../assets/images/free.png";
import image4 from "../../assets/images/free_ar.png";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";

import Button from "../Button/Button";

const Card = ({num}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const [data, setData] = useState([]);

  const [benefits, setBenefits] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/SubService/${num}`)
      .then((response) => {
        setData(response.data.plans);
        setBenefits(response.data.benefits)
      })
      .catch((error) => console.log(error));
  }, [BASE_API_URL, num]);

  return (
    <div className="card_component">
      {data &&
        data.map((card) => (
          <div key={card.id}>
            <div className={`${changeSide === "ar" ? "image-ar" : "image"}`}>
              <img src={`${BASE_API_URL}/${card.icon}`} alt="" />
            </div>
            <div className={`${changeSide === "ar" ? "free-ar" : "free"}`}>
              {!card.isFree &&
                (changeSide === "ar" ? (
                  <img src={image4} alt="" />
                ) : (
                  <img src={image3} alt="" />
                ))}
            </div>
            <div className="title">
              <h3>{changeSide === "ar" ? card.headerAr : card.headerEn}</h3>
              <img src={image1} alt="" />
            </div>
            <div className="text">
              <p>{changeSide === "ar" ? card.descriptionAr : card.descriptionEn}</p>
            </div>
            {card.isFree ? (
              <div className="list">
                <h4>{t("offered_benefits")}</h4>
                <div className="benefits">
                  {benefits &&
                    benefits.map((item) => (
                      <div
                        key={item.id}
                        className={`${
                          changeSide === "ar" && "benefit-ar"
                        } benefit`}
                      >
                        <img src={image2} alt="" />
                        <p>{changeSide === "ar" ? item.headerAr : item.headerEn}</p>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div className="section2">
                <p>{t("you_can_book")}</p>
              </div>
            )}
            <div className="button">
              <Button name={card.isFree ? t("request_price_offer") : t("request_free_consulting")} fontSize={20}/>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
