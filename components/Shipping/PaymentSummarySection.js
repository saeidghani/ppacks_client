import React from 'react';
import { ButtonOutline } from '../../common/styled/Button';

import { PaymentSummarySectionContainer, Feature, Title } from '../../styles/ShippingStyles/PaymentSummarySectionStyles';
import { useSelector } from 'react-redux';

function PaymentSummarySection({ onSubmitClick }) {
  const cartItems = useSelector(state => state.cart.cartItems.bags);

  return (
    <PaymentSummarySectionContainer hidden={!cartItems.length}>
      <Feature><Title>shipping cost:</Title>free</Feature>
      <ButtonOutline onClick={onSubmitClick}>
        Submit
      </ButtonOutline>
    </PaymentSummarySectionContainer>
  );
}

export default PaymentSummarySection;
