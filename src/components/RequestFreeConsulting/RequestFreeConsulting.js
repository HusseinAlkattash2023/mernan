import React, { useContext } from "react";

import "./RequestFreeConsulting.scss";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

import image1 from "../../assets/images/request.png";
import image2 from "../../assets/images/request_ar.png";

import Button from "../Button/Button";

const RequestFreeConsulting = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div
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
                <div dir="ltr" style={{ textAlign: "left" }}>
                  <PhoneInput
                    inputStyle={{
                      width:"100%"
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
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="inputState" className="form-label">
                {t("field")}
              </label>
              <select id="inputState" className="form-select">
                <option selected>{t("digital_marketing")}</option>
                <option>...</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="inputAddress" className="form-label">
                {t("company_name")}
              </label>
              <input type="text" className="form-control" id="inputAddress" />
            </div>

            <div className="mt-4">
              <label htmlFor="inputState" className="form-label">
                {t("budget")}
              </label>
              <select id="inputState" className="form-select">
                <option selected>{t("amount")}</option>
                <option>...</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                {t("message")}
              </label>
              <textarea
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
