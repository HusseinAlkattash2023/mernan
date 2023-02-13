import React, { useContext, useState } from "react";

import "./Pricing.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

const Pricing = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const [activeTag, setActiveTag] = useState(0);

  const { t } = useTranslation();

  const list = [
    "email_marketing",
    "google_ads",
    "marketing_strategy",
    "content_marketing",
    "search_engine",
    "sms_marketing",
    "marketing_consulting",
  ];

  const handleTagClick = (index) => {
    setActiveTag(index);
  };

  return (
    <div className="pricing" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <h2>{t("pricing")}</h2>
      <div className="row">
        {list.map((item, i) => (
          <div
            onClick={() => handleTagClick(i)}
            key={item}
            className={`${i === 4 ? "col-5" : "col-3"} ${
              activeTag === i && "active"
            }  ${i === 0 || i === 4 ? "border1" : ""}
            ${i === 3 || i === 6 ? "border2" : ""} price`}
          >
            <div className={``}>
              <p>{t(item)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
