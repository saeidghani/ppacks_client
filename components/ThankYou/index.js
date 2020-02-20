import React, {useEffect} from 'react';
import Link from 'next/link';
import { Icon } from 'antd';

import { ThankYouContainer, IconCheckWrapper, IconArrowLeftWrapper } from '../../styles/ThankYouStyles';
import { LinkFilled } from '../../common/styled/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../store/actions';

function ThankYou() {
  const cartItems = useSelector(state => state.cart.cartItems.bags);
  const dispatch = useDispatch();
  const onRemoveFromCart = (bagId) => dispatch(removeFromCart(bagId));

  useEffect(() => {
    cartItems.map(item =>
      onRemoveFromCart(item.bagId)
    );
  }, []);

  return (
    <ThankYouContainer>
      <IconCheckWrapper>
        <Icon type='check'/>
      </IconCheckWrapper>
      <h1>Thank You!</h1>
      <p>You have successfully purchased our product,
        you will get an email containing the details of the purchase
      </p>
      <Link href='/'>
        <LinkFilled>
          <IconArrowLeftWrapper>
            <Icon type="arrow-left"/>
          </IconArrowLeftWrapper>
          Back To HomePage
        </LinkFilled>
      </Link>
    </ThankYouContainer>
  );
}

export default ThankYou;