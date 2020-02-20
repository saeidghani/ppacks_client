import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AutoComplete from '../../AutoComplete';
import { SearchInputContainer, SearchInputCoverAll } from './SearchInputStyles';
import Router from 'next/router';
import { setItemsListDefaultFilter } from '../../../../store/actions';

function SearchInput() {
  const dispatch = useDispatch();
  const onSetItemsListDefaultFilter = (filter) => dispatch(setItemsListDefaultFilter(filter));
  const allBags = useSelector(state => state.bag.allBags.bags);

  let allBagsOptions = [];
  allBags.map(bag => {
    const bagObj = {};
    bagObj.name = bag.title.toLowerCase();
    bagObj.id = bag._id;
    allBagsOptions.push(bagObj);
  });

  const handleSelectItem = itemId => {
    onSetItemsListDefaultFilter({ itemId });
    Router.push('/itemPage', '/item');
  };

  return (
    <SearchInputCoverAll>
      <SearchInputContainer>
        <AutoComplete
          onSelectItem={handleSelectItem}
          options={allBagsOptions}
          width='100%'
        />
      </SearchInputContainer>
    </SearchInputCoverAll>
  );
}

export default SearchInput;