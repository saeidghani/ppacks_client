import styled, {css} from 'styled-components';
import {sm} from '../../common/constants/screenSizes';
import {ButtonOutline} from '../../common/styled/Button';


export const SidebarContainer = styled.div`
     @media(max-width: ${sm}) {
      margin: 0 auto;
      width: 80%;   
      margin-bottom: 4rem;
      padding: 2rem;
   }  
`;

export const FilterOptions = styled.div`
    padding: ${({pl}) => pl ? pl : '1rem'};    
`;

export const RateWrapper = styled.div`
   padding-bottom: 0.2rem;
   line-height: 1.3rem !important;
   height: 1.3rem !important;  
`;

export const RatingRow = styled.div`
    &:hover{
      transform: scale(1.05);
    }
    cursor: pointer;
    display: flex;
    &>*{
      margin-right: 1rem;    
    }    
    
   ${({selected}) => selected && css`
    color: ${({theme}) => theme.primaryColor} ;
    font-weight: bold;
  `}
`;

export const ApplyFilterButtonWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 3rem;
`;

export const ApplyFilterButton = styled(ButtonOutline)`  
`;
