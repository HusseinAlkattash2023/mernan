import React, { useContext } from "react";

//**import components */
import Card from "../Card/Card";

//**import images */
import image2 from "../../../assets/images/image2.svg";

//** state management */
import { StateContext } from "../../StateProvider";

const ContentMarketing = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  return (
    <div dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <Card
        image={image2}
        text={"want_to_market"}
        title={"content_marketing"}
        benefit1={"help_increase"}
        benefit2={"improve_the_quality"}
        benefit3={"differentiate"}
        benefit4={"refine_your_brand_voice"}
        state={true}
        name={"request_price_offer"}
      />
    </div>
  );
};

export default ContentMarketing;