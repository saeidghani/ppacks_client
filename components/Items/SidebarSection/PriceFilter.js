import React from 'react';
import { Slider } from 'antd';

import Collapse from '../../../common/comps/Collapse';

function PriceFilter({ onPriceRangeFilter }) {

  const onPriceChange = value => {
    onPriceRangeFilter(value);
  };

  return (
    <Collapse title='Price'>
      <Slider range defaultValue={[0, 600]} min={0} max={600} onChange={onPriceChange}/>
    </Collapse>
  );
}

export default PriceFilter;
