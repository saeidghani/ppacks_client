import styled from 'styled-components';
import { Drawer } from 'antd';
import {sm} from '../../common/constants/screenSizes';


export const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding-top: 1rem;
    padding-bottom: 1.5rem;
    height: 100%;   
    
     @media(max-width: ${sm}) {
      height: 80%;   
      padding: 1.5rem;
  }
  }  
  
`;



