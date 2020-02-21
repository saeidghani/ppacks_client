import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import sortItems from '../../../common/utils/sortItems';

export default function useFilterAndSortItems(initialItems) {
  const defaultFilter = useSelector(state => state.itemsList.defaultFilter.filter);
  const { shopOnSale } = defaultFilter;

  const [filteredItems, setFilteredItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [order, setOrder] = useState('');
  const [path, setPath] = useState('');

  const handleSortedItems = () => {
    const newSortedItems = sortItems(filteredItems, path, order);
    setSortedItems(sortedItems => [...newSortedItems]);
  };

  useEffect(() => {
    setFilteredItems(initialItems);
  }, [initialItems]);

  useEffect(() => {
    if (filteredItems) {
      handleSortedItems();
    }
  }, [path, order, filteredItems]);

  const setSortOptions = ({ path, order }) => {
    setPath(path);
    setOrder(order);
  };

  const filterCategories = (items, categoryIds) => {
    return items.filter(bag =>
      categoryIds.includes(bag.category._id));
  };
  const filterBrands = (items, brandIds) => {
    return items.filter(bag =>
      brandIds.includes(bag.brand._id));
  };

  const filterPrice = (items, priceRange) => {
    return items.filter(bag =>
      bag.currentPrice > priceRange[0] && bag.currentPrice < priceRange[1]
    );
  };

  const filterOnSale = (items, onSale) => {
    if (onSale === 'isOnSale') {
      return items.filter(bag => bag.currentPrice !== bag.previousPrice);
    } else {
      return items;
    }
  };

  useEffect(() => {
    if (initialItems && shopOnSale) {
      let newFilteredItems = initialItems;
      const onSale = 'isOnSale';
      newFilteredItems = filterOnSale(newFilteredItems, onSale);
      setFilteredItems(newFilteredItems);
    }
  }, [initialItems, shopOnSale]);

  const filterRating = (items, rating) => {
    return items.filter(bag =>
      bag.ratingsAverage > rating
    );
  };

  const filterSize = (items, sizes) => {
    if (sizes.length) {
      return items.filter(bag =>
        bag.sizes.some(s => sizes.includes(s))
      );
    } else {
      return items;
    }
  };

  const filterQuickDelivery = (items, deliveryDuration) => {
    if (deliveryDuration === 'quick') {
      return items.filter(bag => bag.deliveryDuration === '3 hours');
    } else {
      return items;
    }
  };

  const filterItems = (filters) => {
    let newFilteredItems = initialItems;
    (newFilteredItems && filters.length) && filters.map(({ categoryIds, brandIds, priceRange, onSale, rating, sizes, quickDelivery }) => {
      if (categoryIds && categoryIds.length) {
        newFilteredItems = filterCategories(newFilteredItems, categoryIds);
      }
      if (brandIds && brandIds.length) {
        newFilteredItems = filterBrands(newFilteredItems, brandIds);
      }
      if (priceRange) {
        newFilteredItems = filterPrice(newFilteredItems, priceRange);
      }
      if (onSale) {
        newFilteredItems = filterOnSale(newFilteredItems, onSale);
      }
      if (rating) {
        newFilteredItems = filterRating(newFilteredItems, rating);
      }
      if (sizes) {
        newFilteredItems = filterSize(newFilteredItems, sizes);
      }
      if (quickDelivery) {
        newFilteredItems = filterQuickDelivery(newFilteredItems, quickDelivery);
      }
    });
    setFilteredItems(newFilteredItems);
  };

  return { filterItems, setSortOptions, sortedItems };
}