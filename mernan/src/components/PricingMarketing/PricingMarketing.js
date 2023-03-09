import React, { useContext, useState , useEffect} from "react";

import "./PricingMarketing.scss";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

//**import components */
import EmailMarketing from "./EmailMarketing/EmailMarketing";
import MarketingStrategy from "./MarketingStrategy/MarketingStrategy";
import ContentMarketing from "./ContentMarketing/ContentMarketing";
import MarketingConsulting from "./MarketingConsulting/MarketingConsulting";
import SMSMarketing from "./SMSMarketing/SMSMarketing";
import GoogleAds from "./GoogleAds/GoogleAds";
import SearchEngine from "./SearchEngine/SearchEngine";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";
import PricingComponent from "../PricingComponent/PricingComponent";
import Card from "../Card/Card";

const PricingMarketing = ({list}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const [activeTag, setActiveTag] = useState(0);

  const { t } = useTranslation();

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const [data, setData] = useState([]);
  const [plans , setDataPlans] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/SubService?page=0&pageSize=12`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  const fetchData = (id)=> {
    axios
      .get(`${BASE_API_URL}/SubService/${id}`)
      .then((response) => {
        setDataPlans(response.data.plans);
      })
      .catch((error) => console.log(error));
      return plans;
  }



  const handleTagClick = (index) => {
    setActiveTag(index);
  };

  //**it is function for services type pricing */
  const ServicePrices = (i) => {
    if (i === 2) {
      return <EmailMarketing color={"--color5"} />;
    } else if (i === 1) {
      return <GoogleAds color={"--color5"} />;
    } else if (i === 0) {
      return <MarketingStrategy />;
    }
    // } else if (i === 3) {
    //   return <ContentMarketing />;
    // } else if (i === 4) {
    //   return <MarketingConsulting />;
    // } else if (i === 6) {
    //   return <SMSMarketing />;
    // } else {
    //   return <SearchEngine color={"--color5"} />;
    // }
  };

  return (
    <div
      className={`${changeSide === "ar" && "pricing-ar"} pricing`}
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("pricing")}</h2>
      <div className="row">
        {data.map((item , i) => (
          <div
            onClick={() => handleTagClick(i)}
            key={i}
            className={`${i === 1 ? "col-5" : "col-3"} ${
              activeTag === i && "active"
            } price`}
          >
            <p>{changeSide === "ar" ? item.headerAr : item.headerEn}</p>
          </div>
        ))}
      </div>
      <div className="prices">{ 
      ServicePrices(activeTag)
      }</div>
    </div>
  );
};

export default PricingMarketing;


/*
  data.map((item)=>(
          fetchData(item.id).map((plan)=>(
            activeTag === item.id && (
              plan.isPlan ? <PricingComponent num = {item.id}/> : <Card num = {item.id}/>
            )
          ))
        ))
*/