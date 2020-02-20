import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from 'antd';

import {
  S4,
  ImgWrapper,
  ItemColorsContainer,
  ColorImgsContainer
}
  from '../../../../styles/ItemStyles/ItemInfoSectionStyles/ItemInfoDetailsStyles';
import { setCurrentCoverImg } from '../../../../store/actions';

function ItemColors({ selectedColor, onSelectedColorClick }) {
  const dispatch = useDispatch();
  const onSetCurrentCoverImg = img => dispatch(setCurrentCoverImg(img));
  const bag = useSelector(state => state.bag.bagDetails.bag);

  const handleColorClick = colorImage => {
    const { colorImageName, colorImageId } = colorImage;
    onSetCurrentCoverImg(colorImageId);
    onSelectedColorClick({
      colorName: colorImageName,
      colorId: colorImageId
    });
  };

  return (
    <ItemColorsContainer>
      <S4>Colors:</S4>
      <ColorImgsContainer>
        {bag.colorImages.map((color, index) => index < 5 ?
          <ImgWrapper sm
                      selected={selectedColor.colorName === color.colorImageName}
                      onClick={() => handleColorClick(color)}
                      key={index}
          >
            <Tooltip title={color.colorImageName}>
              <img src={`/img/backpacks/${bag.category.slug}/${bag.brand.slug}/${color.colorImageId}`} alt=""/>
            </Tooltip>
          </ImgWrapper> :
          null
        )}
      </ColorImgsContainer>
    </ItemColorsContainer>
  );
}

export default ItemColors;

