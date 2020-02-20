import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

import {
  SidebarContainer,
  ApplyFilterButton,
  ApplyFilterButtonWrapper
} from '../../../styles/ItemsStyles/SidebarSectionStyles';

import { useSelector } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import BrandFilter from './BrandFilter';
import OnSaleFilter from './OnSaleFilter';
import PriceFilter from './PriceFilter';
import QuickDeliveryFilter from './QuickDeliveryFilter';
import RatingFilter from './RatingFilter';
import SizeFilter from './SizeFilter';

function SidebarSection({ onFilter }) {
  const defaultFilter = useSelector(state => state.itemsList.defaultFilter.filter);
  const { categoryId: categoryFilter, brandId: brandFilter, shopOnSale } = defaultFilter;
  const [categoryIds, setCategoryIds] = useState();
  const [brandIds, setBrandIds] = useState();
  const [priceRange, setPriceRange] = useState();
  const [onSale, setOnSale] = useState();
  const [rating, setRating] = useState();
  const [sizes, setSizes] = useState();
  const [quickDelivery, setQuickDelivery] = useState();


  const handleApplyFilter = () => {
    let newFilters = [];
    if(categoryIds) newFilters.push({categoryIds});
    if(brandIds) newFilters.push({brandIds});
    if(priceRange) newFilters.push({priceRange});
    if(onSale) newFilters.push({onSale});
    if(rating) newFilters.push({rating});
    if(sizes) newFilters.push({sizes});
    if(quickDelivery) newFilters.push({quickDelivery});
    onFilter(newFilters);
  };

  const handleCategoryFilter = (categoryId) => {
    if (categoryIds && categoryIds.includes(categoryId)) {
      setCategoryIds(categoryIds => categoryIds.filter(c => c !== categoryId));
    } else {
      if(!categoryIds) {
        setCategoryIds([categoryId]);
      } else {
        setCategoryIds([...categoryIds, categoryId]);
      }
    }
  };

  const handleBrandFilter = (brandId) => {
    if(brandIds && brandIds.includes(brandId)) {
      setBrandIds(brandIds => brandIds.filter(b => b !== brandId));
    } else {
      if(!brandIds) {
        setBrandIds([brandId]);
      } else {
        setBrandIds([...brandIds, brandId]);
      }
    }
  };

  const handleOnSaleFilter = (filter) => {
    setOnSale(filter);
  };

  const handleRatingFilter = (filter) => {
    setRating(filter);
  };

  const handleSizeFilter = (sizeTitle) => {
    if (sizes && sizes.includes(sizeTitle)) {
      setSizes(sizes => sizes.filter(s => s !== sizeTitle))
    } else {
      if(!sizes) {
        setSizes([sizeTitle]);
      } else {
        setSizes([...sizes, sizeTitle]);
      }
    }
  };

  const handleQuickDeliveryFilter = (filter) => {
    setQuickDelivery(filter);
  };

  return (
    <SidebarContainer>
      <Card>
        {!categoryFilter && <CategoryFilter onCategoryFilter={(categoryId) => handleCategoryFilter(categoryId)}/>}
        {!brandFilter && <BrandFilter onBrandFilter={(brandId) => handleBrandFilter(brandId)}/>}
        <PriceFilter onPriceRangeFilter={(filter) => setPriceRange(filter)} />
        <OnSaleFilter onSaleFilter={(filter => handleOnSaleFilter(filter))} />
        <RatingFilter onRatingFilter={(filter => handleRatingFilter(filter))} />
        <SizeFilter onSizeFilter={(filter => handleSizeFilter(filter))} />
        <QuickDeliveryFilter onQuickDeliveryFilter={(filter => handleQuickDeliveryFilter(filter))} />
        <ApplyFilterButtonWrapper>
          <ApplyFilterButton onClick={handleApplyFilter}>
            Apply Filter
          </ApplyFilterButton>
        </ApplyFilterButtonWrapper>
      </Card>
    </SidebarContainer>
  );
}

export default SidebarSection;
