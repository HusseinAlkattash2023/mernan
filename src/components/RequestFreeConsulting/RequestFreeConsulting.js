import React, { useContext } from "react";

import "./RequestFreeConsulting.scss";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

import Button from "../Button/Button";

const RequestFreeConsulting = ({color1 , color2 , color3 , color4 , image1 , image2}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const styles={
    style1:{
      background:`var(${color1})`,
      color:`var(${color2})`,
    },
    style2:{
      border:`3px solid var(${color3})`,
      color:`var(${color4})`,
    }
  }

  return (
    <div
      style={styles.style1}
      className={`${changeSide === "ar" ? "request_ar" : "request_en"} request`}
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("request_free_consulting")}</h2>
      <div className="body">
        <div className="section">
          <form>
            <div className="div1 row">
              <div className="mb-3 col">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  {t("first_name")}
                </label>
                <input
                  style={styles.style2}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-3 col">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  {t("last_name")}
                </label>
                <input
                  style={styles.style2}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
            <div className="div1 mt-2 row">
              <div className="mb-3 col">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  {t("mobile_number")}
                </label>
                <div dir="ltr">
                  <PhoneInput
                    inputStyle={{
                      width:"100%",
                      color:`var(${color4})`,
                      border:`3px solid var(${color4})`
                    }}
                    specialLabel={""}
                    country={"sa"}
                  />
                </div>
              </div>
              <div className="mb-3 col">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  {t("email")}
                </label>
                <input
                style={styles.style2}
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="inputState" className="form-label">
                {t("field")}
              </label>
              <select style={styles.style2} id="inputState" className="form-select">
                <option>{t("digital_marketing")}</option>
                <option>...</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="inputAddress" className="form-label">
                {t("company_name")}
              </label>
              <input style={styles.style2} type="text" className="form-control" id="inputAddress" />
            </div>

            <div className="mt-4">
              <label htmlFor="inputState" className="form-label">
                {t("budget")}
              </label>
              <select style={styles.style2} id="inputState" className="form-select">
                <option>{t("amount")}</option>
                <option>...</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                {t("message")}
              </label>
              <textarea
              style={styles.style2}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="mt-4">
              <Button name={"send_message"} />
            </div>
          </form>
        </div>
        <div className="image">
          {changeSide === "ar" ? (
            <img src={image2} alt="" />
          ) : (
            <img src={image1} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestFreeConsulting;
