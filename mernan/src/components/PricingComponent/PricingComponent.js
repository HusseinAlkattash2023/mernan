import React, { useContext , useEffect , useState} from "react";

 import "./PricingComponent.scss";

import Rectangular from "../Rectangular/Rectangular";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

//**import components */
import Button from "../Button/Button";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";

const PricingComponent = ({color, num}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const [dataPlans, setDataPlans] = useState([]);
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/SubService/${num}`)
      .then((response) => {
        setDataPlans(response.data.plans);
        setBenefits(response.data.benefits)
      })
      .catch((error) => console.log(error));
  }, [BASE_API_URL , num]);

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
          {dataPlans &&
            dataPlans.map((plan) => (
              <div key={plan.id}>
                <Rectangular
                  color={plan.backgroundColor}
                  headerEn={plan.headerEn}
                  headerAr={plan.headerAr}
                  descriptionAr={plan.descriptionAr}
                  descriptionEn={plan.descriptionEn}
                  price={plan.text}
                  id={plan.id}
                  data={benefits}
                />
              </div>
            ))}
        </div>
        <div className="features">
            <h3 style={styles}>{t("features")}</h3>
          <div>
            {benefits.map((benefit, i) => (
              <div
              className="feature"
                key={benefit.id}
              >
                <p style={styles}>{changeSide === "ar" ? benefit.headerAr : benefit.headerEn}</p>
              </div>
            ))}
          </div>
        </div>
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


