import styled from "styled-components";
import {Rate} from "antd";

const StyledRate = styled(Rate)`
    .ant-rate-star:not(:last-child) {
      margin-right: 0.5rem;     
    }  
    
    .ant-rate {
       font-size: 0.1rem !important;    
    }
`;

export default StyledRate;
