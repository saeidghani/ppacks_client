import React from 'react';

import { BannerContainer } from '../../../styles/HomeStyles/HomeHeaderSectionStyles';
import ImageFade from '../../../common/comps/ImageFade';

const slides = [
  { id: 0, url: "/img/posters/banner/01.jpg" },
  { id: 1, url: "/img/posters/banner/02.jpg" },
  { id: 2, url: "/img/posters/banner/03.jpg" },
  { id: 3, url: "/img/posters/banner/04.jpg" },
  { id: 4, url: "/img/posters/banner/05.jpg" },
  { id: 5, url: "/img/posters/banner/06.jpg" }
];

function Banner() {
  return (
    <BannerContainer>
      <ImageFade slides={slides}/>
    </BannerContainer>
  );
}

export default Banner;