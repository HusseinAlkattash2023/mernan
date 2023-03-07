import React, { useContext, useState , useEffect} from "react";

import "./FrequentlyAskedQuestions.scss";

//** state management */
import { StateContext } from "../context/StateProvider";

import { useTranslation } from "react-i18next";

//** import icons from react-icons */
import { BsPlusCircle } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs";

//**import useSelector for base api */
import { useSelector } from "react-redux";

import axios from 'axios';


const FrequentlyAskedQuestions = ({ questions }) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const [data , setData] = useState([])

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    axios.get(`${BASE_API_URL}/FAQ?page=0&pageSize=12`)
      .then(response => setData(response.data.data))
      .catch(error => console.log(error));
  }, [BASE_API_URL]);


  return (
    <div
      className="asked_questions"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("frequently_asked_questions")}</h2>
      <div className="questions">
        <div className="accordion" id="accordionExample">
          {data &&
            data.map((question) => (
              <div className="accordion-item mb-4 question" key={question.id}>
              <h3 className="accordion-header" id={`heading${question.id}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${question.id}`} aria-expanded="false" aria-controls={`collapse${question.id}`}>
                {t("question")} {` #${question.id} `} {changeSide === "ar" ? question.questionAr : question.questionEn}
                </button>
              </h3>
              <div id={`collapse${question.id}`} className="accordion-collapse collapse" aria-labelledby={`collapse${question.id}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  {changeSide === "ar" ? question.answerAr : question.answerEn}
                </div>
              </div>
            </div>
          
            ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;

/**
 * <div className={`${showQuestion && "active"} question mt-5`}>
              <div className="question_">
                <div onClick={ShowQuestion}>
                  {showQuestion ? (
                    <BsDashCircle className="icon" />
                  ) : (
                    <BsPlusCircle className="icon" />
                  )}
                </div>
                <div className="item">
                  <p>{t("question")} #1</p>
                  <p key={item.id}>{t(item.question)}</p>
                </div>
              </div>
              <div className="answer">{showQuestion && <p></p>}</div>
            </div>
 */
