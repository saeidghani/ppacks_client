import React from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';

import { MenuTitle, StyledMenu, StyledMenuItem, StyledSubMenu } from '../../../common/styled/StyledVerticalMenu';
import {
  bussinessCategory,
  cabinzeroBrand,
  deuterBrand,
  everestBrand,
  highSierraBrand,
  jansportBrand,
  jWorldNewYorkBrand,
  kennethColeReactionBrand,
  laptopCategory,
  ospreyBrand,
  samsoniteBrand,
  schoolCategory,
  travelCategory
} from '../../../common/constants/ids';
import { VerticalMenuContainer } from '../../../styles/HomeStyles/HomeHeaderSectionStyles';
import { setItemsListDefaultFilter } from '../../../store/actions';

function VerticalMenu() {
  const dispatch = useDispatch();
  const onSetItemsListDefaultFilter = filter => dispatch(setItemsListDefaultFilter(filter));

  const handleCategoryClick = (category) => {
    const categoryId = category.id;
    onSetItemsListDefaultFilter({ categoryId });
    Router.push({ pathname: `/itemsPage`, query: { categoryId } });
  };

  const handleCategoryAndBrandClick = (category, brand) => {
    const categoryId = category.id;
    const brandId = brand.id;
    onSetItemsListDefaultFilter({ categoryId, brandId });
    Router.push({ pathname: `/itemsPage`, query: { categoryId, brandId } });
  };

  const handleClick = e => {
    //console.log('click', e);
  };

  const categories = [
    {
      title: laptopCategory.title,
      id: laptopCategory.id,
      brands: [
        samsoniteBrand,
        highSierraBrand,
        jansportBrand
      ]
    },
    {
      title: bussinessCategory.title,
      id: bussinessCategory.id,
      brands: [
        samsoniteBrand,
        highSierraBrand,
        kennethColeReactionBrand
      ]
    },
    {
      title: travelCategory.title,
      id: travelCategory.id,
      brands: [
        deuterBrand,
        ospreyBrand,
        cabinzeroBrand
      ]
    },
    {
      title: schoolCategory.title,
      id: schoolCategory.id,
      brands: [
        everestBrand,
        jansportBrand,
        jWorldNewYorkBrand
      ]
    }
  ];

  return (
    <VerticalMenuContainer>
      <StyledMenu onClick={handleClick} style={{ width: 256, height: '100%', paddingTop: '1.5rem' }} mode="vertical">
        <MenuTitle>All Categories</MenuTitle>
        {categories.map(category => (
          <StyledSubMenu
            key={category.title}
            title={<span onClick={() => handleCategoryClick(category)}>{category.title} backpacks</span>}
          >
            {category.brands.map(brand => (
              <StyledMenuItem
                key={brand.id}
              >
                <span onClick={() => handleCategoryAndBrandClick(category, brand)}>{brand.title}</span>
              </StyledMenuItem>
            ))}
          </StyledSubMenu>
        ))}
      </StyledMenu>
    </VerticalMenuContainer>
  );
}

export default VerticalMenu;
