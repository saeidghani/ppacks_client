import { useState, useEffect } from 'react';
import useManageItems from './useManageItems';
import usePaginate from '../../../../../common/hooks/usePaginate';

export default function useManageAndPaginateItems(initialItems) {
  const defaultPageSize = 5;
  const [renderedItems, setRenderedItems] = useState();
  const { manageItems, managedItems } = useManageItems(initialItems);
  const { handlePageChange, pageSize, minValue, maxValue, currentPage } = usePaginate(renderedItems, defaultPageSize);

  useEffect(() => {
    setRenderedItems(initialItems);
  }, [initialItems]);

  useEffect(() => {
    setRenderedItems(managedItems);
  }, [managedItems]);

  const handleManageItems = (filter) => {
    handlePageChange(1);
    manageItems(filter);
  };

  return {
    manageItems, handleManageItems, managedItems, renderedItems, setRenderedItems,
    handlePageChange, pageSize, minValue, maxValue, currentPage
  };
}