import styled from 'styled-components';
import {Input} from 'antd';

export const BasicInput = styled(Input)`
  background-color: ${({theme}) => theme.lightSecondaryColor};
  width: ${({width}) => width ? width : '30rem'}; 
  height: ${ ({height}) => height ? height : '4rem'}; 
`;

