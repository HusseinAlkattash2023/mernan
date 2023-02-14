import React, { useContext, useState } from "react";

import "./Pricing.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//**import components */
import EmailMarketing from "./EmailMarketing/EmailMarketing";
import MarketingStrategy from "./MarketingStrategy/MarketingStrategy";
import ContentMarketing from "./ContentMarketing/ContentMarketing";
import MarketingConsulting from './MarketingConsulting/MarketingConsulting';

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

  //**it is function for services type pricing */
  const ServicePrices = (i) => {
    if (i === 0) {
      return <EmailMarketing />;
    } else if (i === 2) {
      return <MarketingStrategy />;
    } else if (i === 3) {
      return <ContentMarketing />;
    } else if (i === 6) {
      return <MarketingConsulting />;
    }
  };

  return (
    <div
      className={`${changeSide === "ar" && "pricing-ar"} pricing`}
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
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
      <div className="prices">
        {
          ServicePrices(activeTag)
        }
      </div>
    </div>
  );
};

export default Pricing;
