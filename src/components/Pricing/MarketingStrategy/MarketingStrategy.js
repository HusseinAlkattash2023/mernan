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

  return (
    <div dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <Card
        image={image1}
        text={"do_you_want"}
        title={"marketing_strategy"}
        benefit1={"target_group_analysis"}
        benefit2={"create_buyer_personas"}
        benefit3={"conduct_competitor_research"}
        benefit4={"creative_idea"}
        state={true}
        name={"request_price_offer"}
      />
    </div>
  );
};

export default MarketingStrategy;
