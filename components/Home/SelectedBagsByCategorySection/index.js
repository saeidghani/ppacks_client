import React from 'react';
import { useSelector } from 'react-redux';

import {
  SelectedBagsByCategoryContainer,
  SelectedBagsByCategoryCoverAll,
  StyledTabPane,
  Title
} from '../../../styles/HomeStyles/SelectedBagsByCategorySectionStyles';
import { StyledTabs } from '../../../common/styled/StyledTabs';
import TabPaneContent from './TabPaneContent';
import TransitionSlideUp from '../../../common/comps/TransitionSlideUp';


function callback(key) {
  console.log(key);
}

function SelectedBagsByCategorySection() {
  const selectedBagsByCategory = useSelector(state => state.bag.selectedBagsByCategory.bags);

  return (
    <SelectedBagsByCategoryCoverAll>
      <TransitionSlideUp>
        <SelectedBagsByCategoryContainer>
          <Title>All Categories</Title>
          <StyledTabs defaultActiveKey="0" onChange={callback}>
            {selectedBagsByCategory.map((bags, index) => (
              <StyledTabPane tab={bags.title} key={index}>
                <TabPaneContent categoryId={bags.id} items={bags.content}/>
              </StyledTabPane>
            ))}
          </StyledTabs>
        </SelectedBagsByCategoryContainer>
      </TransitionSlideUp>
    </SelectedBagsByCategoryCoverAll>
  );
}

export default SelectedBagsByCategorySection;
