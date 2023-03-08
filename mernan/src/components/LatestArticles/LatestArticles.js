import React, { useContext, useState, useEffect } from "react";

import "./LatestArticles.scss";

import moment from "moment";

//**import components */
import Card from "./Card/Card";
import Button from "../Button/Button";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";

const LatestArticles = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  //**fetch all blogs */
  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/Blogs?page=0&pageSize=12`)
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  const fetchData = (id) => {
    axios
      .get(`${BASE_API_URL}/Blogs?page=0&pageSize=12&serviceId=${id}`)
      .then((response) => {
        setData1(response.data.data);
      })
      .catch((error) => console.log(error));

    return data1;
  };

  const [activeTag, setActiveTag] = useState(0);

  const handleTagClick = (index) => {
    setActiveTag(index);
  };

  return (
    <div
      id="blog"
      className="latest_articles"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("latest_articles")}</h2>
      <div className="tags">
        <div
          className={`${activeTag === 0 && "active"} tag`}
          onClick={() => handleTagClick(0)}
        >
          <p>{t("all_categories")}</p>
        </div>
        {data.map((item) => (
          <div
            onClick={() => handleTagClick(item.id)}
            className={`${activeTag === item.id && "active"} tag`}
            key={item.id}
          >
            <p>
              {changeSide === "ar" ? item.Service.nameAr : item.Service.nameEn}
            </p>
          </div>
        ))}
      </div>
      <div className="cards">
        {data &&
          data.map((card) => (
            <div>
              {activeTag === 0 && (
                <div className="cards_articles" key={card.id}>
                  <Card
                    image={`${BASE_API_URL}/${card.image}`}
                    headerEn={card.headerEn}
                    headerAr={card.headerAr}
                    simpleDescriptionAr={card.simpleDescriptionAr}
                    simpleDescriptionEn={card.simpleDescriptionEn}
                    authorAr={card.authorAr}
                    authorEn={card.authorEn}
                    color={"#FFC84D"}
                    date={moment(`${card.createdAt}`)
                      .utc()
                      .format("YYYY-MM-DD")}
                  />
                </div>
              )}
              {activeTag === card.id &&
                fetchData(card.id).map((card) => (
                  <div>
                    <Card
                      image={`${BASE_API_URL}/${card.image}`}
                      headerEn={card.headerEn}
                      headerAr={card.headerAr}
                      simpleDescriptionAr={card.simpleDescriptionAr}
                      simpleDescriptionEn={card.simpleDescriptionEn}
                      authorAr={card.authorAr}
                      authorEn={card.authorEn}
                      color={"#FFC84D"}
                      date={moment(`${card.createdAt}`)
                        .utc()
                        .format("YYYY-MM-DD")}
                    />
                  </div>
                ))}
            </div>
          ))}
      </div>
      <div className="blog">
        <Button name={"view_blog"} />
      </div>
    </div>
  );
};

export default LatestArticles;


