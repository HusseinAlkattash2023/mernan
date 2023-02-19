import React, { useContext } from "react";

//**import components */
import Card from "../Card/Card";

//** state management */
import { StateContext } from "../../StateProvider";

//**import images */
import image4 from "../../../assets/images/image4.svg";

const SMSMarketing = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const benefits = [
    {
      id:1,
      benefit:"reach_a_larger"
    },
    {
      id:2,
      benefit:"higher_open_rate"
    },
    {
      id:3,
      benefit:"keep_users"
    }
  ];

  return (
    <div dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <Card
        image={image4}
        text={"want_to_market"}
        title={"sms_marketing"}
        benefits={benefits}
        state={true}
        name={"request_price_offer"}
      />
    </div>
  );
};

export default SMSMarketing;
