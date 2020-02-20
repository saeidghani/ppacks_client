import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {ItemInfoImagesContainer, ImgsContainer, ThumbnailWrapper, CoverImgWrapper}
  from '../../../styles/ItemStyles/ItemInfoSectionStyles/ItemInfoImagesStyles';
import {setCurrentCoverImg} from '../../../store/actions';

function ItemInfoImages() {
  const dispatch = useDispatch();
  const onSetCurrentCoverImg = img => dispatch(setCurrentCoverImg(img));
  const bag = useSelector(state => state.bag.bagDetails.bag);
  const currentCoverImg = useSelector(state => state.image.currentCoverImg.image);
  const defaultFilter = useSelector(state => state.itemsList.defaultFilter.filter);


  useEffect(() => {
    const defaultCoverImg = bag.coverImage;
    onSetCurrentCoverImg(defaultCoverImg);
  }, [bag]);

  return (
    <ItemInfoImagesContainer>
      <ImgsContainer>
        {bag.detailImages.map((image, index) => index < 5 ?
          <ThumbnailWrapper onClick={() => onSetCurrentCoverImg(image)} key={image}>
            <img src={`/img/backpacks/${bag.category.slug}/${bag.brand.slug}/${image}`} alt=""/>
          </ThumbnailWrapper> :
          null
        )}
      </ImgsContainer>
      <CoverImgWrapper>
        <img src={`/img/backpacks/${bag.category.slug}/${bag.brand.slug}/${currentCoverImg}`} alt=""/>
      </CoverImgWrapper>
    </ItemInfoImagesContainer>
  );
}

export default ItemInfoImages;

