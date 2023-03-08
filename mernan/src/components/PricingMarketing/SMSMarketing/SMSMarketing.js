import React, { useContext } from "react";

//**import components */
import Card from "../../Card/Card";

//** state management */
import { StateContext } from "../../context/StateProvider";

const SMSMarketing = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);


  return (
    <div dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <Card/>
    </div>
  );
};

export default SMSMarketing;
