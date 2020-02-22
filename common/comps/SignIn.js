import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { Form, Icon, Input } from 'antd';
import Scroll from 'react-scroll';
import axios from 'axios';

import { auth } from '../../store/actions';
import {LinkText, ButtonOutline} from '../styled/Button';
import useErrorHandler from '../hooks/useErrorHandler';


function SignInForm ({form, auth}) {
  const [error, errorConfirmedHandler] = useErrorHandler(axios);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const scroll = Scroll.animateScroll;
    const scrollToTop = () => scroll.scrollTo(1, {smooth: true, duration: 1500,});
    scrollToTop();
  }, []);

  useEffect(() => {
    if(error) {
      if(error.message.includes(401)) {
        const errorMsg = 'Incorrect email or password';
        setErrorMsg(errorMsg);
      }
    }
  }, [error]);

 const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const {email, password} = values;
        const authDetails = {
          email,
          password,
          isSignup: false
        };
        auth(authDetails);
      }
    });
  };

  const { getFieldDecorator } = form;
  return (
    <Form
      onSubmit={handleSubmit}
      className="login-form"
      style={{width: '80%', maxWidth: '40rem' ,margin: '0 auto', padding: '10rem 2rem 10rem 2rem'}} >
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Please input your email!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      {errorMsg &&
      <div style={{color: 'red', fontSize: '1.4rem', position: 'relative', bottom: '1rem'}}>
        {errorMsg}
      </div>}
      <Form.Item >
        <ButtonOutline type="primary" htmlType="submit" className="login-form-button" style={{lineHeight: '3rem'}}>
          Log in
        </ButtonOutline>
        <span>  Or </span>
        <LinkText href='/signUpPage'>
          register now!
        </LinkText>
      </Form.Item>
    </Form>
  );
}

const SignIn = Form.create({ name: 'normal_login' })(SignInForm);
export default connect(null, {auth})(SignIn);