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

  return (
    <div dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <Card
        image={image4}
        text={"want_to_market"}
        title={"sms_marketing"}
        benefit1={"reach_a_larger"}
        benefit2={"higher_open_rate"}
        benefit3={"keep_users"}
        num={3}
        state={true}
        name={"request_price_offer"}
      />
    </div>
  );
};

export default SMSMarketing;
