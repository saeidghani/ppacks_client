import styled from 'styled-components';
import {Modal} from 'antd';

export const StyledModal = styled(Modal)`
  .ant-modal-footer{
    div>*:first-child{    
      display: none;
    }
  }
`;