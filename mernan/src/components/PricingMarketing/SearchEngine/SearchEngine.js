import React from 'react';
import PricingComponent from '../../PricingComponent/PricingComponent';

import './SearchEngine.scss';

const SearchEngine = ({color}) => {

  return (
    <div className="search_engine">
      <PricingComponent/>
    </div>
  )
}

export default SearchEngine;