import React, { useContext, useState } from "react";

import "./Services.scss";

//** state management */
import { StateContext } from "../../StateProvider";

import { useTranslation } from "react-i18next";

//**import component */
import EmailMarketing from '../../PricingMarketing/EmailMarketing/EmailMarketing';
import GoogleAds from '../../PricingMarketing/GoogleAds/GoogleAds';
import SearchEngine from '../../PricingMarketing/SearchEngine/SearchEngine';


const Services = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const [isActive, setIsActive] = useState(0);
  const [isActive2, setIsActive2] = useState(0);

  const FieldIsActive = (index) => {
    setIsActive(index);
  };

  const ServiceIsActive = (index) => {
    setIsActive2(index);
  };

  //**function for display pricing */
  const DisplayPricing = ()=>{
    if(isActive2 === 0){
        return <EmailMarketing color={"--color2"}/>
    }else if(isActive2 === 1){
        return <GoogleAds color={"--color2"}/>
    }else{
        return <SearchEngine color={"--color2"}/>
    }
  }

  const fields = [
    "digital_marketing",
    "branding",
    "design",
    "social_media_marketing",
  ];

  const services = ["email_marketing", "google_ads", "search_engine"];

  return (
    <div
      className="section_service"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <div className="section1">
        <h3>{t("choose_field")}</h3>
        <div className={`${changeSide === "ar" ? "fields-ar" : "fields"}`}>
          {fields &&
            fields.map((field, i) => (
              <div
                onClick={() => FieldIsActive(i)}
                key={i}
                className={`${i === 3 && "field1"} ${isActive === i && "active"}
                ${i === 0 && "field2"}
                `}
              >
                <span>{t(field)}</span>
              </div>
            ))}
        </div>
      </div>
      <div className="section2">
        <h3>{t("choose_sub_service")}</h3>
        <div className={`${changeSide === "ar" ? "sub_services_part_ar" : 'sub_services_part'}`}>
          {services &&
            services.map((service, i) => (
              <div
                onClick = {() => ServiceIsActive(i)}
                key={i}
                className={`${i === 0 && "service1"} ${i === 2 && "service2"} ${
                  isActive2 === i && "active"
                }`}
              >
                <span>{t(service)}</span>
              </div>
            ))}
        </div>
      </div>
      <div className="mt-2">{DisplayPricing()}</div>
    </div>
  );
};

export default Services;
