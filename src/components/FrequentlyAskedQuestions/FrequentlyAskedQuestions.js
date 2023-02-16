import React, { useContext, useState } from "react";

import "./FrequentlyAskedQuestions.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//** import icons from react-icons */
import { BsPlusCircle } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs";

const FrequentlyAskedQuestions = ({ questions }) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const [showQuestion, setShowQuestion] = useState(false);


  const ShowQuestion = () => {
    setShowQuestion(!showQuestion);
    }


  return (
    <div
      className="asked_questions"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("frequently_asked_questions")}</h2>
      <div className="questions">
        {questions &&
          questions.map((item) => (
            <div className={`${showQuestion && "active"} question mt-5`}>
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
          ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
