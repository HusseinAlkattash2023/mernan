import React, { useContext, useState } from "react";

import "./PricingDevelopment.scss";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

//**import components */
import DevelopingEcommers from "./DevelopingEcommerce/DevelopingEcommerce";
import DevelopingMobile from "./DevelopingMobile/DevelopingMobile";
import DevelopingWebsite from "./DevelopingWebsite/DevelopingWebsite";
import DevelopmentConsulting from "./DevelopmentConsulting/DevelopmentConsulting";
import WebsiteDesign from "./WebsiteDesign/WebsiteDesign";

const PricingDevelopment = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const [activeTag, setActiveTag] = useState(0);

  const { t } = useTranslation();

  const list = [
    "website_development",
    "developing_e-commerce",
    "mobile_application",
    "website_design",
    "marketing_consulting",
  ];

  const handleTagClick = (index) => {
    setActiveTag(index);
  };

  //**it is function for services type pricing */
  const ServicePrices = (i) => {
    if (i === 0) {
      return <DevelopingWebsite />;
    } else if (i === 1) {
      return <DevelopingEcommers />;
    } else if (i === 2) {
      return <DevelopingMobile />;
    } else if (i === 3) {
      return <WebsiteDesign />;
    } else {
      return <DevelopmentConsulting />;
    }
  };

  return (
    <div
      className={`${
        changeSide === "ar" && "pricing_development-ar"
      } pricing_development`}
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("pricing")}</h2>
      <div className="row">
        {list.map((item, i) => (
          <div
            onClick={() => handleTagClick(i)}
            key={item}
            className={`${i === 1 || i === 2 ? "col-4" : "col-3"} ${
              activeTag === i && "active"
            }  ${i === 0 || i === 3 ? "border1" : ""}
            ${i === 2 || i === 4 ? "border2" : ""} price`}
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

export default PricingDevelopment;
