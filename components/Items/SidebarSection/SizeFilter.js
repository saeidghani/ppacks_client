import React, { useState, useEffect } from 'react';
import { Checkbox } from 'antd';

import Collapse from '../../../common/comps/Collapse';
import { FilterOptions } from '../../../styles/ItemsStyles/SidebarSectionStyles';


function SizeFilter({ onSizeFilter }) {

  const sizes = [
    { title: 'small' },
    { title: 'medium' },
    { title: 'large' }
  ];

  return (
    <Collapse title='Size'>
      <FilterOptions>
        {sizes.map(size =>
          <div key={size.title}><Checkbox onChange={() => onSizeFilter(size.title)}>{size.title}</Checkbox>
          </div>
        )}
      </FilterOptions>
    </Collapse>
  );
}

export default SizeFilter;
