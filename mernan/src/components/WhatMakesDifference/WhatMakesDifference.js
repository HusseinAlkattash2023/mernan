import React, { useContext , useEffect , useState} from "react";

import './WhatMakesDifference.scss';

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

//**import images */
import image4 from '../../assets/images/spiral.png';

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from 'axios';


const WhatMakesDifference = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const [data , setData] = useState([])

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);


  useEffect(() => {
    axios.get(`${BASE_API_URL}/SpecialUs?page=0&pageSize=12`)
      .then(response => setData(response.data.data))
      .catch(error => console.log(error));
  }, [BASE_API_URL]);

  const { t } = useTranslation();



  return (
    <div className="what_makes_difference" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <h2>{t("what_makes_difference")}</h2>
      <div className="differences">
        {
            data && data.map((item)=>(
                <div key={item.id} className={`${item.id === 2 && "active"} difference mx-2`}>
                    <img className="icon" src={`${BASE_API_URL}/${item.icon}`} alt=""/>
                    <div>
                        <h3>{changeSide === "ar" ? item.headerAr : item.headerEn}</h3>
                        <img src={image4} alt=""/>
                    </div>
                    <p>{changeSide === "ar" ? item.textAr : item.textEn}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default WhatMakesDifference;
