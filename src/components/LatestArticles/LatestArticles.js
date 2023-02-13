import React, { useContext, useState } from "react";

import "./LatestArticles.scss";

//**import components */
import Card from "./Card/Card";
import Button from '../Button/Button';

//**import images */
import image1 from "../../assets/images/marketing.svg";
import image2 from "../../assets/images/web_development.svg";
import image3 from "../../assets/images/design.svg";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

const LatestArticles = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

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
        {activeTag === 0 && (
          <div className="cards_articles">
            <Card
              image={image1}
              name={"digital_marketing"}
              color={"#FFC84D"}
              text={"seo"}
            />
            <Card
              image={image2}
              name={"web_development"}
              color={"#E7A5C8"}
              text={"how_to_optimize"}
            />
            <Card
              image={image3}
              name={"design"}
              color={"#A59CDE"}
              text={"how_creativity"}
            />
          </div>
        )}
        {activeTag === 1 && (
          <div>
            <Card
              image={image1}
              name={"digital_marketing"}
              color={"#FFC84D"}
              text={"seo"}
            />
          </div>
        )}
        {activeTag === 2 && (
          <div>
            <Card
              image={image2}
              name={"web_development"}
              color={"#E7A5C8"}
              text={"how_to_optimize"}
            />
          </div>
        )}
        {activeTag === 3 && (
          <div>
            <Card
              image={image3}
              name={"design"}
              color={"#A59CDE"}
              text={"how_creativity"}
            />
          </div>
        )}
      </div>
      <div className="blog">
        <Button name={"view_blog"}/>
      </div>
    </div>
  );
};

export default LatestArticles;
