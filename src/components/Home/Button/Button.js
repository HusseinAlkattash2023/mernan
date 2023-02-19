import React , {useContext} from 'react'

import './Button.scss';

//**import icons from react-icons */
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

import { useTranslation } from "react-i18next";

//** state management */
import { StateContext } from "../../StateProvider";


const Button = ({name , state , fontSize}) => {
    //** this is state to change side rtl and ltr */
    const { changeSide } = useContext(StateContext);

    const { t } = useTranslation();

  return (
    <div className={`${changeSide === "ar" && "button_ar"} button_`}>
        <button>
          <span>{t(`${name}`)}</span>
          <span className="arrow_">
          { !state && (changeSide === "ar" ? (
            <BsArrowLeft/>
          ) : (
            <BsArrowRight/>
          ))}
        </span>
        </button>
    </div>
  )
}

export default Button