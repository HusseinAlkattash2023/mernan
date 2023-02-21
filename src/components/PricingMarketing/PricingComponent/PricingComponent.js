import React, { useContext } from "react";

import "./PricingComponent.scss";

import Rectangular from "../Rectangular/Rectangular";

//** state management */
import { StateContext } from "../../StateProvider";

import { useTranslation } from "react-i18next";

//**import components */
import Button from "../../Button/Button";

const PricingComponent = ({ features, cards, color, state }) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const styles = {
    color: `var(${color})`,
  };

  return (
    <div
      className="pricing_component"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <div className={`${changeSide === "ar" && "section-ar"} section`}>
        <div className="part1">
          {cards &&
            cards.map((card) => (
              <div key={card.id}>
                <Rectangular
                  height={card.height}
                  color={card.color}
                  title={card.title}
                  text={card.text}
                  price={card.price}
                  state={card.state}
                />
              </div>
            ))}
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
              <tr
                key={feature.id}
                className={`${features.number - i <= 0 ? "active" : ""}`}
              >
                <th style={styles}>{t(feature.title)}</th>
                <td style={styles}>
                  {feature.num === 1 ? (
                    <img src={feature.image1} alt="" />
                  ) : (
                    <img src={feature.image2} alt="" />
                  )}
                  <span>
                    {feature.number1} {t(feature.text1)}
                  </span>
                </td>
                <td style={styles}>
                  {!feature.state ? (
                    <img src={feature.image1} alt="" />
                  ) : (
                    <img src={feature.image2} alt="" />
                  )}
                  <span>
                    {feature.number2} {t(feature.text2)}
                  </span>
                </td>
                {state && (
                  <td style={styles}>
                    <img src={feature.image1} alt="" />
                    <span>
                      {feature.number3} {t(feature.text3)}
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="footer" style={styles}>
        <h3>{t("not_sure")}</h3>
        <p>{t("you_can_book")}</p>
        <div>
          <Button name={"ask_for_free"} fontSize={24} />
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;

/**
 * <td className={`${changeSide === "ar" ? "icon_ar" : "icon"}`}>
                  {i >= features.number - features.num ? (
                    <img src={image1} alt="" />
                  ) : (
                    <img src={image2} alt="" />
                  )}
                </td>
                <td className={`${changeSide === "ar" && "group"}`}>
                  <img src={image2} alt="" />
                </td>
 */
/*<Rectangular
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
            state3={true} */
