import React from 'react';
import { Radio } from 'antd';

import {
  PaymentMethodSectionContainer,
  Feature,
  Title,
  ErrorMsg
} from '../../styles/ShippingStyles/paymentMethodSectionStyles';
import { useSelector } from 'react-redux';

function PaymentMethodSection({ onPaymentMethod, paymentMethodError }) {
  const cartItems = useSelector(state => state.cart.cartItems.bags);

  return (
    <PaymentMethodSectionContainer hidden={!cartItems.length}>
      <Feature><Title>payment method:</Title></Feature>
      <Radio disabled>online payment</Radio>
      <Radio onChange={() => onPaymentMethod('onPlace')}>on place payment</Radio>
      <ErrorMsg>
        {paymentMethodError && <div>You must select a payment method</div>}
      </ErrorMsg>
    </PaymentMethodSectionContainer>
  );
}

export default PaymentMethodSection;
