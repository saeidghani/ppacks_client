import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';

import Collapse from '../../../common/comps/Collapse';
import { FilterOptions } from '../../../styles/ItemsStyles/SidebarSectionStyles';
import {
  laptopCategory,
  bussinessCategory,
  travelCategory,
  schoolCategory
} from '../../../common/constants/ids';

function CategoryFilter({ onCategoryFilter }) {

  const categories = [
    laptopCategory,
    bussinessCategory,
    travelCategory,
    schoolCategory
  ];

  return (
    <Collapse title='Category'>
      <FilterOptions>
        {categories.map(category =>
          <div key={category.id}><Checkbox
            onChange={() => onCategoryFilter(category.id)}>{category.title}</Checkbox></div>
        )}
      </FilterOptions>
    </Collapse>
  );
}

export default CategoryFilter;
