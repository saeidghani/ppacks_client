import React from 'react';

import Collapse from '../../../common/comps/Collapse';
import { FilterOptions, RateWrapper, RatingRow } from '../../../styles/ItemsStyles/SidebarSectionStyles';

import StyledRate from '../../../common/styled/StyledRate';

function RatingFilter({ onRatingFilter }) {

  const ratings = [
    {
      title:
        <RateWrapper>
          <StyledRate disabled defaultValue={4} style={{ fontSize: '1.6rem' }}/>
        </RateWrapper>,
      number: 4
    },
    {
      title:
        <RateWrapper>
          <StyledRate disabled defaultValue={3} style={{ fontSize: '1.6rem' }}/>
        </RateWrapper>,
      number: 3
    },
    {
      title:
        <RateWrapper>
          <StyledRate disabled defaultValue={2} style={{ fontSize: '1.6rem' }}/>
        </RateWrapper>,
      number: 2
    },
    {
      title:
        <RateWrapper>
          <StyledRate disabled defaultValue={1} style={{ fontSize: '1.6rem' }}/>
        </RateWrapper>,
      number: 1
    }
  ];

  return (
    <Collapse title='Rating'>
      <FilterOptions>
        {ratings.map(rating =>
          <RatingRow onClick={() => onRatingFilter(rating.number)} key={rating.number}>
            {rating.title} & Up
          </RatingRow>
        )}
      </FilterOptions>
    </Collapse>
  );
}

export default RatingFilter;
