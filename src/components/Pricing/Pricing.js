import React, { useContext, useState } from "react";

import "./Pricing.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//**import components */
import EmailMarketing from "./EmailMarketing/EmailMarketing";
import MarketingStrategy from "./MarketingStrategy/MarketingStrategy";
import ContentMarketing from "./ContentMarketing/ContentMarketing";
import MarketingConsulting from "./MarketingConsulting/MarketingConsulting";
import SMSMarketing from "./SMSMarketing/SMSMarketing";
import GoogleAds from "./GoogleAds/GoogleAds";

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
    "marketing_consulting",
    "search_engine",
    "sms_marketing",
  ];

  const handleTagClick = (index) => {
    setActiveTag(index);
  };

  //**it is function for services type pricing */
  const ServicePrices = (i) => {
    if (i === 0) {
      return (
        <EmailMarketing
          height={"1160px"}
          price1={"5625"}
          price2={"9375"}
          number={7}
          num={3}
          value1={"design_mail"}
          value2={"create_automatically"}
          value3={"segmentation"}
          value4={"perform"}
          value5={"email_campaigns"}
          value6={"monthly_reports"}
          value7={"managing_responses"}
        />
      );
    } else if (i === 1) {
      return (
        <EmailMarketing
          height={"1025px"}
          price1={"3750"}
          price2={"7500"}
          number={4}
          num={2}
          value1={"design_mail"}
          value2={"create_automatically"}
          value3={"segmentation"}
          value4={"perform"}
        />
      );
    } else if (i === 2) {
      return <MarketingStrategy />;
    } else if (i === 3) {
      return <ContentMarketing />;
    } else if (i === 4) {
      return <MarketingConsulting />;
    } else if (i === 6) {
      return <SMSMarketing />;
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
            className={`${i === 5 ? "col-5" : "col-3"} ${
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
      <div className="prices">{ServicePrices(activeTag)}</div>
    </div>
  );
};

export default Pricing;
