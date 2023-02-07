import React , {useContext} from  'react'

import './Card.scss';

import line from '../../../assets/images/spiral1.png';
import check from '../../../assets/images/check.png';

//**import icons from react-icons */
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

//** state management */
import { StateContext } from "../../StateProvider";

import { useTranslation } from "react-i18next";


const Card = ({image , title , item1 , item2 , item3}) => {

  const list =[item1 , item2 , item3]

  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="card_service col-lg-3 mx-3 my-3">
        <img className="service" src={image} alt=""/>
        <div className="title">
          <h3>{t(`${title}`)}</h3>
          <img src={line} alt=""/>
        </div>
        <div className="body">
          {
            list.map((item)=>(
              <div key={item}>
                <img src={check} alt="" width="20px"/>
                <p className={changeSide === "ar" ? "service_ar" : "service_en"}>{t(`${item}`)}</p>
              </div>
            ))
          }
          <Button/>
        </div>
    </div>
  )
}

export default Card


const Button = ()=>{

  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return(
    <div className="button_service">
      <button>
        <span>{t(`view_service`)}</span>
        <span>
          {changeSide === "ar" ? (
            <BsArrowLeft className="arrow" />
          ) : (
            <BsArrowRight className="arrow" />
          )}
        </span>
      </button>
    </div>
  )
}