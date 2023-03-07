import React , {useContext , useState , useEffect} from 'react';

//** import file css */
import './OurValues.scss';


//** import components  */
import Card from './Card/Card';



//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from 'axios';


const OurValues = () => {

    //** this is state to change side rtl and ltr */
    const { changeSide } = useContext(StateContext);

    const { t } = useTranslation();

    const [data , setData] = useState([])

    const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

    useEffect(() => {
      axios.get(`${BASE_API_URL}/OurValues?page=0&pageSize=12`)
        .then(response => setData(response.data.data))
        .catch(error => console.log(error));
    }, [BASE_API_URL]);

    
  return (
    <div className="our_value" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
        <h2 className={changeSide === "ar" ? "head_ar" :"head_en"}>{t("our_values")}</h2>
        <div className="cards row text-center">
          {
            data && data.map((card)=>(
              <div className="col-lg-3 text-center" key={card.id}>
                <Card 
                image={`${BASE_API_URL}/${card.icon}`}
                headerEn={card.headerEn}
                headerAr={card.headerAr}
                descriptionEn={card.descriptionEn}
                descriptionAr={card.descriptionAr}
                />
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default OurValues