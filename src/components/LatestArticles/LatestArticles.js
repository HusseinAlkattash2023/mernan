import React, { useContext, useState, useEffect } from "react";

import "./LatestArticles.scss";

//**import components */
import Card from "./Card/Card";
import Button from "../Button/Button";

//**import images */
import image1 from "../../assets/images/marketing.svg";
import image2 from "../../assets/images/web_development.svg";
import image3 from "../../assets/images/design.svg";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";

const LatestArticles = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const [data, setData] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/Blogs?page=0&pageSize=12`)
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  const [activeTag, setActiveTag] = useState(0);

  const list = ["all_categories", "marketing", "web_development", "design"];

  const handleTagClick = (index) => {
    setActiveTag(index);
  };

  return (
    <div
      className="latest_articles"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("latest_articles")}</h2>
      <div className="tags">
        {list.map((item, i) => (
          <div
            onClick={() => handleTagClick(i)}
            className={`${activeTag === i && "active"} tag`}
            key={i}
          >
            <p>{t(`${item}`)}</p>
          </div>
        ))}
      </div>
      <div className="cards">
        {activeTag === 0 &&
          data &&
          data.map((card) => (
            <div className="cards_articles">
              <Card
                image={`${BASE_API_URL}/${card.image}`}
                headerEn={card.headerEn}
                headerAr={card.headerAr}
                simpleDescriptionAr={card.simpleDescriptionAr}
                simpleDescriptionEn={card.simpleDescriptionEn}
                authorAr={card.authorAr}
                authorEn={card.authorEn}
                color={"#FFC84D"}
              />
            </div>
          ))}
        {activeTag === 1 &&
          data &&
          data.map(
            (card) =>
              card.id === 1 && (
                <div className="cards_articles">
                  <Card
                    image={`${BASE_API_URL}/${card.image}`}
                    headerEn={card.headerEn}
                    headerAr={card.headerAr}
                    simpleDescriptionAr={card.simpleDescriptionAr}
                    simpleDescriptionEn={card.simpleDescriptionEn}
                    authorAr={card.authorAr}
                    authorEn={card.authorEn}
                    color={"#FFC84D"}
                  />
                </div>
              )
          )}
         {activeTag === 2 &&
          data &&
          data.map(
            (card) =>
              card.id === 2 && (
                <div className="cards_articles">
                  <Card
                    image={`${BASE_API_URL}/${card.image}`}
                    headerEn={card.headerEn}
                    headerAr={card.headerAr}
                    simpleDescriptionAr={card.simpleDescriptionAr}
                    simpleDescriptionEn={card.simpleDescriptionEn}
                    authorAr={card.authorAr}
                    authorEn={card.authorEn}
                    color={"#FFC84D"}
                  />
                </div>
              )
          )}
         {activeTag === 3 &&
          data &&
          data.map(
            (card) =>
              card.id === 3 && (
                <div className="cards_articles">
                  <Card
                    image={`${BASE_API_URL}/${card.image}`}
                    headerEn={card.headerEn}
                    headerAr={card.headerAr}
                    simpleDescriptionAr={card.simpleDescriptionAr}
                    simpleDescriptionEn={card.simpleDescriptionEn}
                    authorAr={card.authorAr}
                    authorEn={card.authorEn}
                    color={"#FFC84D"}
                  />
                </div>
              )
          )}
      </div>
      <div className="blog">
        <Button name={"view_blog"} />
      </div>
    </div>
  );
};

export default LatestArticles;
