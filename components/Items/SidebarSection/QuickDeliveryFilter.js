import React, { useEffect, useState } from 'react';
import { Switch } from 'antd';

import Collapse from '../../../common/comps/Collapse';
import { FilterOptions } from '../../../styles/ItemsStyles/SidebarSectionStyles';


function QuickDeliveryFilter({ onQuickDeliveryFilter }) {

  const [quickDelivery, setQuickDelivery] = useState('not quick');

  const handleQuickDelivery = () => {
    setQuickDelivery(quickDelivery => quickDelivery === 'not quick' ? 'quick' : 'not quick');
  };

  useEffect(() => {
    onQuickDeliveryFilter(quickDelivery);
  }, [quickDelivery]);

  return (
    <Collapse lastOne title='Quick Delivery'>
      <FilterOptions>
        <Switch onChange={() => handleQuickDelivery()}/>
      </FilterOptions>
    </Collapse>
  );
}

export default QuickDeliveryFilter;
