import React from 'react';
import PricingComponent from '../PricingComponent/PricingComponent';

const EmailMarketing = () => {
  return (
    <div>
      <PricingComponent
          height={"1160px"}
          price1={"5625"}
          price2={"9375"}
          number={7}
          num={3}
          value1={"design_mail"}
          value2={"create_automatically"}
          value3={"segmentation"}
          value4={"perform"}
          value5={"email_campaigns"}
          value6={"monthly_reports"}
          value7={"managing_responses"}
        />
    </div>
  )
}

export default EmailMarketing;
