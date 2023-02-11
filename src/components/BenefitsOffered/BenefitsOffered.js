import React, { useContext } from "react";

import './BenefitsOffered.scss'

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

const BenefitsOffered = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="benefits_offered" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
        <h2>{t("benefits_offered")}</h2>
    </div>
  );
};

export default BenefitsOffered;
