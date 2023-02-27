import React, { useContext , useEffect , useState} from "react";

import "./OurLocations.scss";

import image from "../../assets/images/location.png";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from 'axios';

const OurLocations = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const [data , setData] = useState([])

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios.get(`${BASE_API_URL}/Addresses?page=0&pageSize=12`)
      .then(response => setData(response.data.data))
      .catch(error => console.log(error));
  }, [BASE_API_URL]);


  return (
    <div className="our_locations" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <h2>{t("our_location")}</h2>
      <div className="">
      <div className="locations row text-center">
        {
            data && data.map((location)=>(
                <div kay={location.id} className="location my-2 col-lg-4">
                    <img src={image} alt=""/>
                    <div className={`${changeSide === "ar" ? "text_ar" : "text_en"} text`}>
                      <p>{t("headquarters_place")}{": "}<span>{changeSide === "ar" ? location.locationAr : location.locationEn}</span></p>
                      <p>{t("telephone")}{": "}<span>{location.phoneNumber}</span></p>
                      <p>{t("building_number")}{": "}<span>{location.buildNumber}</span></p>
                    </div>
                </div>
            ))
        }
      </div>
      </div>
    </div>
  );
};

export default OurLocations;
