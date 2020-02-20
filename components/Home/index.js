import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
} from '../../common/constants/ids';
import { fetchAllBags, fetchSelectedBagsByBrand, fetchSelectedBagsByCategory } from '../../store/actions';

import { HomeContainer } from '../../styles/HomeStyles/index';
import HomeHeaderSection from './HomeHeaderSection';
import SelectedBagsByBrandSection from './SelectedBagsByBrandSection';
import SelectedBagsByCategorySection from './SelectedBagsByCategorySection';
import ShopAllSection from './ShopAllSection';
import ShopOnSaleSection from './ShopOnSaleSection';
import Spinner from '../../common/comps/Spinner';
import withErrorHandler from '../../common/hoc/withErrorHandler';

function Home() {
  const dispatch = useDispatch();
  const onfetchAllBags = () => dispatch(fetchAllBags());
  const onfetchSelectedBagsByCategory = useCallback(
    category => dispatch(fetchSelectedBagsByCategory(category)),
    []
  );
  const onfetchSelectedBagsByBrand = useCallback(
    brand => dispatch(fetchSelectedBagsByBrand(brand)),
    []
  );
  const allBags = useSelector(state => state.bag.allBags.bags);
  const selectedBagsByCategory = useSelector(
    state => state.bag.selectedBagsByCategory.bags
  );
  const selectedBagsByBrand = useSelector(
    state => state.bag.selectedBagsByBrand.bags
  );

  useEffect(() => {
    onfetchAllBags();
    const categories = [
      laptopCategory,
      bussinessCategory,
      travelCategory,
      schoolCategory
    ];
    if (selectedBagsByCategory.length < categories.length) {
      categories.map(category => onfetchSelectedBagsByCategory(category));
    }

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
    if (selectedBagsByBrand.length < brands.length) {
      brands.map(brand => onfetchSelectedBagsByBrand(brand));
    }
  }, []);

  if (
    !allBags.length ||
    !selectedBagsByCategory.length ||
    !selectedBagsByBrand.length
  )
    return <Spinner />;

  return (
    <HomeContainer>
      <HomeHeaderSection />
      <ShopAllSection />
      <SelectedBagsByBrandSection />
      <ShopOnSaleSection />
      <SelectedBagsByCategorySection />
    </HomeContainer>
  );
}

export default withErrorHandler(Home);

//.item.item${$}*30
