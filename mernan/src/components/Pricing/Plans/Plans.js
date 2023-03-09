import React , {useEffect , useState , useContext} from 'react';

import './Plans.scss';

// import components
import Rectangular from '../../Rectangular/Rectangular';
import Button from '../../Button/Button';

//** state management */
import { StateContext } from "../../context/StateProvider";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";


import { useTranslation } from "react-i18next";



const Plans = () => {

    //** this is state to change side rtl and ltr */
    const { changeSide } = useContext(StateContext);

    const { t } = useTranslation();

  const [dataPlans , setDataPlans] = useState([]);
  const [benefits , setBenefits] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/SubService/withoutSubServiceTable`)
      .then((response) => {
        setDataPlans(response.data.plans);
        setBenefits(response.data.benefits);
      })
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

 

  return (
    <div className="plans">
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
            <h3>{t("features")}</h3>
          <div>
            {benefits.map((benefit, i) => (
              <div
              className="feature"
                key={benefit.id}
              >
                <p  >{changeSide === "ar" ? benefit.headerAr : benefit.headerEn}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer" >
        <h3>{t("not_sure")}</h3>
        <p>{t("you_can_book")}</p>
        <div>
          <Button name={"ask_for_free"} fontSize={24} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Plans