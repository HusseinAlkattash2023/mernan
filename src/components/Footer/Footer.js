import React , {useState , useContext , useRef} from 'react';

//** state management */
import {StateContext} from '../StateProvider';

//** import file scss*/
import './Footer.scss';


//** translation  */
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

//**import icons from react-icons */
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


const Footer = ({color1 , color2 , image}) => {

    //** this is state to change side rtl and ltr */
    const { changeSide  , setChangeSide } = useContext(StateContext)

    const { t } = useTranslation();

    const ref = useRef();

     //** function to change language from english to arabic or from arabic to english */
    const ChangeLanguage = ()=>{
    if(ref.current.innerText === "اللغة الإنجليزية"){
        i18next.changeLanguage('en')
        setChangeSide("en");
    }else{
        i18next.changeLanguage('ar')
        setChangeSide("ar");
    }
}
    const styles={
        style1:{
            background:`${color1}`,
            color:`${color2}`
        },

        style2:{
            color:`${color2}`
        }
        
    }

    return (
    <div className="footer" style={styles.style1} dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
        <div className="head">
            <div className="logo">
                <img src={image} alt=""/>
            </div>
            <div>
            <button className="work_with">
                <span>{t("work_with_us")}</span>
                <span>
                    {
                        changeSide === "ar" ? <BsArrowLeft/> : <BsArrowRight/>
                    }
                </span>
            </button>
            </div>
        </div>
        <div className="body">
            <div>
                <h3 style={styles.style2}>{t("about_mernan")}</h3>
                <ul style={styles.style2}>
                    <li>
                        <a style={styles.style2} href="@">{t("our_services")}</a>
                    </li>
                    <li>
                        <a style={styles.style2} href="@">{t("what_makes_difference")}</a>
                    </li>
                    <li>
                        <a style={styles.style2} href="@">{t("pricing")}</a>
                    </li>
                    <li>
                        <a style={styles.style2} href="@">{t("blog")}</a>
                    </li>
                    <li>
                        <a style={styles.style2} href="@">{t("frequently_asked_questions")}</a>
                    </li>
                    <li>
                        <a style={styles.style2} href="@">{t("contact_us")}</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 style={styles.style2}>{t("join_us")}</h3>
                <ul>
                    <li>
                        <a style={styles.style2} href="#">{t("join_our_team")}</a>
                    </li>
                    <li>
                        <a style={styles.style2} href="#">{t("our_partners")}</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 style={styles.style2}>{t("more")}</h3>
                <ul>
                    <li>
                        <a style={styles.style2} href="#">{t("terms_and_Conditions")}</a>
                    </li>
                    <li>
                        <a style={styles.style2} href="#">{t("privacy_policy")}</a>
                    </li>
                    <li onClick={ChangeLanguage}>
                        <a style={styles.style2} href="#" ref={ref}>{t("arabic_language")}</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="social">

            <div className="media" style={styles.style2}>
                <a style={styles.style2} href="https://linkedin.com"><FaLinkedin/></a>
                <a style={styles.style2} href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF/></a>
                <a style={styles.style2} href="https://snapchat.com"><FaSnapchatGhost/></a>
                <a style={styles.style2} href="https://tiktok.com"><FaTiktok/></a>
                <a style={styles.style2} href="https://youtube.com"><FaYoutube/></a>
                <a style={styles.style2} href="https://twitter.com"><FaTwitter/></a>
                <a style={styles.style2} href="https://instegram.com"><AiFillInstagram/></a>
                <a style={styles.style2} href="https://behance.com"><FaBehance/></a>
            </div>

            <div className="copy_right">
                <span>{t("copy_right")}</span>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Footer