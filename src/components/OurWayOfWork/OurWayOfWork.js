import React, { useContext } from "react";

import "./OurWayOfWork.scss";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

//** import components */
import Button from "../../components/Button/Button";

//**import images */
import image from '../../assets/images/Vector(3).png';

const OurWayOfWork = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="way_of_work" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <h2>{t("our_way_of_work")}</h2>
      <div className="body">
        <Card
          title={"customers"}
          option1={"choose"}
          option2={"fill_out"}
          option3={"you_will_be_contacted"}
          name={"view_packages"}
        />
        <div>
          <img src={image} alt=""/>
        </div>
        <Card
          title={"freelancers"}
          option1={"fill_out2"}
          option2={"you_will_be_contacted_72"}
          name={"join_team"}
        />
      </div>
    </div>
  );
};

export default OurWayOfWork;

const Card = ({ title, option1, option2, option3, name }) => {
  const { t } = useTranslation();

  return (
    <div className="card_way">
      <h3>{t(`${title}`)}</h3>
      <div className="options">
        <div>
          <span>1</span>
          <p>{t(`${option1}`)}</p>
        </div>
        <div>
          <span>2</span>
          <p>{t(`${option2}`)}</p>
        </div>
        {option3 && (
          <div>
            <span>3</span>
            <p>{t(`${option3}`)}</p>
          </div>
        )}
      </div>
      <div className="button__">
        <Button name={name}/>
      </div>
    </div>
  );
};
