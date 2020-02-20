//export const baseURL = `http://localhost:3000/api/v1`;
export const baseURL = `https://desolate-oasis-64190.herokuapp.com/api/v1`;

export const authorizationHeader = token => (
  { 'authorization': `Bearer ${token}` }
);

export const signInApi = baseURL + '/users/login';
export const signUpApi = baseURL + '/users/signup';
export const updateUserApi = baseURL + `/users/updateMe`;

export const allBagsApi = `${baseURL}/bags`;

export const allBagsByBrandApi = brandId =>
  `${baseURL}/bags?limit=24&sort=-createdAt&brand=${brandId}`;

export const allBagsByCategoryApi = categoryId =>
  `${baseURL}/bags?limit=24&sort=-createdAt&category=${categoryId}`;

export const allBagsByCategoryAndBrandApi = (categoryId, brandId) =>
  `${baseURL}/bags?limit=24&sort=-createdAt&category=${categoryId}&brand=${brandId}`;

export const selectedBagsByCategoryApi = categoryId =>
  `${baseURL}/bags?limit=12&sort=-ratingsQuantity&category=${categoryId}`;

export const selectedBagsByBrandApi = brandId =>
  `${baseURL}/bags?limit=8&sort=-ratingsAverage&brand=${brandId}`;

export const bagApi = bagId =>
  `${baseURL}/bags/${bagId}`;

export const allReviewsApi = `${baseURL}/reviews`;

export const reviewApi = reviewId =>
  `${baseURL}/reviews/${reviewId}`;

export const getReviewsByBagIdApi = bagId =>
  `${baseURL}/reviews?bag=${bagId}`;

export const getReviewsByBagIdAndUserIdApi = (bagId, userId) =>
  `${baseURL}/reviews?bag=${bagId}&user=${userId}`;

export const orderApi = (bagId) =>
  `${baseURL}/orders?bag=${bagId}`;

export const allOrdersApi = `${baseURL}/orders`;