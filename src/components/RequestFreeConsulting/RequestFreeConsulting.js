import React, { useContext, useEffect, useState } from "react";

import "./RequestFreeConsulting.scss";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

import Button from "../Button/Button";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from "axios";

import * as Yup from "yup";

const RequestFreeConsulting = ({
  color1,
  color2,
  color3,
  color4,
  image1,
  image2,
}) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    field: "",
    companyName: "",
    budget: "",
    message: "",
    email: "",
    number: "",
  });

  // const [number , setNumber] = useState("")

  const { t } = useTranslation();

  const schema = Yup.object().shape({
    firstName: Yup.string().required(`${t("first_name_is_required")}`),
    lastName: Yup.string().required(`${t("last_name_is_required")}`),
    companyName: Yup.string().required(`${t("companyName_is_required")}`),
    field: Yup.string().required(`${t("field_is_required")}`),
    budget: Yup.string().required(`${t("budget_is_required")}`),
    message: Yup.string().required(`${t("message_is_required")}`),
    number: Yup.string().matches(/^\+?[0-9]{10,12}$/, 'Phone number is not valid').required('Phone number is required'),
    email: Yup.string().email(`${t("invalid_email")}`).required(`${t("email_is_required")}`),
  });

  const [errors, setErrors] = useState({});

  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);


  const [data, setData] = useState([]);
  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/Budgets?page=0&pageSize=12`)
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values)
    try {
      await schema.validate(values, { abortEarly: false });
      // submit the form
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);
    }
  };
  

  const styles = {
    style1: {
      background: `var(${color1})`,
      color: `var(${color2})`,
    },
    style2: {
      border: `3px solid var(${color3})`,
      color: `var(${color4})`,
    },
  };

  return (
    <div
      style={styles.style1}
      className={`${changeSide === "ar" ? "request_ar" : "request_en"} request`}
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("request_free_consulting")}</h2>
      <div className="body">
        <div className="section">
          <form onSubmit={handleSubmit}>
            <div className="div1 row">
              <div className="mb-3 col">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  {t("first_name")}
                </label>
                <input
                  style={styles.style2}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={values.firstName}
                  onChange={(event) =>
                    setValues({ ...values, firstName: event.target.value })
                  }
                />
                {errors.firstName && <div style={{color:"red" , fontSize:"14px"}}>{errors.firstName}</div>}
              </div>
              <div className="mb-3 col">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  {t("last_name")}
                </label>
                <input
                  style={styles.style2}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={values.lastName}
                  onChange={(event) =>
                    setValues({ ...values, lastName : event.target.value })
                  }
                />
                {errors.lastName && <div style={{color:"red" , fontSize:"14px"}}>{errors.lastName}</div>}
              </div>
            </div>
            <div className="div1 mt-2 row">
              <div className="mb-3 col">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  {t("mobile_number")}
                </label>
                <div dir="ltr">
                  <PhoneInput
                    inputStyle={{
                      width: "100%",
                      color: `var(${color4})`,
                      border: `3px solid var(${color4})`,
                    }}
                    specialLabel={""}
                    country={"sa"}
                  />
                </div>
              </div>
              <div className="mb-3 col">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  {t("email")}
                </label>
                <input
                  style={styles.style2}
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={values.email}
                  onChange={(event) =>
                    setValues({ ...values, email : event.target.value })
                  }
                />
                {errors.email && <div style={{color:"red" , fontSize:"14px"}}>{errors.email}</div>}
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="inputState" className="form-label">
                {t("field")}
              </label>
              <select
                style={styles.style2}
                id="inputState"
                className="form-select"
                value={values.field}
                  onChange={(event) =>
                    setValues({ ...values, field : event.target.value })
                  }
              >
                <option hidden>{t("choose_field")}</option>
                <option>{t("digital_marketing")}</option>
                <option>...</option>
              </select>
              {errors.field && <div style={{color:"red" , fontSize:"14px"}}>{errors.field}</div>}
            </div>
            <div className="mt-4">
              <label htmlFor="inputAddress" className="form-label">
                {t("company_name")}
              </label>
              <input
                style={styles.style2}
                type="text"
                className="form-control"
                id="inputAddress"
                value={values.companyName}
                  onChange={(event) =>
                    setValues({ ...values, companyName : event.target.value })
                  }
              />
              {errors.companyName && <div style={{color:"red" , fontSize:"14px"}}>{errors.companyName}</div>}
            </div>

            <div className="mt-4">
              <label htmlFor="inputState" className="form-label">
                {t("budget")}
              </label>
              <select
                style={styles.style2}
                id="inputState"
                className="form-select"
                value={values.budget}
                onChange={(event) =>
                  setValues({ ...values, budget : event.target.value })
                }
              >
                <option hidden>{t("choose_budget")}</option>
                {data &&
                  data.map((option) => (
                    <option key={option.id}>
                      {option.from}
                      {"-"}
                      {option.to}
                    </option>
                  ))}
              </select>
              {errors.budget && <div style={{color:"red" , fontSize:"14px"}}>{errors.budget}</div>}
            </div>
            <div className="mt-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                {t("message")}
              </label>
              <textarea
                style={styles.style2}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={values.message}
                onChange={(event) =>
                  setValues({ ...values, message : event.target.value })
                }
              ></textarea>
              {errors.message && <div style={{color:"red" , fontSize:"14px"}}>{errors.message}</div>}
            </div>
            <div className="mt-4" onClick={handleSubmit}>
              <Button name={"send_message"} type={"submit"}/>
              {/* <button type="submit">Submit</button> */}
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
