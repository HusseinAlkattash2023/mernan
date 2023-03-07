import React  from 'react';
import PricingComponent from '../../PricingComponent/PricingComponent';

import './EmailMarketing.scss'

const EmailMarketing = ({color}) => {
  
  return (
    <div className="email_marketing">
      <PricingComponent num={1}/>
    </div>
  )
}

export default EmailMarketing;
