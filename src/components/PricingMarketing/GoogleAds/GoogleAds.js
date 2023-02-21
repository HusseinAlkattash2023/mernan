import React from 'react';
import PricingComponent from '../PricingComponent/PricingComponent';

const GoogleAds = ({color}) => {
  return (
    <div>
      <PricingComponent
          height={"1025px"}
          price1={"3750"}
          price2={"7500"}
          number={4}
          num={2}
          value1={"create_and_manage"}
          value2={"setting_up_accounts"}
          value3={"set_up_tags"}
          value4={"monthly_reports_and"}
          color={color}
        />
    </div>
  )
}

export default GoogleAds;