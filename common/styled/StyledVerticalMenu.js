import styled from 'styled-components';
import { Menu } from 'antd';

const { SubMenu } = Menu;
const MenuItem = Menu.Item;

export const StyledMenu = styled(Menu)`
  border: solid 1px ${({theme}) => theme.lightGrey };  
  margin-right: -0.6rem !important;
`;

export const StyledSubMenu = styled(SubMenu)`
  height: 5rem;
  padding: 0 1rem;
`;

export const StyledMenuItem = styled(MenuItem)`
 color: ${({theme}) => theme.grey};
 height: 2.5rem !important; 
 line-height: 2.5rem !important;
 margin: 1rem 0.3rem !important;
`;

export const MenuTitle = styled.h3`
  color: #666;
  text-align: center;
  padding: 2rem 0;
  border-bottom: 1px solid lightgray;
  width: 75%;
  margin: 0 auto;
  margin-bottom: 1.5rem;
`;