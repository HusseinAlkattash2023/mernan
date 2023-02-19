import React, { useContext , useState} from "react";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

import "./Pricing.scss";

const Pricing = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const [isActive , setIsActive] = useState(0)

  const tags = ["plans" , "services"];

  const TagIsActive=(index)=>{
    setIsActive(index)
  }

  return (
    <div className="pricing_" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <h2>{t("pricing")}</h2>
      <div className="tags">
        {
            tags.map((tag , i)=>(
                <div className={`${isActive === i && "active"} tag`} onClick={()=> TagIsActive(i)}>
                    <span>{t(tag)}</span>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Pricing;
