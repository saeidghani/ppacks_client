import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import {
  ShippingContainer,
  ReceiveDetails
} from '../../styles/ShippingStyles';
import ReceiverSection from './ReceiverSection';
import PaymentMethodSection from './PaymentMethodSection';
import CartItemsSummarySection from './CartItemsSummarySection';
import { updateUser, removeFromCart } from '../../store/actions';
import PaymentSummarySection from './PaymentSummarySection';
import useTotalPrice from '../../common/hooks/useTotalPrice';
import { addOrder } from '../../store/actions';
import Spinner from '../../common/comps/Spinner';
import withErrorHandler from '../../common/hoc/withErrorHandler';
import useRedirectToSignInPage from '../../common/hooks/useRedirectToSignInPage';

function Shipping() {
  const token = useSelector(state => state.auth.token);
  const cartItems = useSelector(state => state.cart.cartItems.bags);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const onUpdateUser = (updatedUser) => dispatch(updateUser(updatedUser));
  const onAddOrder = (newOrder) => dispatch(addOrder(newOrder));
  const onRemoveFromCart = (bagId) => dispatch(removeFromCart(bagId));
  const [paymentMethod, setPaymentMethod] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [errors, setErrors] = useState({
    userAddress: false,
    paymentMethod: false
  });
  const totalPrice = useTotalPrice(cartItems);
  const redirectToSignInPage = useRedirectToSignInPage('/shippingPage');

  useEffect(() => {
    if (!user) {
      redirectToSignInPage();
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const userAddress = user.address;
      setUserAddress(userAddress);
    }
  }, [user]);

  const handleUserAddress = address => {
    onUpdateUser({
      address
    });
    setUserAddress(address);
  };

  const handleSubmitClick = () => {
    const newErrors = {};
    if (!userAddress) newErrors.userAddress = true;
    if (!paymentMethod) newErrors.paymentMethod = true;
    setErrors(newErrors);

    let items = [];

    cartItems.map(item => {
      const cartItem = {};
      cartItem.bag = item.bagId;
      cartItem.size = item.size;
      cartItem.color = item.color;
      cartItem.count = item.count;
      cartItem.protectionType = {
        additionalPrice: item.protectionType.additionalPrice,
        title: item.protectionType.title
      };
      cartItem.price = item.price;
      items.push(cartItem);
    });

    const newOrder = {
      items,
      user,
      totalPrice
    };

    onAddOrder(newOrder);
    if (userAddress && paymentMethod) Router.push('/thankYouPage');
  };

  if (!user) return <Spinner/>;

  return (
    <ShippingContainer>
      <ReceiveDetails>
        <ReceiverSection
          userAddress={userAddress}
          alert={errors.userAddress}
          onUserAddress={address => handleUserAddress(address)}/>
        <CartItemsSummarySection/>
      </ReceiveDetails>
      <div>
        <PaymentMethodSection
          onPaymentMethod={paymentType => setPaymentMethod(paymentType)}
          paymentMethodError={errors.paymentMethod}
        />
        <PaymentSummarySection onSubmitClick={handleSubmitClick}/>
      </div>
    </ShippingContainer>
  );
}

export default withErrorHandler(Shipping);
