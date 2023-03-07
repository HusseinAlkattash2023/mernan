import React, { useContext, useRef, useEffect, useState } from "react";

//** state management */
import { StateContext } from "../context/StateProvider";

//** import file scss*/
import "./Footer.scss";

//** translation  */
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import {NavLink , Link} from 'react-router-dom';

import Button from "../Button/Button";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";

const Footer = ({ color1, color2, image }) => {
  //** this is state to change side rtl and ltr */
  const { changeSide, setChangeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const ref = useRef();

  const [data, setData] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/SocialMedia?page=0&pageSize=12`)
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  //** function to change language from english to arabic or from arabic to english */
  const ChangeLanguage = () => {
    if (ref.current.innerText === "اللغة الإنجليزية") {
      i18next.changeLanguage("en");
      setChangeSide("en");
    } else {
      i18next.changeLanguage("ar");
      setChangeSide("ar");
    }
  };
  const styles = {
    style1: {
      background: `${color1}`,
      color: `${color2}`,
    },

    style2: {
      color: `${color2}`,
    },
  };

  return (
    <div
      className="footer"
      style={styles.style1}
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <div className="head">
        <div className="logo">
          <img src={image} alt="" />
        </div>
        <div>
          <Button name={"work_with_us"} fontSize={22} height={60}/>
        </div>
      </div>
      <div className="body">
        <div>
          <h3 style={styles.style2}>{t("about_mernan")}</h3>
          <ul style={styles.style2}>
            <li>
              <NavLink style={styles.style2} to="">
                {t("our_services")}
              </NavLink>
            </li>
            <li>
              <NavLink style={styles.style2} to="">
                {t("what_makes_difference")}
              </NavLink>
            </li>
            <li>
              <NavLink style={styles.style2} to="">
                {t("pricing")}
              </NavLink>
            </li>
            <li>
              <NavLink style={styles.style2} to="">
                {t("blog")}
              </NavLink>
            </li>
            <li>
              <NavLink style={styles.style2} to="">
                {t("frequently_asked_questions")}
              </NavLink>
            </li>
            <li>
              <NavLink style={styles.style2} to="">
                {t("contact_us")}
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 style={styles.style2}>{t("join_us")}</h3>
          <ul>
            <li>
              <NavLink style={styles.style2} to="">
                {t("join_our_team")}
              </NavLink>
            </li>
            <li>
              <NavLink style={styles.style2} to="">
                {t("our_partners")}
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 style={styles.style2}>{t("more")}</h3>
          <ul>
            <li>
              <NavLink style={styles.style2} to="">
                {t("terms_and_Conditions")}
              </NavLink>
            </li>
            <li>
              <NavLink style={styles.style2} to="">
                {t("privacy_policy")}
              </NavLink>
            </li>
            <li onClick={ChangeLanguage}>
              <NavLink style={styles.style2} to="" ref={ref}>
                {t("arabic_language")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="social">
        <div className="media" style={styles.style2}>
            {
                data && data.map(social =>(
                    <Link to={social.link} key={social.id}>
                        <img src={`${BASE_API_URL}/${social.image}`} alt=""/>
                    </Link>
                ))
            }
        </div>
        <div className="copy_right">
          <span>{t("copy_right")}</span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
