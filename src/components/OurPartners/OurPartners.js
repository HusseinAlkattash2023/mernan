import React, { useContext , useEffect , useState} from "react";

import "./OurPartners.scss";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

 //**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";

const OurPartners = ({color1 , color2}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

   //**fetch data budget */
   useEffect(() => {
    axios
      .get(`${BASE_API_URL}/OurPartners?page=0&pageSize=12`)
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  const style = {
    style1:{
      background:`${color1}`
    },
    style2:{
      color:`${color2}`
    }
  }

  return (
    <div style={style.style1} className="our_partners" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <h2 style={style.style2}>{t("our_partners")}</h2>
      <div className="container_">
        <div className="row  row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
           {
            data && data.map((partner)=>(
              <div key={partner.id}>
                <img src={`${BASE_API_URL}/${partner.image}`} alt=""/>
              </div>
            ))
           }
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
