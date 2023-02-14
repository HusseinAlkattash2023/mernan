import React, { useContext } from "react";

import "./EmailMarketing.scss";

import Rectangular from "../Rectangular/Rectangular";

//** state management */
import { StateContext } from "../../StateProvider";

import { useTranslation } from "react-i18next";

//**import components */
import Button from "../../Button/Button";

//** list of features */
const features = [
  "design_mail",
  "create_automatically",
  "segmentation",
  "perform",
  "email_campaigns",
  "monthly_reports",
  "managing_responses",
];

const EmailMarketing = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="email_marketing">
      <div className="section">
        <div className="part1">
          <Rectangular
            height={"1160px"}
            color={"--color3"}
            title={"start_plan"}
            text={"suitable_for_individuals"}
            price={"5625"}
            state1={true}
          />
          <Rectangular
            height={"1160px"}
            color={"--color9"}
            title={"professional_plan"}
            text={"suitable_for_groups"}
            price={"9375"}
            state={true}
            state2={true}
            state3={true}
          />
        </div>
        <div className="features">
          <h3>{t("features")}</h3>
          {features.map((feature) => (
            <div>
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
