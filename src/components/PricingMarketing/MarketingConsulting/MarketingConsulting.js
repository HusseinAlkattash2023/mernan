import React, { useContext } from "react";

//**import components */
import Card from "../Card/Card";

//**import images */
import image3 from "../../../assets/images/image3.svg";

//** state management */
import { StateContext } from "../../StateProvider";

const MarketingConsulting = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  return (
    <div dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <Card
        image={image3}
        text={"unsure"}
        title={"marketing_consulting"}
        state={false}
        name={"request_free_consulting"}
      />
    </div>
  );
};

export default MarketingConsulting;
