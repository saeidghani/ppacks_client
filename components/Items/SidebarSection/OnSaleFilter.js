import React, { useState, useEffect } from 'react';
import { Switch } from 'antd';

import Collapse from '../../../common/comps/Collapse';
import { FilterOptions } from '../../../styles/ItemsStyles/SidebarSectionStyles';
import { useSelector } from 'react-redux';


function OnSaleFilter({ onSaleFilter }) {
  const defaultFilter = useSelector(state => state.itemsList.defaultFilter.filter);
  const { shopOnSale } = defaultFilter;
  const [onSale, setOnSale] = useState('isNotOnSale');

  const handleOnSaleFilter = () => {
    setOnSale(onSale => onSale === 'isNotOnSale' ? 'isOnSale' : 'isNotOnSale');
  };

  useEffect(() => {
    if(shopOnSale) {
      handleOnSaleFilter();
    }
  }, [shopOnSale]);

  useEffect(() => {
    onSaleFilter(onSale);
  }, [onSale]);

  return (
    <Collapse title='On Sale' show={shopOnSale}>
      <FilterOptions>
        <Switch defaultChecked={shopOnSale} onChange={() => handleOnSaleFilter()}/>
      </FilterOptions>
    </Collapse>
  );
}

export default OnSaleFilter;
