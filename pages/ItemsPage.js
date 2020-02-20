import React from 'react';

import Items  from '../components/Items';
import { useRouter } from 'next/router';
import { setItemsListDefaultFilter } from '../store/actions';

function ItemsPage() {
  const onSetItemsListDefaultFilter = filter => dispatch(setItemsListDefaultFilter(filter));
  const router = useRouter();
  const {shopAll, shopOnSale, categoryId, brandId} = router.query;
  const defaultFilter = {shopAll, shopOnSale, categoryId, brandId};

  return (
    <div>
      <Items defaultFilter={defaultFilter}/>
    </div>
  );
}

ItemsPage.getInitialProps = ({store, query}) => {
  const {shopAll, shopOnSale, categoryId, brandId} = query;
  const defaultFilter = {shopAll, shopOnSale, categoryId, brandId};
  store.dispatch(setItemsListDefaultFilter(defaultFilter));
};

export default ItemsPage;