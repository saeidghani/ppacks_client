import * as ids from '../../common/constants/ids';

export const findCategoryById = categoryId => {
  let category;
  if (categoryId === ids.laptopCategory.id) category = 'Laptop';
  if (categoryId === ids.bussinessCategory.id) category = 'Bussiness';
  if (categoryId === ids.travelCategory.id) category = 'Travel';
  if (categoryId === ids.schoolCategory.id) category = 'School';

  return category;
};

export const findBrandById = brandId => {
  let brand;
  if (brandId === ids.samsoniteBrand.id) brand = 'Samsonite';
  if (brandId === ids.highSierraBrand.id) brand = 'High sierra';
  if (brandId === ids.jansportBrand.id) brand = 'Jansport';
  if (brandId === ids.kennethColeReactionBrand.id) brand = 'Kenneth Cole Reaction';
  if (brandId === ids.ospreyBrand.id) brand = 'Osprey';
  if (brandId === ids.cabinzeroBrand.id) brand = 'Cabinzero';
  if (brandId === ids.deuterBrand.id) brand = 'Deuter';
  if (brandId === ids.jWorldNewYorkBrand.id) brand = 'JWorld New York';
  if (brandId === ids.everestBrand.id) brand = 'Everest';

  return brand;
};
