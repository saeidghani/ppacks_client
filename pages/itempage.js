import React from "react";

import Item from '../components/Item';
import { useRouter } from 'next/router';
import { setItemsListDefaultFilter, removePrevBagReviews } from '../store/actions';


function ItemPage(){
  const router = useRouter();
  const {shopAll, shopOnSale, categoryId, brandId, itemId} = router.query;
  const defaultFilter = {shopAll, shopOnSale, categoryId, brandId, itemId};

  return (
    <div>
      <Item defaultFilter={defaultFilter} />
    </div>
  )
}

ItemPage.getInitialProps = ({store, query}) => {
  const {shopAll, shopOnSale, categoryId, brandId, itemId} = query;
  const defaultFilter = {shopAll, shopOnSale, categoryId, brandId, itemId};
  store.dispatch(setItemsListDefaultFilter(defaultFilter));
  store.dispatch(removePrevBagReviews());
};

export default ItemPage;