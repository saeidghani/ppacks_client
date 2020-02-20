import React from 'react';
import { Tooltip } from 'antd';

import StyledRate from '../../../common/styled/StyledRate';
import {
  ImgWrapper,
  ItemCardContainer,
  Brand,
  Title,
  Rating,
  RateWrapper,
  RatingsQuantity,
  PriceContainer,
  CurrentPrice,
  PreviousPrice
} from './ItemCardStyles';
import { setItemCardTitle } from '../../utils/setItemCardTitle';
import {setRateNumber} from '../../utils/setRateNumber';

function ItemCard({ item, width }) {

  return (
      <Tooltip title={item.title}>
    <ItemCardContainer width={width}>
        <Brand>{item.brand.title}</Brand>
        <ImgWrapper pX="4" pY="0.2">
          <img
            src={`/img/backpacks/${item.category.slug}/${item.brand.slug}/${item.coverImage}`}
            alt=""
          />
        </ImgWrapper>
        <Title>{setItemCardTitle(item.title)}</Title>
        <Rating>
          <RateWrapper>
            <StyledRate allowHalf defaultValue={setRateNumber(item.ratingsAverage)} style={{ fontSize: '1.6rem' }}/>
          </RateWrapper>
          <RatingsQuantity>{item.ratingsQuantity}</RatingsQuantity>
        </Rating>
        <PriceContainer>
          <PreviousPrice>{item.previousPrice !== item.currentPrice && item.previousPrice}</PreviousPrice>
          <CurrentPrice>{item.currentPrice}</CurrentPrice>
        </PriceContainer>
    </ItemCardContainer>
      </Tooltip>
  );
}

export default ItemCard;
