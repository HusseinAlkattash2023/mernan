import React , {useContext , useState} from 'react';

//** state management */
import {StateContext} from '../StateProvider';

//** import translation */
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

//**  import file scss */
import './Header.scss'

//** import logo */
import logo from '../../assets/images/mernan.png';

//**import icons from react-icons */
import { MdTranslate } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

import {Link} from 'react-router-dom';



const Header = () => {

  const { t } = useTranslation();

  //** this is state to change side rtl and ltr */
  const { changeSide , setChangeSide } = useContext(StateContext)

   //** function to change language from arabic to english */
   const EnglishLanguage = ()=>{
    i18next.changeLanguage('en')
    setChangeSide("en");
  }

  //** function to change language from english to arabic */
  const ArabicLanguage = ()=>{
    i18next.changeLanguage('ar')
    setChangeSide("ar");
  }




  return (
    <div className="header" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
        <div className="navbar_">
          <div className="logo">
              <img src={logo} alt=""/>
          </div>
          <div className="nav_">
            <ul className={`${changeSide === "ar" ? "ul_ar" : "ul_en"}`}>
              <li>
                <Link to="/services">{t("services")}</Link>
              </li>
              <li>
                <a href="@">{t("what_makes_difference")}</a>
              </li>
              <li>
                <a href="@">{t("request_free_consulting")}</a>
              </li>
              <li>
                <a href="@">{t("pricing")}</a>
              </li>
              <li>
                <a href="@">{t("blog")}</a>
              </li>
              <li><SwitchLanguage EnglishLanguage={EnglishLanguage} ArabicLanguage={ArabicLanguage}/></li>
              <li>
                <button className="work_with">
                  <span>{t("work_with_us")}</span>
                  <span>
                    {
                      changeSide === "ar" ? <BsArrowLeft className="arrow"/> : <BsArrowRight className="arrow"/>
                    }
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Header;



//** this is function for translation */
const SwitchLanguage = ({ArabicLanguage , EnglishLanguage})=>{

  //**this is state to show translation */
  const [showTranslate , setShowTranslate] = useState(false);

  //** function toggle to show list of translation */
  const ShowTranslation = ()=>{
    setShowTranslate(!showTranslate )
  }


  return(
    <div>
        <div onClick={ShowTranslation}>
          <span><MdTranslate className="translate"/></span>
        </div>
        {
          showTranslate &&
          <div className="en_ar">
            <button onClick={EnglishLanguage}>English</button>
            <button onClick={ArabicLanguage}>Arabic</button>
          </div>
        }
    </div>
  )
}
