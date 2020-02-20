import {samsoniteBrand} from '../constants/ids';

export const findFitBrandColor = (brandId) => {
  const lightColor = '#fff'
  const darkColor = '#777';

  let fitBrandColor = lightColor;

  if(brandId === samsoniteBrand.id) fitBrandColor = darkColor;

  return fitBrandColor;
};