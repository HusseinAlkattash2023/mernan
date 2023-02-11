import React , {useContext} from 'react'

import './Button.scss';

//**import icons from react-icons */
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

import { useTranslation } from "react-i18next";

//** state management */
import { StateContext } from "../../StateProvider";


const Button = ({name}) => {
    //** this is state to change side rtl and ltr */
    const { changeSide } = useContext(StateContext);

    const { t } = useTranslation();

  return (
    <div className="button_">
        <button>
          <span>{t(`${name}`)}</span>
          <span className="arrow">
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

export default Button