import { useState, useEffect } from 'react';
import useFilterAndSortItems from './useFilterAndSortItems';
import usePaginate from '../../../common/hooks/usePaginate';

export default function useManageItems(initialItems, defaultFilter) {
  const defaultPageSize = 12;
  const [renderedItems, setRenderedItems] = useState();
  const { filterItems, setSortOptions, sortedItems } = useFilterAndSortItems(initialItems, defaultFilter);
  const { handlePageChange, pageSize, minValue, maxValue, currentPage } = usePaginate(renderedItems, defaultPageSize);

  useEffect(() => {
    setRenderedItems(initialItems);
  }, [initialItems]);

  useEffect(() => {
    setRenderedItems(sortedItems);
  }, [sortedItems]);

  const handleFilterItems = (filters) => {
    handlePageChange(1);
    filterItems(filters);
  };

  return {
    handleFilterItems, filterItems, setSortOptions, sortedItems, renderedItems, setRenderedItems,
    handlePageChange, pageSize, minValue, maxValue, currentPage
  };
}