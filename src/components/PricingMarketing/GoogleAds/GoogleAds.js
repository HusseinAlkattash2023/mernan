import React from 'react';
import PricingComponent from '../../PricingComponent/PricingComponent';

import './GoogleAds.scss';

const GoogleAds = ({color}) => {

  return (
    <div className="google_ads">
      <PricingComponent
         num={2}
        />
    </div>
  )
}

export default GoogleAds;