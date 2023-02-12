import React, { useContext } from "react";

import "./OurPreviousWork.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//**import images */
import image1 from "../../assets/images/previous-work1.png";
import image2 from "../../assets/images/previous-work2.png";
import image3 from "../../assets/images/previous-work3.png";
import image4 from "../../assets/images/previous-work4.png";

const OurPreviousWork = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const list = [image1, image2, image3, image4];
  return (
    <div
      className="previous-work"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("previous_work")}</h2>

      <div className="row">
        {list.map((image) => (
          <div className="col-xl-6 col-lg-6 col-xxl-6">
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPreviousWork;
