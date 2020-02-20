import styled, {css} from 'styled-components';
import {Input} from 'antd';

const {TextArea} = Input;

export const StyledTextArea = styled(TextArea)`
  ${({alert}) => alert && css`
      border: 1px solid red;
   `}
`;