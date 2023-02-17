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

  const benefits = [
    {
      id:1,
      benefit:"help_increase"
    },
    {
      id:2,
      benefit:"improve_the_quality"
    },
    {
      id:3,
      benefit:"differentiate"
    },
    {
      id:4,
      benefit:"refine_your_brand_voice"
    }
  ];


  return (
    <div dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <Card
        image={image2}
        text={"want_to_market"}
        title={"content_marketing"}
        benefits={benefits}
        state={true}
        name={"request_price_offer"}
      />
    </div>
  );
};

export default ContentMarketing;