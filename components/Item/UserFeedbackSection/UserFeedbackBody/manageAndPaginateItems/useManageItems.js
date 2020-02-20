import { useState } from 'react';
import moment from 'moment';

import sortItems from '../../../../../common/utils/sortItems';

export default function useManageItems(initialItems) {
  const [managedItems, setManagedItems] = useState(initialItems);


  const manageItems = (option) => {
    let sortedItems;
    const initialItemsCopy = [...initialItems];
    if (option) {
      const { path, order } = option;
      sortedItems = sortItems(initialItemsCopy, path, order);
    }
    setManagedItems(sortedItems);
  };
  return { manageItems, managedItems };
};
