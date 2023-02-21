import React, { useContext } from "react";

import "./PricingComponent.scss";

import Rectangular from "../Rectangular/Rectangular";

//** state management */
import { StateContext } from "../../StateProvider";

import { useTranslation } from "react-i18next";

//**import components */
import Button from "../../Button/Button";

import image1 from "../../../assets/images/close.png";
import image2 from "../../../assets/images/check-circle.png";

const PricingComponent = ({
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
  color
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

  const styles = {
    color:`var(${color})`
  }

  return (
    <div
      className="pricing_component"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
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
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">
                <h3 style={styles}>{t("features")}</h3>
              </th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, i) => (
              <tr className={`${number - i <= 0 ? "active" : ""}`}>
                <th style={styles}>{t(feature)}</th>
                <td className={`${changeSide === "ar" ? "icon_ar" : "icon"}`}>
                  {i >= number - num ? (
                    <img src={image1} alt="" />
                  ) : (
                    <img src={image2} alt="" />
                  )}
                </td>
                <td className={`${changeSide === "ar" && "group"}`}>
                  <img src={image2} alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="footer" style={styles}>
        <h3>{t("not_sure")}</h3>
        <p>{t("you_can_book")}</p>
        <div>
          <Button name={"ask_for_free"} fontSize={24}/>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
