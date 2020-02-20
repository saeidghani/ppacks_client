import React, { Fragment, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { StyledTextArea } from '../../common/styled/StyledTextArea';
import { ButtonOutline, ButtonFilled } from '../../common/styled/Button';
import {
  ReceiverSectionContainer,
  Feature,
  Title,
  ErrorMsg,
  ButtonWrapper
} from '../../styles/ShippingStyles/RecieverSectionStyles';
import Spinner from '../../common/comps/Spinner';

function ReceiverSection({ userAddress, alert, onUserAddress }) {
  const [editsAddress, setEditsAddress] = useState(false);
  const user = useSelector(state => state.auth.user);
  const { handleSubmit, control, errors } = useForm();

  const onSubmit = (data) => {
    onUserAddress(data.TextArea);
    setEditsAddress(false);
  };

  if(!user) return <Spinner/>;

  return (
    <ReceiverSectionContainer>
      <Feature><Title>Receiver name:</Title>{user.name}</Feature>
      <Feature><Title>Receiver Address:</Title></Feature>
      {(userAddress && !editsAddress) &&
      <Fragment>
        <p>{userAddress}</p>
        <ButtonWrapper>
          <ButtonFilled onClick={() => setEditsAddress(true)}>
            Edit address
          </ButtonFilled>
        </ButtonWrapper>
      </Fragment>}
      {(!userAddress || editsAddress) &&
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={<StyledTextArea alert={alert}/>}
          name="TextArea"
          control={control}
          defaultValue={userAddress}
          rules={{ required: true, minLength: 10 }}
        />
        <ButtonWrapper>
          <ButtonOutline type='submit'>
            save address
          </ButtonOutline>
        </ButtonWrapper>
        {errors.TextArea && errors.TextArea.type === 'required' &&
        <ErrorMsg>'Address is required'</ErrorMsg>}
        {errors.TextArea && errors.TextArea.type === 'minLength' &&
        <ErrorMsg>'Address must be more than 10 characters'</ErrorMsg>}
      </form>
      }
    </ReceiverSectionContainer>
  );
}

export default ReceiverSection;
