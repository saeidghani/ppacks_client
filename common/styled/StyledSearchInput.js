import styled from 'styled-components';
import {Input} from "antd";

const {Search} = Input;

export const StyledSearchInput = styled(Search)`
    .ant-btn-primary{
        background-color: ${({theme}) => theme.primaryColor};
        border-color:  ${({theme}) => theme.primaryColor};
    } 
`;

