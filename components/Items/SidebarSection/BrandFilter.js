import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';

import Collapse from '../../../common/comps/Collapse';
import { FilterOptions } from '../../../styles/ItemsStyles/SidebarSectionStyles';
import {
  samsoniteBrand,
  highSierraBrand,
  jansportBrand,
  kennethColeReactionBrand,
  ospreyBrand,
  cabinzeroBrand,
  deuterBrand,
  jWorldNewYorkBrand,
  everestBrand
} from '../../../common/constants/ids';

function BrandFilter({ onBrandFilter }) {

  const brands = [
    samsoniteBrand,
    highSierraBrand,
    jansportBrand,
    kennethColeReactionBrand,
    ospreyBrand,
    cabinzeroBrand,
    deuterBrand,
    jWorldNewYorkBrand,
    everestBrand
  ];

  return (
    <Collapse title='Brand'>
      <FilterOptions>
        {brands.map(brand =>
          <div key={brand.title}>
            <Checkbox onChange={() => onBrandFilter(brand.id)}>
              {brand.title}
            </Checkbox>
          </div>
        )}
      </FilterOptions>
    </Collapse>
  );
}

export default BrandFilter;
