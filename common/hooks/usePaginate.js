import { useEffect, useState } from 'react';

export default function usePaginate(items, defaultPageSize) {
  const [pageSize, setPageSize] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(defaultPageSize);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    let pageSize;
    if (items) pageSize = Math.min(defaultPageSize, items.length);
    setPageSize(pageSize);
    setMaxValue(pageSize);
  }, [items]);


  const handlePageChange = value => {
    const minVal = (value - 1) * (pageSize || defaultPageSize);
    const maxVal = Math.min(value * pageSize, items.length);
    setMinValue(minVal);
    setMaxValue(maxVal);
    setCurrentPage(value);
  };
  return { handlePageChange, pageSize, minValue, maxValue, currentPage };
}