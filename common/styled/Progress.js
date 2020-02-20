import styled from 'styled-components';
import {Progress as AntdProgress} from 'antd';

const Progress = styled(AntdProgress)`
    .ant-progress-inner, .ant-progress-bg {
        border-radius: 0;    
        height: 2rem !important;
    }
    
    .ant-progress-bg {
        background-color: ${({theme}) => theme.primaryColor};        
    }
`;

export default Progress;