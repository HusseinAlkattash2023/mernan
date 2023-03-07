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
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  //**fetch all blogs */
  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/Blogs?page=0&pageSize=12`)
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  //**fetch blogs of digital marketting */
  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/Blogs?page=0&pageSize=12&serviceId=1`)
      .then((response) => setData1(response.data.data))
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);


   //**fetch blogs of web development */
  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/Blogs?page=0&pageSize=12&serviceId=2`)
      .then((response) => setData2(response.data.data))
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);


   //**fetch blogs of desigen */
  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/Blogs?page=0&pageSize=12&serviceId=3`)
      .then((response) => setData3(response.data.data))
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
                date={moment(`${card.createdAt}`).utc().format('YYYY-MM-DD')}
              />
            </div>
          ))}
        {activeTag === 1 &&
          data1 &&
          data1.map(
            (card) =>(
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
                    date={moment(`${card.createdAt}`).utc().format('YYYY-MM-DD')}
                  />
                </div>
              )
          )}
         {activeTag === 2 &&
          data2 &&
          data2.map(
            (card) =>(
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
                    date={moment(`${card.createdAt}`).utc().format('YYYY-MM-DD')}
                  />
                </div>
              )
          )}
         {activeTag === 3 &&
          data3 &&
          data3.map(
            (card) =>(
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
                    date={moment(`${card.createdAt}`).utc().format('YYYY-MM-DD')}
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
