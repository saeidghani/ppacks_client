import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  BrandTitle,
  BagTitle,
  ItemInfoDetailsContainer
}
  from '../../../../styles/ItemStyles/ItemInfoSectionStyles/ItemInfoDetailsStyles';
import { addToCart } from '../../../../store/actions';
import ItemSizes from './ItemSizes';
import ItemColors from './ItemColors';
import ItemCounter from './ItemCounter';
import ItemProtectionTypes from './ItemProtectionTypes';
import ItemPrices from './ItemPrices';
import ItemDeliveryDuration from './ItemDeliveryDuration';
import ItemReviews from './ItemReviews';
import ItemRating from './ItemRating';
import AddToCart from './AddToCart';

function ItemInfoDetails() {
  const dispatch = useDispatch();
  const onAddToCart = bag => dispatch(addToCart(bag));
  const bag = useSelector(state => state.bag.bagDetails.bag);

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState({});
  const [selectedProtectionType, setSelectedProtectionType] = useState('');
  const [itemCount, setItemCount] = useState(1);
  const [finalBagPrice, setFinalBagPrice] = useState(false);


  useEffect(() => {
    if (bag) {
      const defaultSize = bag.sizes.length === 3 ? bag.sizes[1] : bag.sizes[0];
      const defaultColor = {};
      const { colorImageName, colorImageId } = bag.colorImages[0];
      defaultColor.colorName = colorImageName;
      defaultColor.colorId = colorImageId;
      const defaultProtectionType = bag.protectionTypes[0];
      setSelectedSize(defaultSize);
      setSelectedColor(defaultColor);
      setSelectedProtectionType(defaultProtectionType);
      const finalBagPrice = bag.currentPrice + defaultProtectionType.additionalPrice;
      setFinalBagPrice(finalBagPrice);
    }
  }, [bag]);

  const handleSelectedColorClick = color => {
    const {colorName, colorId} = color;
    setSelectedColor({colorName, colorId});
  };

  const handleDecreaseItemCount = () => {
    setItemCount(itemCount =>
      itemCount !== 1 ? itemCount - 1 : 1
    );
  };

  const handleIncreaseItemCount = () => {
    setItemCount(itemCount =>
      itemCount !== 10 ? itemCount + 1 : itemCount
    );
  };

  const handleSelectedProtectionType = protectionType => {
    setSelectedProtectionType(protectionType);
    const finalBagPrice = bag.currentPrice + protectionType.additionalPrice;
    setFinalBagPrice(finalBagPrice);
  };

  const handleAddToCartClick = () => {
    const itemCart = {
      bagId: (bag._id),
      productId: bag.productId,
      title: bag.title,
      slug: bag.slug,
      category: bag.category,
      brand: bag.brand,
      coverImage: bag.coverImage,
      deliveryDuration: bag.deliveryDuration,
      size: selectedSize,
      color: {
        colorName: selectedColor.colorName,
        colorId: selectedColor.colorId
      },
      count: itemCount,
      protectionType: selectedProtectionType ? selectedProtectionType : bag.protectionTypes[0],
      price: finalBagPrice
    };
    onAddToCart(itemCart);
  };

  return (
    <ItemInfoDetailsContainer>
      <BrandTitle>{bag.brand.title}</BrandTitle>
      <BagTitle>{bag.title}</BagTitle>
      <ItemRating/>
      <ItemReviews/>
      <ItemSizes
        selectedSize={selectedSize}
        onSelectedSizeClick={size => setSelectedSize(size)}/>
      <ItemColors
        selectedColor={selectedColor}
        onSelectedColorClick={color => handleSelectedColorClick(color)}
      />
      <ItemCounter
        itemCount={itemCount}
        onIncreaseItemCountClick={handleIncreaseItemCount}
        onDecreaseItemCountClick={handleDecreaseItemCount}
      />
      <ItemProtectionTypes
        selectedProtectionType={selectedProtectionType}
        onSelectedProtectionTypeClick={type => handleSelectedProtectionType(type)}
      />
      <ItemDeliveryDuration/>
      <ItemPrices
        finalBagPrice={finalBagPrice}
      />
      <AddToCart
        onAddToCartClick={handleAddToCartClick}
      />
    </ItemInfoDetailsContainer>
  );
}

export default ItemInfoDetails;

