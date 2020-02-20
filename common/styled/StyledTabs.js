import styled from "styled-components";
import { Tabs } from 'antd';


export const StyledTabs = styled(Tabs)`
  .ant-tabs-nav .ant-tabs-tab {
      margin-right: 1rem;
    &.ant-tabs-tab-active {
      background-color: ${({theme}) => theme.primaryColor};
      color: #fff;    
    }

     &:hover {
        background-color: ${({theme}) => theme.primaryColor};
        color: #fff;    
     }

     &:hover .ant-tabs-nav-container {
        border-bottom: 1px solid red;   
     }  

    @media(max-width: ${({theme}) => theme.mdSize}){
      padding: 1rem;
    }  
  } 

  .ant-tabs-nav-container {
      border-bottom: 1px solid ${({theme}) => theme.primaryColor};   
  }  

  .ant-tabs-ink-bar .ant-tabs-ink-bar-animated{
    width: 69px !important;
  } 
`;
