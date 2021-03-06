import styled from 'styled-components';
import { Tabs } from 'antd';

import {xs} from '../../common/constants/screenSizes';

const { TabPane } = Tabs;


export const StyledTabPane = styled(TabPane)`
`;

export const SelectedBagsByCategoryCoverAll = styled.div`
   padding: 0 2rem;
   
    @media(max-width: ${xs}) {
     padding: 0;
  }
`;

export const SelectedBagsByCategoryContainer = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  width: 20rem;
  border-bottom: 1px solid lightgray;
  
  @media(max-width: ${xs}) {  
   margin-left: 2rem;
  }
`;

export const TabPaneContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
   grid-gap: 1rem;
   height: 100%;
  
   & > * {
    min-height: 20rem;    
   }
   
   @media(max-width: ${xs}) {
   justify-items: center; 
  }
`;

export const ItemCardWrapper = styled.div` `;