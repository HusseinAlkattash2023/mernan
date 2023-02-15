import React, { useContext } from "react";

import "./EmailMarketing.scss";

import Rectangular from "../Rectangular/Rectangular";

//** state management */
import { StateContext } from "../../StateProvider";

import { useTranslation } from "react-i18next";

//**import components */
import Button from "../../Button/Button";

const EmailMarketing = ({
  number,
  num,
  height,
  price1,
  price2,
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7,
  value8,
  value9,
  value10,
  value11,
  value12,
  value13,
}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  //** list of features */
  const features = [
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    value13,
  ];

  return (
    <div className="email_marketing">
      <div className="section">
        <div className="part1">
          <Rectangular
            number={number}
            num={num}
            height={height}
            color={"--color3"}
            title={"start_plan"}
            text={"suitable_for_individuals"}
            price={price1}
            state1={true}
          />
          <Rectangular
            number={number}
            height={height}
            color={"--color9"}
            title={"professional_plan"}
            text={"suitable_for_groups"}
            price={price2}
            state={true}
            state2={true}
            state3={true}
          />
        </div>
        <div className="features">
          <h3>{t("features")}</h3>
          {features.map((feature, i) => (
            <div className={`${number - i <= 0 ? "active" : ""}`}>
              <p>{t(feature)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <h3>{t("not_sure")}</h3>
        <p>{t("you_can_book")}</p>
        <div>
          <Button name={"ask_for_free"} />
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;
