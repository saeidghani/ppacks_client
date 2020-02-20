import React, { useState, useEffect } from 'react';

function useTotalPrice(cartItems) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = cartItems.reduce((total, bag) => {
      return total + (Math.round(bag.price*bag.count)*1e2)/1e2;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  return totalPrice;
}

export default useTotalPrice;
