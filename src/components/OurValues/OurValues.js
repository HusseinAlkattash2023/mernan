import React , {useContext} from 'react';

//** import file css */
import './OurValues.scss';


//** import components  */
import Card from './Card/Card';

//** import images */
import image1 from '../../assets/images/flexibilty.png';
import image2 from '../../assets/images/giving.png';
import image3 from '../../assets/images/Uniqueness.png';
import image4 from '../../assets/images/Credibility.png';


//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";


const OurValues = () => {

    //** this is state to change side rtl and ltr */
    const { changeSide } = useContext(StateContext);

    const { t } = useTranslation();

    const cards = [
      {
        id:1,
        image:image1,
        title:"flexibility",
        text:"we_are_able"
      },
      {
        id:2,
        image:image2,
        title:"giving",
        text:"we_do_everything"
      },
      {
        id:3,
        image:image3,
        title:"uniqueness_and_distinction",
        text:"we_create"
      },
      {
        id:4,
        image:image4,
        title:"credibility_and_transparency",
        text:"communicate"
      },
    ]

    
  return (
    <div className="our_value" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
        <h2 className={changeSide === "ar" ? "head_ar" :"head_en"}>{t("our_values")}</h2>
        <div className="cards row">
          {
            cards && cards.map((card)=>(
              <div className="col-lg-3 text-center" key={card.id}>
                <Card image={card.image} title={card.title} text={card.text}/>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default OurValues