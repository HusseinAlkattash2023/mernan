import React, { useContext } from "react";

//**import components */
import Card from "../Card/Card";

//**import images */
import image1 from "../../../assets/images/image1.svg";

//** state management */
import { StateContext } from "../../StateProvider";

const MarketingStrategy = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const benefits = [
    {
      id:1,
      benefit:"target_group_analysis"
    },
    {
      id:2,
      benefit:"create_buyer_personas"
    },
    {
      id:3,
      benefit:"conduct_competitor_research"
    },
    {
      id:4,
      benefit:"creative_idea"
    }
  ];

  return (
    <div dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <Card
        image={image1}
        text={"do_you_want"}
        title={"marketing_strategy"}
        benefits={benefits}
        state={true}
        name={"request_price_offer"}
      />
    </div>
  );
};

export default MarketingStrategy;
