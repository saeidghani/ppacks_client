import React from 'react';
import { Slider } from 'antd';

import Collapse from '../../../common/comps/Collapse';

function PriceFilter({ onPriceRangeFilter }) {

  const onPriceChange = value => {
    onPriceRangeFilter(value);
  };

  return (
    <Collapse title='Price'>
      <Slider range defaultValue={[20, 50]} min={0} max={500} onChange={onPriceChange}/>
    </Collapse>
  );
}

export default PriceFilter;
