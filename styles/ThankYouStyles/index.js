import styled from 'styled-components';

export const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 3rem 7rem 3rem;
`;

export const Text = styled.p`
  text-align: center;
`;

export const IconCheckWrapper = styled.div`
  svg {
    padding: 1rem;
    border: 2px solid green;
    border-radius: 50%;  
  }
  font-size: 6rem;
  color: green;
`;

export const IconArrowLeftWrapper = styled.span`
  margin-right: 1rem;
`;