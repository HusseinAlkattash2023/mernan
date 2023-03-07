import React, { useContext, useEffect, useState } from "react";

import "./RequestFreeConsulting.scss";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

import toast, { Toaster } from 'react-hot-toast';


//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

import Button from "../Button/Button";

//**import useSelector for base api */
import { useSelector } from "react-redux";

//**add validation using Yup js */
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import axios from "axios";

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

  const [number , setNumber] = useState("");
  const [country , setCountry] = useState("");

  const { t } = useTranslation();

  const schema = Yup.object().shape({
    firstName: Yup.string().required(`${t("first_name_is_required")}`),
    lastName: Yup.string().required(`${t("last_name_is_required")}`),
    companyName: Yup.string().required(`${t("companyName_is_required")}`),
    field: Yup.string().required(`${t("field_is_required")}`),
    budget: Yup.string().required(`${t("budget_is_required")}`),
    message: Yup.string().required(`${t("message_is_required")}`),
    email: Yup.string().email(`${t("invalid_email")}`).required(`${t("email_is_required")}`),
  });

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  let formData = {
    firstName:values.firstName,
    lastName:values.lastName,
    email:values.email,
    companyName:values.companyName,
    message:values.message,
    serviceId:values.field,
    budgetId:values.budget,
    phone_number:number,
    country:country
  }
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);


  const [data, setData] = useState([]);
  const [dataServices, setDataServices] = useState([]);
  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  //**fetch data budget */
  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/Budgets?page=0&pageSize=12`)
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

   //**fetch data services */
   useEffect(() => {
    axios
      .get(`${BASE_API_URL}/Services?page=0&pageSize=12`)
      .then((response) => setDataServices(response.data.data))
      .catch((error) => console.log(error));
  }, [BASE_API_URL]);

  const onSubmit = (event)=>{ 
     axios.post(`${BASE_API_URL}/FreeConsultations` , formData)
     .then((res)=>{
       if(res.status === 200){
        toast.success(`${t("request")}`)
       } 
     })
     .catch((error)=>{
      console.log(error)
     })

  }
  

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
      <div><Toaster/></div>
      <h2>{t("request_free_consulting")}</h2>
      <div className="body">
        <div className="section">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="div1 row">
              <div className="mb-3 col">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  {t("first_name")}
                </label>
                <input
                   {...register("firstName")}
                  style={styles.style2}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={values.firstName}
                  onChange={(event) =>
                    setValues({ ...values, firstName: event.target.value })
                  }
                />
                <p className="error">{errors.firstName?.message}</p>
               </div>
              <div className="mb-3 col">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  {t("last_name")}
                </label>
                <input
                {...register("lastName")}
                  style={styles.style2}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={values.lastName}
                  onChange={(event) =>
                    setValues({ ...values, lastName : event.target.value })
                  }
                />
                <p className="error">{errors.lastName?.message}</p>
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
                    value={number}
                    onChange={(value , country , e)=>{
                      setCountry(country.name);
                      setNumber(e.target.value)
                    }}
                  />
                  <p className="error"></p>
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
                {...register("email")}
                  style={styles.style2}
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={values.email}
                  onChange={(event) =>
                    setValues({ ...values, email : event.target.value })
                  }
                />
                <p className="error">{errors.email?.message}</p>
               </div>
            </div>
            <div className="mt-2">
              <label htmlFor="inputState" className="form-label">
                {t("field")}
              </label>
              <select
                {...register("field")}
                style={styles.style2}
                id="inputState"
                className="form-select"
                value={values.field}
                  onChange={(event) =>
                    setValues({ ...values, field : event.target.value })
                  }
              >
                <option hidden>{t("choose_field")}</option>
                 {
                  dataServices && dataServices.map((service)=>(
                    <option value={service.id} key={service.id}>{changeSide === "ar" ? service.nameAr : service.nameEn}</option>
                  ))
                 }
              </select>
              <p className="error">{errors.field?.message}</p>
             </div>
            <div className="mt-4">
              <label htmlFor="inputAddress" className="form-label">
                {t("company_name")}
              </label>
              <input
              {...register("companyName")}
                style={styles.style2}
                type="text"
                className="form-control"
                id="inputAddress"
                value={values.companyName}
                  onChange={(event) =>
                    setValues({ ...values, companyName : event.target.value })
                  }
              />
              <p className="error">{errors.companyName?.message}</p>
             </div>

            <div className="mt-4">
              <label htmlFor="inputState" className="form-label">
                {t("budget")}
              </label>
              <select
              {...register("budget")}
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
                    <option value={option.id} key={option.id}>
                      {option.from}
                      {"-"}
                      {option.to}
                    </option>
                  ))}
              </select>
              <p className="error">{errors.budget?.message}</p>
             </div>
            <div className="mt-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                {t("message")}
              </label>
              <textarea
              {...register("message")}
                style={styles.style2}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={values.message}
                onChange={(event) =>
                  setValues({ ...values, message : event.target.value })
                }
                type="text"
              ></textarea>
                <p className="error">{errors.message?.message}</p>
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
