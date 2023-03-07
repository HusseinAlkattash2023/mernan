import React, { useContext } from "react";

//**import components */
import Card from "../../Card/Card";

//**import images */
import image2 from "../../../assets/images/image2.svg";

//** state management */
import { StateContext } from "../../context/StateProvider";

const ContentMarketing = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);


  return (
    <div dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <Card/>
    </div>
  );
};

export default ContentMarketing;