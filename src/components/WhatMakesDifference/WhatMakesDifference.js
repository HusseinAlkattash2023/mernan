import React, { useContext } from "react";

import './WhatMakesDifference.scss';

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//**import images */
import image1 from '../../assets/images/Creativity.png';
import image2 from '../../assets/images/Commitment.png';
import image3 from '../../assets/images/Youthful_Energy.png';
import image4 from '../../assets/images/spiral.png';

const WhatMakesDifference = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const list=[
    {
        image:image1,
        title:"creativity",
        text:"we_deal",
        id:1,
    },
    {
        image:image2,
        title:"commitment",
        text:"we_are_always_committed",
        id:2
    },
    {
        image:image3,
        title:"youthful_energy",
        text:"we_gather_people",
        id:3
    }
  ]


  return (
    <div className="what_makes_difference" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <h2>{t("what_makes_difference")}</h2>
      <div className="differences">
        {
            list && list.map((item)=>(
                <div className={`${item.id === 2 && "active"} difference mx-2`}>
                    <img className="icon" src={item.image} alt=""/>
                    <div>
                        <h3>{t(`${item.title}`)}</h3>
                        <img src={image4} alt=""/>
                    </div>
                    <p>{t(`${item.text}`)}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default WhatMakesDifference;
