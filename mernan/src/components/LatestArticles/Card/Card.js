import React, { useContext } from "react";

import "./Card.scss";

//** state management */
import { StateContext } from "../../context/StateProvider";

const Card = ({
  image,
  color,
  headerAr,
  headerEn,
  simpleDescriptionAr,
  simpleDescriptionEn,
  authorAr,
  authorEn,
  date
}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const styles = {
    background: `${color}`,
  };

  return (
    <div className="card_article mx-3">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <span style={styles}>{changeSide === "ar" ? headerAr : headerEn}</span>
      </div>
      <div className="text">
        <p>{changeSide === "ar" ? simpleDescriptionAr : simpleDescriptionEn}</p>
      </div>
      <div className="card_footer">
        <span>{changeSide === "ar" ? authorAr : authorEn}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default Card;
