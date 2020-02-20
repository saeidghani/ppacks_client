export const setRateNumber = (number) => {
  let rate;
  if(number===5) rate = 4.5;
  if(number>=4.5 && number<5) rate = 4.5;
  if(number>=4 && number<4.5) rate = 4;
  if(number>=3.5 && number<4) rate = 3.5;
  if(number>=3 && number<3.5) rate = 3;
  if(number>=2.5 && number<3) rate = 2.5;
  if(number>=2 && number<2.5) rate = 2;
  if(number>=1.5 && number<2) rate = 1.5;
  if(number>=1 && number<1.5) rate = 1;
  if(number>=0.5 && number<1) rate = 0.5;
  return rate;
};