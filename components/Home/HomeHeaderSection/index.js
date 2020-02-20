import React from 'react';

import { HomeHeaderSectionContainer } from '../../../styles/HomeStyles/HomeHeaderSectionStyles';
import Banner from './Banner';
import VerticalMenu from './VerticalMenu';


function HomeHeaderSection() {

  return (
    <HomeHeaderSectionContainer>
      <VerticalMenu />
      <Banner />
    </HomeHeaderSectionContainer>
  );
}

export default HomeHeaderSection;

